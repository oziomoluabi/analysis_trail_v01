'use client';

import React, { useState, useEffect } from 'react';
import SectionOverview from '../components/SectionOverview';
import SectionChildYouth from '../components/SectionChildYouth';
import SectionPoverty from '../components/SectionPoverty';
import SectionHealth from '../components/SectionHealth';
import SectionElderly from '../components/SectionElderly';

export default function HomePage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('section[id]'));
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute('id');
                    if (!id) return;
                    
                    const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
                    const mobileNavLink = document.querySelector(`.mobile-nav-link[href="#${id}"]`);
                    
                    if (entry.isIntersecting) {
                        document.querySelectorAll('.nav-link.active, .mobile-nav-link.active').forEach(link => link.classList.remove('active'));
                        if (navLink) navLink.classList.add('active');
                        if (mobileNavLink) mobileNavLink.classList.add('active');
                    }
                });
            },
            {
                rootMargin: '-30% 0px -70% 0px',
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        const handleNavLinkClick = (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        const allNavLinks = Array.from(document.querySelectorAll('a.nav-link[href^="#"], a.mobile-nav-link[href^="#"]'));
        allNavLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            allNavLinks.forEach(link => link.removeEventListener('click', handleNavLinkClick));
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="antialiased font-inter bg-slate-900 text-slate-200">
            <header className="bg-slate-900/80 backdrop-blur-sm border-b-2 border-teal-500/50 sticky top-0 z-50">
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="#overview" className="text-xl md:text-2xl font-black text-sky-400 tracking-tighter hover:text-sky-300 transition-colors">
                                [OSUN_INSIGHTS_v2.0]
                            </a>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex md:space-x-1">
                            <a href="#overview" className="nav-link px-3 py-2 text-sm text-slate-400 font-medium transition-all duration-300 border-b-2 border-transparent hover:text-teal-300 hover:border-teal-400">/overview</a>
                            <a href="#youth" className="nav-link px-3 py-2 text-sm text-slate-400 font-medium transition-all duration-300 border-b-2 border-transparent hover:text-teal-300 hover:border-teal-400">/child-youth</a>
                            <a href="#poverty" className="nav-link px-3 py-2 text-sm text-slate-400 font-medium transition-all duration-300 border-b-2 border-transparent hover:text-teal-300 hover:border-teal-400">/poverty-inclusion</a>
                            <a href="#health" className="nav-link px-3 py-2 text-sm text-slate-400 font-medium transition-all duration-300 border-b-2 border-transparent hover:text-teal-300 hover:border-teal-400">/health-wellbeing</a>
                            <a href="#elderly" className="nav-link px-3 py-2 text-sm text-slate-400 font-medium transition-all duration-300 border-b-2 border-transparent hover:text-teal-300 hover:border-teal-400">/elderly-welfare</a>
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                id="mobile-menu-button"
                                className="inline-flex items-center justify-center p-2 text-slate-400 hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isMobileMenuOpen ? (
                                    <svg className="h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                                ) : (
                                    <svg className="h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                )}
                            </button>
                        </div>
                    </div>
                    {/* Mobile Navigation Menu */}
                    <div id="mobile-menu" className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-700">
                            <a href="#overview" className="mobile-nav-link block px-3 py-2 text-base text-slate-300 rounded-sm hover:text-teal-300 hover:bg-slate-800">/overview</a>
                            <a href="#youth" className="mobile-nav-link block px-3 py-2 text-base text-slate-300 rounded-sm hover:text-teal-300 hover:bg-slate-800">/child-youth</a>
                            <a href="#poverty" className="mobile-nav-link block px-3 py-2 text-base text-slate-300 rounded-sm hover:text-teal-300 hover:bg-slate-800">/poverty-inclusion</a>
                            <a href="#health" className="mobile-nav-link block px-3 py-2 text-base text-slate-300 rounded-sm hover:text-teal-300 hover:bg-slate-800">/health-wellbeing</a>
                            <a href="#elderly" className="mobile-nav-link block px-3 py-2 text-base text-slate-300 rounded-sm hover:text-teal-300 hover:bg-slate-800">/elderly-welfare</a>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <SectionOverview />
                <SectionChildYouth />
                <SectionPoverty />
                <SectionHealth />
                <SectionElderly />
            </main>
            
            <footer className="bg-slate-900 border-t-2 border-teal-500/50 mt-16">
                <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-500">
                    <p>This interactive report is synthesized from deep research analysis on the current status of development in Osun State, Nigeria.</p>
                    <p className='mt-2'>&copy; 2025 Interactive Development Insights. All data presented for informational and analytical purposes only. Synthesized data points are based on established trends and are for illustrative purposes.</p>
                    <p className='mt-6 text-xs tracking-widest text-teal-700'>[SESSION_TERMINATED]</p>
                </div>
            </footer>
        </div>
    );
}
