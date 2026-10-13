
'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

import Planejamento from '@/public/images/planejamento.jpg';
import Codigo from '@/public/images/codigo.jpg';
import Vendas from '@/public/images/vendas.jpg';
import Suporte from '@/public/images/suporte.jpg';

const servicos = [
  {
    numero: '01',
    titulo: 'Sites e Landing pages',
    descricao:
      'Sites modernos, responsivos e personalizados para fortalecer a presença digital da sua empresa.',
  },
  {
    numero: '02',
    titulo: 'Lojas Virtuais',
    descricao:
      'Lojas virtuais completas, com catálogo de produtos, carrinho de compras e integração de pagamentos para vender seus produtos pela internet.',
  },
  {
    numero: '03',
    titulo: 'Sistemas sob medida',
    descricao:
      'Soluções digitais desenvolvidas para automatizar processos e atender às necessidades do seu negócio.',
  },
];

const imagensSobre = [
  {
    src: Planejamento,
    alt: 'Planejamento e UI/UX',
    titulo: 'Planejamento e UI/UX',
    altura: 'h-48',
  },
  {
    src: Codigo,
    alt: 'Código limpo e otimizado',
    titulo: 'Código Limpo',
    altura: 'h-36',
  },
  {
    src: Vendas,
    alt: 'Foco em vendas',
    titulo: 'Foco em Vendas',
    altura: 'h-36',
  },
  {
    src: Suporte,
    alt: 'Suporte dedicado',
    titulo: 'Suporte Dedicado',
    altura: 'h-48',
  },
];

const whatsappUrl =
  'https://wa.me/5511948188976?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site%20ou%20sistema.';

