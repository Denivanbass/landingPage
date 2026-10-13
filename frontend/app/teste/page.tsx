
'use client';

import { motion } from 'motion/react';

export default function HeroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
      }}
    >
      <h1 className="text-5xl font-bold">
        Criamos sites e sistemas
        para o seu negócio.
      </h1>

      <p className="mt-4 text-lg">
        Soluções digitais modernas e personalizadas.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white"
      >
        Solicitar orçamento
      </motion.button>
    </motion.div>
  );
}
