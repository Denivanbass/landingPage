
'use client';

import { useEffect, useState } from 'react';

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full border-b px-6 transition-all duration-300 sm:px-8 ${scrolled
                    ? 'border-white/10 bg-black/65 py-3 shadow-lg shadow-black/10 backdrop-blur-2xl backdrop-saturate-150'
                    : 'border-transparent bg-black/20 py-5 backdrop-blur-sm'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
                {/* Logo */}
                <a
                    href="#inicio"
                    aria-label="DevSite - Página inicial"
                    className="group flex shrink-0 items-center gap-3"
                >
                    
                    

                    {/* Nome da marca */}
                    <span className="flex flex-col leading-none">
                        <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                            Dev<span className="text-amber-400">Site</span>
                        </span>

                        <span className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-gray-400 sm:text-[10px]">
                            Soluções digitais
                        </span>
                    </span>
                </a>

                {/* Navegação */}
                <nav
                    aria-label="Navegação principal"
                    className="hidden items-center gap-8 md:flex"
                >
                    <a
                        href="#inicio"
                        className="text-sm font-semibold text-amber-400 transition-colors duration-300 hover:text-amber-300"
                    >
                        Início
                    </a>

                    <a
                        href="#sobre"
                        className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-amber-400"
                    >
                        Sobre
                    </a>

                    <a
                        href="#contato"
                        className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-amber-400"
                    >
                        Contato
                    </a>
                </nav>

                {/* Botão de orçamentoo */}
                <a
                    href="#contato"
                    className="group relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/20 sm:px-5"
                >
                    <span>Orçamento</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </a>
            </div>
        </header>
    );
}
