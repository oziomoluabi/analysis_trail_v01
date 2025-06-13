# All-In-One Content Processor:
#   – Backup Directory
#   – Clipboard→File Extraction (START/END blocks)
#       • Strips Markdown fences (```…```), BOMs, quotes/backticks in filenames
#   – Remove IGNORE_WHEN_COPYING blocks

import os
import shutil
import datetime
import re
import traceback
import pyperclip
import chardet  # Added for encoding detection
from typing import List, Tuple

# ====================================
# Configuration
# ====================================
ROOT_FOLDER     = os.getcwd()
SOURCE_FOLDER   = r"C:\Users\ozi10\Downloads\Projects_Code\PROJECTS\pages"
BACKUP_BASE     = r"C:\Users\ozi10\Downloads\BACKUP"
ERROR_LOG_NAME  = "error_log.txt"

# IGNORE_WHEN_COPYING removal
IGNORE_EXTS   = {'.html','.htm','.js','.json','.css','.txt','.md'}
IGNORE_BLOCK  = re.compile(
    r'[\r\n]*?IGNORE_WHEN_COPYING_START.*?IGNORE_WHEN_COPYING_END[\r\n]*',
    flags=re.DOTALL|re.IGNORECASE
)

# Files to skip (node_modules, etc.)
SKIP_DIRS = {'node_modules', '.git', '__pycache__', 'venv', 'env', '.venv', '.env'}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB max file size to process

# START/END block pattern
START_END_PATTERN = re.compile(
    r'(?:<!--\s*|---\s*)START\s+OF\s+FILE\s*:?\s+([^\r\n]+?)\s*(?:-->|---)\s*'
    r'(.*?)'
    r'(?:<!--\s*|---\s*)END\s+OF\s+FILE\s*:?\s+\1\s*(?:-->|---)',
    re.DOTALL|re.IGNORECASE
)

# Pattern to detect trailing unwanted characters at the end of files
# This will match trailing backslashes, backticks, or other common unwanted characters
TRAILING_CHARS_PATTERN = re.compile(r'[`\\]+\s*$', re.MULTILINE)

# ====================================
# Helpers
# ====================================
def get_ts() -> str:
    return datetime.datetime.now().strftime("%Y%m%d-%H%M%S")

def ext_of(path: str) -> str:
    return os.path.splitext(path)[1].lower()

def clean_file_path(p: str) -> str:
    """
    Strip any enclosing quotes or backticks around the filename.
    """
    p = p.strip()
    m = re.match(r"^['\"`](.+?)['\"`]$", p)
    return m.group(1) if m else p

def strip_code_fences(text: str) -> str:
    """
    Remove a leading ```lang and trailing ``` from the block, if present.
    Also strip a BOM if it sneaked in.
    """
    lines = text.splitlines()
    if lines and lines[0].strip().startswith('```'):
        lines = lines[1:]
    if lines and lines[-1].strip().startswith('```'):
        lines = lines[:-1]
    cleaned = "\n".join(lines)
    # Remove BOM
    return cleaned.lstrip('\ufeff')

def clean_trailing_chars(text: str) -> str:
    """
    Remove trailing backslashes, backticks, or other unwanted characters at the end of the file.
    Also clean up excessive newlines at the end.
    """
    # First, remove trailing backslashes, backticks, etc.
    text = TRAILING_CHARS_PATTERN.sub('', text)
    
    # Then normalize line endings and remove excessive blank lines at the end
    text = text.rstrip() + '\n'
    
    return text

def should_skip_path(path: str) -> bool:
    """Check if a path should be skipped based on directory names or file size"""
    # Skip certain directories
    parts = path.split(os.sep)
    for part in parts:
        if part in SKIP_DIRS:
            return True
            
    # Skip large files
    if os.path.isfile(path):
        try:
            if os.path.getsize(path) > MAX_FILE_SIZE:
                print(f"Skipping large file: {path}")
                return True
        except Exception:
            return True
            
    return False

def detect_encoding(file_path: str) -> str:
    """Detect the encoding of a file"""
    try:
        with open(file_path, 'rb') as f:
            # Read only the first 100KB to detect encoding
            raw_data = f.read(100 * 1024)
            result = chardet.detect(raw_data)
            return result['encoding'] or 'utf-8'
    except Exception:
        return 'utf-8'  # Default to utf-8 if detection fails

