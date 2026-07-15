import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id='home' className='relative px-4 pb-14 pt-6 sm:px-6 sm:pb-20'>
      <div className='hero-gradient pointer-events-none absolute inset-0' />
      <div className='relative mx-auto grid max-w-6xl items-center gap-8 rounded-2xl bg-[#114e61] px-5 py-10 text-white shadow-2xl shadow-[#2b1b07]/20 sm:px-10 sm:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-14'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className='order-1 mx-auto w-full max-w-[20rem] sm:max-w-sm lg:order-2 lg:max-w-md'
        >
          <div className='relative overflow-hidden rounded-2xl border border-white/20 bg-[#f5c766] p-3 shadow-2xl shadow-slate-950/30'>
            <Image
              src='/bibek-sunar-portrait.jpg'
              alt='Official portrait of Bibek Sunar, marketing professional from Nepal'
              width={1200}
              height={1800}
              priority
              className='h-auto w-full rounded-xl bg-black object-contain'
            />
            <div className='absolute inset-x-5 bottom-5 rounded-lg bg-[#114e61]/90 px-4 py-3 text-white shadow-xl backdrop-blur'>
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-brand-200'>Bibek Sunar</p>
              <p className='mt-1 text-sm font-medium text-white/90'>Marketing • Sales • Entrepreneurship</p>
            </div>
          </div>
        </motion.div>

        <div className='order-2 text-center lg:order-1 lg:text-left'>
          <motion.p
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className='mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#f5c766] shadow-sm backdrop-blur'
          >
            <span className='h-2 w-2 rounded-full bg-[#f5c766] shadow-[0_0_0_6px_rgba(245,199,102,0.18)]' />
            <span className='leading-relaxed'>Marketing Professional • Entrepreneur in progress</span>
          </motion.p>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='font-heading mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:mx-0 lg:text-6xl'
          >
            Bibek <span className='text-gradient'>Sunar</span>
          </motion.h1>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className='mt-5 flex flex-wrap justify-center gap-3 text-sm text-white/82 lg:justify-start'
          >
            <span className='rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white'>
              Based in Bharatpur, Nepal
            </span>
            <span className='rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white'>
              Marketing • Sales • Digital Marketing
            </span>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/86 sm:text-lg lg:mx-0'
          >
            I am Bibek Sunar, a marketing graduate from Nepal with a strong passion for marketing, sales, and entrepreneurship. I aim to build impactful businesses and create meaningful value through innovative ideas.
          </motion.p>

          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='mt-8 grid gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start'
          >
            <a href='#contact' className='rounded-full bg-[#f5c766] px-7 py-3 text-center text-sm font-bold text-[#113c49] shadow-lg shadow-black/15 transition hover:bg-[#ffd877]'>
              Contact Me
            </a>
            <a href='#projects-achievements' className='rounded-full border border-white/25 bg-white/10 px-7 py-3 text-center text-sm font-bold text-white transition hover:border-[#f5c766] hover:text-[#f5c766]'>
              View Projects
            </a>
            <a href='#about' className='rounded-full border border-white/25 bg-white/10 px-7 py-3 text-center text-sm font-bold text-white transition hover:border-[#f5c766] hover:text-[#f5c766]'>
              About Me
            </a>
          </motion.div>

          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            <div className='rounded-lg border border-white/15 bg-white/10 p-5 text-left'>
              <div className='mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f5c766] font-semibold text-[#113c49] shadow-lg shadow-black/20'>
                M
              </div>
              <div>
                <p className='text-sm font-semibold text-white'>Marketing that converts</p>
                <p className='mt-1 text-sm text-white/72'>Obsessed with data-backed storytelling, funnels, and repeatable growth.</p>
              </div>
            </div>
            <div className='rounded-lg border border-white/15 bg-white/10 p-5 text-left'>
              <div className='mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white font-semibold text-[#114e61] shadow-lg shadow-black/20'>
                E
              </div>
              <div>
                <p className='text-sm font-semibold text-white'>Entrepreneurial drive</p>
                <p className='mt-1 text-sm text-white/72'>Building and testing ideas that create value and real customer impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
