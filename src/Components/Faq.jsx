import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'

const Faq = () => {
  const data = [
    {
      src: "https://pub-8ca9b5847fbb4d4fb97b3497fb9521d5.r2.dev/hero_optim.mp4",
      span: '001',
      h1: 'Animate',
    },
    {
      src: "https://pub-8ca9b5847fbb4d4fb97b3497fb9521d5.r2.dev/hero_optim.mp4",
      span: '002',
      h1: 'Scroll',
    },
    {
      src: "https://pub-8ca9b5847fbb4d4fb97b3497fb9521d5.r2.dev/hero_optim.mp4",
      span: '003',
      h1: 'Hover',
    },
    {
      src: "https://pub-8ca9b5847fbb4d4fb97b3497fb9521d5.r2.dev/hero_optim.mp4",
      span: '004',
      h1: 'Focus',
    },
    ,
    {
      src: "https://pub-8ca9b5847fbb4d4fb97b3497fb9521d5.r2.dev/hero_optim.mp4",
      span: '005',
      h1: 'InView',
    },
    {
      src: "https://pub-8ca9b5847fbb4d4fb97b3497fb9521d5.r2.dev/hero_optim.mp4",
      span: '006',
      h1: 'WhileTap',
    },
  ];

  return (
    <>
      {/* Top Header Section */}
      <motion.div initial={{x:-1000}} animate={{x:0}}  transition={{duration:2,repeat:0}} className='faqhtxt max-xl:h-[520px] w-full h-[580px] leading-none max-lg:leading-none tracking-tighter'>
        <div className='faqtxtdiv absolute max-xl:top-[190px] max-md:top-[250px] top-[240px] px-10'>
          <h1 className='faqtheadertxt text-[120px] max-lg:text-[12vw] boldstyle'>Everything you</h1>
          <h1 className='faqtheadertxt text-[120px] max-lg:text-[12vw] boldstyle'>Need to know</h1>
          <div className='w-1/2 max-md:w-[70%] faqheaderpara fontstyle text-3xl leading-none tracking-tighter px-2 mt-6'>
            <h4>If you have more questions, feel free to send us an email. We’ll make our best to answer you as soon as we can.</h4>
          </div>
        </div>
      </motion.div>

      {/* Cards Section */}
      <div className='w-full min-h-[700px] bg-[#121212] px-6 pt-20 mt-10 pb-16'>
        <div className='w-full text-center mb-16'>
          <h1 className='text-white text-[140px]  max-lg:text-[12vw] boldstyle'>Collections</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-12'>
          {data.map((items, index) => (
            <div key={index} className='w-[400px]'>
              <div className='w-full h-[300px] border border-[#232323] rounded-[10px] flex justify-center items-center overflow-hidden'>
                <video
                  className='w-full h-full object-cover'
                  muted
                  playsInline
                  autoPlay
                  loop
                  src={items.src}
                ></video>
              </div>
              <span className='mt-4 block text-[20px] text-white'>{items.span}</span>
              <h1 className='fontstyle text-2xl text-white'>{items.h1}</h1>
            </div>
          ))}
        </div>
      </div>
        {/* marquee section */}
        <div className='marquee w-full max-lg:h-[20vh] max-lg:mt-10 mt-15 h-[32vh] b max-md:h-[20vh] text-zinc-900 rounded-t-2xl'>
           <motion.div initial={{scale:0.6}} whileInView={{scale:1}} transition={{duration:2,}} viewport={{once:true}}  className='uppercase pt-2 flex h-full w-full text-[15vw] max-md:text-[16vw] overflow-hidden fontstyle font-extrabold items-center justify-center gap-6 whitespace-nowrap '>
                <motion.h1 initial={{x:0}} animate={{x:-1000}} transition={{duration:8, repeat:Infinity ,ease:'linear' }} >DON'T compete with *</motion.h1>
                 <motion.h1 initial={{x:0}} animate={{x:-1000}} transition={{duration:8, repeat:Infinity ,ease:'linear' }} >us czz</motion.h1>
                 <motion.h1 initial={{x:0}} animate={{x:-1000}} transition={{duration:8, repeat:Infinity ,ease:'linear' }} >we Animate things</motion.h1>
                 <motion.h1 initial={{x:0}} animate={{x:-1000}} transition={{duration:8, repeat:Infinity ,ease:'linear' }} >DONT compete with</motion.h1>      
           </motion.div>
        </div>
         {/* footer */}

        <div className='fotteradjust w-full  min-h-[32rem] flex flex-col justify-between'>
  {/* Top section with button */}
  <div className='flex flex-col justify-center items-center gap-8 py-10'>
    <h1 className='fontstyle text-2xl'>Eager to learn GSAP?</h1>
    <Link className='fotterlink px-6 py-2 bg-white text-black border border-slate-600 text-2xl fontstyle' to="/Faq">
      Learn From Experts
    </Link>
  </div>

  {/* Middle section */}
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}
    className='w-full adjjj flex flex-wrap justify-between px-10 py-8 bg-white'>
    
    <div className='w-full md:w-[40%] flex flex-col gap-6 mb-8 md:mb-0'>
      <h1 className='nevermiss fontstyle text-6xl tracking-tight'>Never miss what's Next</h1>
      <p className='part1txt fontstyle text-2xl'>By submitting your email, you’ll be the first to know about updates. You can unsubscribe at any time.</p>
    </div>

    <div className='w-full md:w-[55%] flex flex-wrap gap-6'>
      <div className='w-1/2 md:w-1/3 flex flex-col'>
        <h1 className='text-zinc-700 fontstyle text-xl mb-2'>Social</h1>
        <a className='fontstyle text-2xl' href="https://www.facebook.com/awais.manais.75">Facebook</a>
        <a className='fontstyle text-2xl' href="https://www.instagram.com/aws._.x36/?igsh=ZGUzMzM3NWJiOQ%3D%3D#">Instagram</a>
      </div>

      <div className='w-1/2 md:w-1/3 flex flex-col'>
        <h1 className='text-zinc-700 fontstyle text-xl mb-2'>Address</h1>
        <p className='fontstyle text-2xl'>LHR 69-A Johar Town, Pakistan</p>
        <p className='fontstyle text-2xl'>Johar Town Lhr</p>
      </div>

      <div className='w-full md:w-1/3 flex flex-col'>
        <h1 className='text-zinc-700 fontstyle text-xl mb-2'>E-Mail</h1>
        <p className='fontstyle text-2xl'>awaisakram182@gmail.com</p>
      </div>
    </div>
  </motion.div>

  {/* Bottom section */}
  <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 3 }}
  viewport={{ once: true }}
  className="w-full flex items-center justify-between px-4 py-4 bg-white text-black text-xs md:text-sm font-medium"
>
  {/* Left Side */}
  <div>
    <h1 className='Fdatee text-3xl px-5 fontstyle max-md:text-2xl'>2025</h1>
  </div>

  {/* Right Side */}
  <div>
    <h1 className='Fdatee2 text-6xl pr-7 max-md:text-3xl fontstyle '>Made With Gsap</h1>
  </div>
</motion.div>

</div>

    </>
  );
};

export default Faq;