# ====================================
# Part 1: Backup
# ====================================
def backup_dir():
    os.makedirs(BACKUP_BASE, exist_ok=True)
    ts = get_ts()
    dst = os.path.join(BACKUP_BASE, f"backup_{ts}")
    try:
        shutil.copytree(SOURCE_FOLDER, dst)
        print(f"[{ts}] Backed up → {dst}")
    except Exception as e:
        print(f"[{ts}] Backup error: {e}")

# ====================================
# Part 2: Clipboard→File Extraction
# ====================================
def parse_clipboard(text: str) -> List[Tuple[str,str]]:
    out = []
    for m in START_END_PATTERN.finditer(text):
        raw  = m.group(1)               # e.g. "`package.json`" or 'next.config.js'
        path = clean_file_path(raw).lstrip("./")
        content = m.group(2)
        out.append((path, content))
    return out

def write_files(files: List[Tuple[str,str]]):
    for rel, raw_content in files:
        # strip fences + BOM:
        content = strip_code_fences(raw_content)
        # Clean trailing characters:
        content = clean_trailing_chars(content)
        
        dest = os.path.join(ROOT_FOLDER, rel)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        try:
            with open(dest, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Wrote → {dest}")
        except Exception as e:
            print(f"Error writing {dest}: {e}")

def do_clipboard_extract():
    print(f"[{get_ts()}] Clipboard extraction…")
    clip = pyperclip.paste()
    if not clip:
        print("  (clipboard is empty)")
        return
    files = parse_clipboard(clip)
    if not files:
        print("  (no START/END blocks found)")
    else:
        write_files(files)
        print(f"[{get_ts()}] Done.")

# ====================================
# Part 3: Remove IGNORE_WHEN_COPYING Blocks
# ====================================
_errors = []
def _clean_ignore(path):
    # Skip node_modules and other problematic directories
    if should_skip_path(path):
        return
        
    try:
        # Detect encoding instead of assuming utf-8
        encoding = detect_encoding(path)
        
        # Process file in chunks to avoid memory errors
        with open(path, 'r', encoding=encoding, errors='replace') as f:
            content = ""
            chunk_size = 1024 * 1024  # 1MB chunks
            modified = False
            
            for chunk in iter(lambda: f.read(chunk_size), ''):
                new_chunk = IGNORE_BLOCK.sub('', chunk)
                if new_chunk != chunk:
                    modified = True
                content += new_chunk
            
            # Clean trailing characters
            cleaned_content = clean_trailing_chars(content)
            if cleaned_content != content:
                modified = True
                content = cleaned_content
                
            if modified:
                with open(path, 'w', encoding=encoding, errors='replace') as out:
                    out.write(content)
                    
    except Exception:
        _errors.append((path, traceback.format_exc(), ''))

def remove_ignore_blocks():
    print(f"[{get_ts()}] Removing IGNORE_WHEN_COPYING and trailing characters…")
    for root, _, files in os.walk(ROOT_FOLDER):
        # Skip node_modules and other directories
        if any(skip_dir in root.split(os.sep) for skip_dir in SKIP_DIRS):
            continue
            
        for fn in files:
            if ext_of(fn) in IGNORE_EXTS:
                _clean_ignore(os.path.join(root, fn))
                
    if _errors:
        log = os.path.join(ROOT_FOLDER, ERROR_LOG_NAME)
        with open(log, 'w', encoding='utf-8') as L:
            for p, tb, snip in _errors:
                L.write(f"FILE: {p}\n{tb}\nOFFENDING:\n{snip}\n{'='*60}\n")
        print(f"  Completed with {len(_errors)} errors – see {log}")
    else:
        print("  No errors.")

# ====================================
# Main
# ====================================
def main():
    print("=== BACKUP ===")
    backup_dir()

    print("\n=== CLIPBOARD → FILE ===")
    do_clipboard_extract()

    print("\n=== CLEAN IGNORE_WHEN_COPYING AND TRAILING CHARACTERS ===")
    remove_ignore_blocks()

    print(f"\n[{get_ts()}] All operations completed successfully!")

if __name__ == "__main__":
    main()