export default function Home() {
  const reduzirMovimento = useReducedMotion();

  const entrada = {
    hidden: {
      opacity: 0,
      y: reduzirMovimento ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduzirMovimento ? 0 : 0.65,
        ease: 'easeOut' as const,
      },
    },
  };

  const entradaHero = {
    hidden: {
      opacity: 0,
      y: reduzirMovimento ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduzirMovimento ? 0 : 0.7,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section
        id="inicio"
        className="relative isolate flex min-h-[650px] items-center justify-center overflow-hidden bg-[url('/images/noteorange.jpg')] bg-cover bg-center sm:min-h-[680px] lg:min-h-[700px]"
      >
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/35 to-black" />

        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduzirMovimento ? 0 : 0.13,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-7xl px-6 py-32 text-center sm:py-28"
        >
          <motion.span
            variants={entradaHero}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-gray-200 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Desenvolvimento de sites e sistemas
          </motion.span>

          <motion.h1
            variants={entradaHero}
            className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Transformamos suas ideias em{' '}
            <span className="text-primary">
              soluções digitais
            </span>{' '}
            que geram resultados
          </motion.h1>

          <motion.p
            variants={entradaHero}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8"
          >
            Criamos sites institucionais, landing pages, sistemas
            sob medida e lojas virtuais para ajudar seu negócio
            a crescer no digital.
          </motion.p>

          <motion.div
            variants={entradaHero}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#contato"
              whileHover={reduzirMovimento ? undefined : { y: -4, scale: 1.02 }}
              whileTap={reduzirMovimento ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-primary px-8 py-4 font-semibold text-black transition-colors duration-300 hover:bg-primary-hover sm:w-auto"
            >
              Solicitar orçamento
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </motion.a>

            <motion.a
              href="#servicos"
              whileHover={reduzirMovimento ? undefined : { y: -4 }}
              whileTap={reduzirMovimento ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-lg border border-white/30 bg-black/20 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:border-orange-500 hover:bg-white/5 sm:w-auto"
            >
              Conhecer serviços
            </motion.a>
          </motion.div>

          <motion.p
            variants={entradaHero}
            className="mt-6 text-sm text-gray-400"
          >
            Soluções sob medida para transformar ideias em projetos reais.
          </motion.p>
        </motion.div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="relative bg-[#080808] px-6 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduzirMovimento ? 0 : 0.12,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.span
              variants={entrada}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
            >
              O que fazemos
            </motion.span>

            <motion.h2
              variants={entrada}
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Tecnologia para tirar suas ideias do papel
            </motion.h2>

            <motion.p
              variants={entrada}
              className="mt-5 leading-7 text-gray-400"
            >
              Do primeiro site a um sistema personalizado,
              desenvolvemos soluções alinhadas aos objetivos
              do seu negócio.
            </motion.p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {servicos.map((servico, index) => (
              <motion.article
                key={servico.numero}
                initial={{
                  opacity: 0,
                  y: reduzirMovimento ? 0 : 35,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduzirMovimento ? 0 : 0.55,
                  delay: reduzirMovimento ? 0 : index * 0.14,
                  ease: 'easeOut',
                }}
                whileHover={
                  reduzirMovimento ? undefined : { y: -5 }
                }
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-primary/50 hover:bg-white/5"
              >
                <span className="text-lg font-semibold text-primary">
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
                  className="mt-7 inline-flex items-center gap-2 font-medium text-primary transition-colors group-hover:text-primary-hover"
                >
                  Vamos conversar
                  <motion.span
                    aria-hidden="true"
                    animate={
                      reduzirMovimento ? undefined : { x: [0, 4, 0] }
                    }
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                    }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="border-t border-white/10 bg-black px-6 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Texto */}
            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: reduzirMovimento ? 0 : 0.12,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.span
                variants={entrada}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
              >
                Sobre nós
              </motion.span>

              <motion.h2
                variants={entrada}
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Seu projeto começa com uma ideia
              </motion.h2>

              <motion.p
                variants={entrada}
                className="mt-5 leading-7 text-gray-400"
              >
                Entendemos sua necessidade e desenvolvemos uma
                solução digital pensada para o seu projeto, com
                foco em funcionalidade, experiência do usuário e
                crescimento do negócio.
              </motion.p>

              <motion.div
                variants={entrada}
                className="mt-8 flex flex-wrap items-center gap-6"
              >
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-2xl font-bold text-white">
                    + 450 projetos
                  </p>
                  <p className="text-sm text-gray-400">
                    Entregues com foco em performance
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <p className="text-2xl font-bold text-white">
                    100%
                  </p>
                  <p className="text-sm text-gray-400">
                    Personalizado e responsivo
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Imagens */}
            <div className="grid grid-cols-2 gap-4">
              {imagensSobre.map((imagem, index) => (
                <motion.div
                  key={imagem.titulo}
                  initial={{
                    opacity: 0,
                    y: reduzirMovimento ? 0 : 30,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: reduzirMovimento ? 0 : 0.55,
                    delay: reduzirMovimento ? 0 : index * 0.12,
                    ease: 'easeOut',
                  }}
                  whileHover={
                    reduzirMovimento ? undefined : { y: -5 }
                  }
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors duration-300 hover:border-primary/50 ${index % 2 === 0 ? 'mt-0' : 'mt-8'
                    } ${imagem.alt === 'Código limpo e otimizado' || imagem.alt === 'Foco em vendas' ? 'h-36' : 'h-48'}`}
                >
                  <Image
                    src={imagem.src}
                    alt={imagem.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 45vw, 280px"
                  />

                  <div className="absolute inset-0 flex items-end bg-gradient-to-tr from-black/80 via-black/20 to-transparent p-4">
                    <span className="text-sm font-medium text-gray-200">
                      {imagem.titulo}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="border-t border-white/10 bg-[#0b0b0b] px-6 py-20"
      >
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduzirMovimento ? 0 : 0.12,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={entrada}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Vamos conversar
          </motion.span>

          <motion.h2
            variants={entrada}
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Vamos transformar sua ideia em realidade?
          </motion.h2>

          <motion.p
            variants={entrada}
            className="mt-5 leading-7 text-gray-400"
          >
            Conte o que você precisa e vamos conversar sobre
            a melhor solução para o seu negócio.
          </motion.p>

          <motion.a
            variants={entrada}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={
              reduzirMovimento ? undefined : { y: -4, scale: 1.02 }
            }
            whileTap={
              reduzirMovimento ? undefined : { scale: 0.98 }
            }
            transition={{ duration: 0.2 }}
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-lg bg-primary px-8 py-4 font-semibold text-black transition-colors hover:bg-primary-hover"
          >
            Entrar em contato
          </motion.a>
        </motion.div>
      </section>

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entre em contato pelo WhatsApp"
        title="Fale conosco pelo WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-20 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5A] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 md:right-10 lg:right-16"
      >
        {/* Halo animado */}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.35, 1.55],
            opacity: [0.45, 0.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />

        {/* Mantenha aqui o SVG original do WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <path d="M12.04 2a9.87 9.87 0 0 0-8.5 14.88L2 22l5.29-1.39A9.94 9.94 0 0 0 12.04 22 10 10 0 1 0 12.04 2Zm0 18.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.14.82.84-3.06-.2-.32a8.16 8.16 0 1 1 6.98 3.88Zm4.49-6.12c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" />
        </svg>
      </motion.a>

    </main>
  );
}
