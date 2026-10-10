
'use client';

const servicos = [
  {
    numero: '01',
    titulo: 'Sites profissionais',
    descricao:
      'Sites modernos, responsivos e personalizados para fortalecer a presença digital da sua empresa.',
  },
  {
    numero: '02',
    titulo: 'Landing pages',
    descricao:
      'Páginas estratégicas para apresentar sua oferta, captar contatos e gerar oportunidades de negócio.',
  },
  {
    numero: '03',
    titulo: 'Sistemas personalizados',
    descricao:
      'Soluções digitais desenvolvidas para automatizar processos e atender às necessidades do seu negócio.',
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">


      {/* Hero */}
      <section
        id="inicio"
        className="relative isolate flex min-h-[650px] items-center justify-center overflow-hidden bg-[url('/images/noteorange.jpg')] bg-cover bg-center sm:min-h-[680px] lg:min-h-[700px]"
      >
        {/* Camadas de escurecimento */}
        <div className="absolute inset-0 -z-10 bg-black/55" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/35 to-black" />

        {/* Conteúdo principal */}
        <div className="mx-auto w-full max-w-7xl px-6 py-32 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-gray-200 backdrop-blur-md">
            <span className="h-2 w-2  rounded-full bg-orange-500" />
            Desenvolvimento de sites e sistemas
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Transformamos suas idéias em{' '}
            <span className="text-orange-500">
              soluções digitais
            </span>{' '}
            que geram resultados.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Criamos sites profissionais, landing pages e sistemas
            personalizados para ajudar seu negócio a crescer no digital.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-orange-500 px-8 py-4 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-orange-400 sm:w-auto"
            >
              Solicitar orçamento
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href="#servicos"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-lg border border-white/30 bg-black/20 px-8 py-4 font-semibold text-white transition duration-300 hover:border-orange-500 hover:bg-white/5 sm:w-auto"
            >
              Conhecer serviços
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Soluções sob medida para transformar ideias em projetos reais.
          </p>
        </div>

        {/* Indicador visual inferior */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
      </section>

      {/* Serviços */}
      <section
        id="servicos"
        className="relative bg-[#080808] px-6 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              O que fazemos
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Tecnologia para tirar suas ideias do papel.
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Do primeiro site a um sistema personalizado, desenvolvemos
              soluções alinhadas aos objetivos do seu negócio.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {servicos.map((servico) => (
              <article
                key={servico.numero}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-white/[0.05]"
              >
                <span className="text-sm font-semibold text-orange-500">
                  {servico.numero}
                </span>

                <h3 className="mt-6 text-xl font-bold">
                  {servico.titulo}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {servico.descricao}
                </p>

                <a
                  href="#contato"
                  className="mt-7 inline-flex items-center gap-2 font-medium text-orange-500 transition group-hover:text-orange-400"
                >
                  Vamos conversar
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="border-t border-white/10 bg-black px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Seu projeto começa com uma ideia.
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Entendemos sua necessidade e desenvolvemos uma solução digital
            pensada para o seu projeto, com foco em funcionalidade,
            experiência do usuário e crescimento do negócio.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="border-t border-white/10 bg-[#0b0b0b] px-6 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Vamos conversar
          </span>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Vamos transformar sua ideia em realidade?
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Conte o que você precisa e vamos conversar sobre a melhor
            solução para o seu negócio.
          </p>

          <a
            href="mailto:contato@seudominio.com"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-lg bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
          >
            Entrar em contato
          </a>
        </div>
      </section>




      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/11948188976?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site%20ou%20sistema."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entre em contato pelo WhatsApp"
        title="Fale conosco pelo WhatsApp"
        className="fixed bottom-20 right-6 md:right-10 lg:right-16  z-50 flex  w-16 h-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-[#20BA5A] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <path d="M12.04 2a9.87 9.87 0 0 0-8.5 14.88L2 22l5.29-1.39A9.94 9.94 0 0 0 12.04 22 10 10 0 1 0 12.04 2Zm0 18.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.14.82.84-3.06-.2-.32a8.16 8.16 0 1 1 6.98 3.88Zm4.49-6.12c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" />
        </svg>
      </a>
    </main>
  );
}
