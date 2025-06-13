'use client';

import React, { useState, useEffect, useRef } from 'react';

const Accordion = ({ title, children, startOpen = false }) => {
    const [isOpen, setIsOpen] = useState(startOpen);
    const contentRef = useRef(null);

    useEffect(() => {
        const updateMaxHeight = () => {
            if (contentRef.current) {
                contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
            }
        };
        updateMaxHeight();

        // Optional: Adjust if content inside changes size while open
        // This can be performance intensive, use with caution
        const resizeObserver = new ResizeObserver(() => {
            if(isOpen) {
               updateMaxHeight();
            }
        });
        if(contentRef.current){
            resizeObserver.observe(contentRef.current);
        }
        return () => resizeObserver.disconnect();

    }, [isOpen]);

    return (
        <div className="accordion-item border border-slate-700/80 rounded-none">
            <button
                className="accordion-button w-full text-left bg-slate-700 p-4 text-slate-200 uppercase tracking-wider font-semibold transition-colors duration-300 hover:bg-slate-600/70 hover:text-teal-300 rounded-none flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${title.replace(/\s+/g, '-')}`}
            >
                <span>{title}</span>
                <span className={`transform transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            <div
                ref={contentRef}
                id={`accordion-content-${title.replace(/\s+/g, '-')}`}
                style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px', overflow: 'hidden', transition: 'max-height 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}
                className="accordion-content bg-slate-800/60 text-slate-400 border-t border-slate-700/80 rounded-none"
            >
                <div className="p-6 text-sm prose-custom">
                   {children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
