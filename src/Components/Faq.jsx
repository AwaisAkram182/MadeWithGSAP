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
        {/* footer section */}
         <div className='footer w-full   h-150 max-lg:relative   max-md:bottom-10 max-lg:bottom-12 '>
                <div className='cntrsec w-full h-10 '>   {/*uupersection having button*/}
                   <div className='flex flex-col -mt-5 justify-center pt-23 items-center gap-8 w-full'>
                        <h1 className='fontstyle text-2xl'>Eager to learn GSAP?</h1>
                        <Link className='fotterlink px-6 py-2 border-1 bg-white text-black  border-slate-600 text-3xl fontstyle' to="/Faq">Learn From Experts</Link>
                   </div>
                </div>   {/*part1*/}
                <motion.div initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:3}} viewport={{once:true}} className='mt-50 w-full  flex  middelpart h-70 max-md:flex-col'>
                    <div className='subpt1 w-[40%] flex flex-col gap-8 h-full p-10 max-md:w-full'>
                        <h1 className='nevermiss fontstyle text-4xl tracking-tight  '>Never miss whats's Next</h1>
                        <p className='part1txt fontstyle text-2xl'>By submitting your email, you’ll be the first to know about upcoming updates for Made With Gsap. You can unsubscribe at any time.</p>
                    </div>                          {/*part2*/}
                        <div className='subpt2 flex fottradj gap-0 py-10 w-[60%] h-full max-md:flex-col max-md:py-0 max-md:w-full  max-md:px-6  '>
                            <div className='w-[25%] removefooterpadding px-5 h-full flex flex-col max-md:w-full  '>
                                <h1 className=' linkstext text-zinc-700 fontstyle text-2xl '>Social</h1>
                                <a className='fontstyle text-2xl linktxtdata' href="https://www.facebook.com/awais.manais.75">Facebook</a>
                                <a className='fontstyle text-2xl linktxtdata' href="https://www.instagram.com/aws._.x36/?igsh=ZGUzMzM3NWJiOQ%3D%3D#">Instagram</a>
                            </div>
                            <div className='w-[35%] addresswidth h-full px-5 flex flex-col max-md:w-full  '>
                                <h1  className='linkstext text-zinc-700 fontstyle text-2xl '>Address</h1>
                                <h1 className='fontstyle text-2xl linktxtdata' >LHR 69-A JOHAR TOWN, PAKISTAN</h1>
                               <h1 className='fontstyle text-2xl linktxtdata'>JoharTown Lhr</h1>
                            </div>
                            <div className='w-[35%]  h-full flex  flex-col email max-md:w-full max-md:px-5 '>
                                <h1  className='text-zinc-700 linkstext fontstyle text-2xl '>E-Mail</h1>
                                <h1 className='fontstyle text-2xl linktxtdata' >awaisakram182@gmail.com</h1>                       
                            </div>
                        </div>
                </motion.div>
                                {/* last part */}
                    <motion.div initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:3}} viewport={{once:true}} className='w-full lastfottersec  h-30 flex items-center max-md:relative max-md:top-55   '>
                        <div className='w-[50%] lastFsec h-full fontstyle  flex items-center px-10 text-2xl gap-10   '>
                            <h1 className='Fdate'>2025</h1>
                            <h1 className='checkhidden '>CopyRights</h1>
                            <h1 className='checkhidden '>Terms</h1>
                            <h1 className='checkhidden '>Privacy Policy</h1>
                        </div>
                        <div className='w-[50%]  h-full '>
                            <div className='madewithgsap flex items-center justify-center w-full h-full text-8xl fontstyle max-md:text-3xl '>
                                <Link className='-mt-5 ' to="/">Made With Gsap</Link>
                            </div>
        
                        </div>
                    </motion.div>
                        
               
            </div>
    </>
  );
};

export default Faq;
