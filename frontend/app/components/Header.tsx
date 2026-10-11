
'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo_Millanes from '@/public/images/logo_Millanes.png';

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
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
                {/* Logo */}
                <a
                    href="#inicio"
                    aria-label="DevSite - Página inicial"
                    className="group flex shrink-0 items-center gap-3"
                >
                    <Image
                    src={Logo_Millanes}
                    alt="Logo Millanes"
                    width={180}
                    height={180}
                    />
                    

                    
                </a>

                {/* Navegação */}
                <nav
                    aria-label="Navegação principal"
                    className="hidden items-center gap-8 md:flex"
                >
                    <a
                        href="#inicio"
                        className="text-sm font-semibold text-gray-300 transition-colors duration-300 hover:text-primary"
                    >
                        Início
                    </a>

                    <a
                        href="#sobre"
                        className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-primary"
                    >
                        Sobre
                    </a>

                    <a
                        href="#contato"
                        className="text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-primary"
                    >
                        Contato
                    </a>
                </nav>

                {/* Botão de orçamento */}
                <a
                    href="#contato"
                    className="group relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-amber-500/20 sm:px-5"
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
