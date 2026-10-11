
'use client';

import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/10 bg-black px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">
        <p>
          © {year ?? 2026} Millanes. Todos os direitos reservados.
        </p>

        <a
          href="#inicio"
          className="transition hover:text-amber-400"
        >
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
