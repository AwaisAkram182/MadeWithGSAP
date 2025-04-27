import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"
import { img } from 'motion/react-client'

const Hero = () => {
    const Data=[{
        img:'https://madewithgsap.com/assets/img/card1.svg',
        desc1:'Beginners',
        desc2:'Friendly',
        para:'Jump right in! Our resources cater to all skill levels, ensuring a smooth learning curve for newcomers.',
 },{
    img:'https://madewithgsap.com/assets/img/card2.svg',
        desc1:'Easy to',
        desc2:'Implement',
        para:'Get started effortlessly with our code snippets and integrate them into your project in no time.',
       
 },
{
    img:'https://madewithgsap.com/assets/img/card3.svg',
    desc1:'Performance',
    desc2:'Optimized',
    para:'Our effects are built with efficiency in mind: combining performance with creativity.',
   
}
]
  return (
   <>
   <div  className='herosec h-130 w-full  flex items-end max-md:flex-col max-md:items-center'>
        <motion.div initial={{x:-1000}} animate={{x:0}}  transition={{duration:2,repeat:0}} className='sec1 px-10 max-md:w-full max-md:pt-30 leading-none w-[60%] fontstyle text-[120px]  font-bold h-93  max-xl:text-[110px]  max-xl:relative max-xl:bottom-10 max-lg:text-[81px] max-lg:top-17 max-md:text-[50px] max-md:relative max-md:justify-center '>
            <h1  className='respnsivetext'>A collection</h1>
            <h1 className='respnsivetext'>of JS effects</h1>
            <h1 className='respnsivetext'>Made With GSAP</h1>
        </motion.div>
        <motion.div initial={{y:-1000}} animate={{y:0}} transition={{duration:2,repeat:0}} className='sec2 relative w-[40%] h-70 max-md:w-[90%]  '>
            <div className='w-[85%] px-2 absolute top-30  max-xl:top-15  h-38 leading-none  text-4xl tracking-tight font-light fontstyle'>
                <h1>Enhance your GSAP skills with a range of 50 unique and well-crafted effects.</h1>
                    <div className='mt-5'>
                    <Link  className='px-8  capitalize py-2 font-light text-2xl border-1 hover:bg-[#C9FD6E] ' to="/FAQ">Explore the collection</Link>  
                    </div>
            </div>
        </motion.div>
   </div>
                   {/* marquee section */}
        <div className='marquee w-full max-lg:h-35  h-50 bg-zinc-900 text-white rounded-t-2xl max-xl:mt-7 max-md:h-[18vh] max'>
           <motion.div initial={{scale:0.6}} whileInView={{scale:1}} transition={{duration:2,}} viewport={{ once: true }}  className='uppercase pt-2 flex h-full w-full text-[15vw] overflow-hidden fontstyle font-extrabold items-center justify-center gap-6 whitespace-nowrap '>
                <motion.h1 initial={{x:0 }} animate={{x:-1000}} transition={{duration:8, repeat:Infinity ,ease:'linear' }} >DON'T compete with *</motion.h1>
                 <motion.h1 initial={{x:0}} animate={{x:-1000}} transition={{duration:8, repeat:Infinity ,ease:'linear' }} >us czz</motion.h1>
                 <motion.h1 initial={{x:0}} animate={{x:-1000}} transition={{duration:8, repeat:Infinity ,ease:'linear' }} >we Animate things</motion.h1>
                 <motion.h1 initial={{x:0}} animate={{x:-1000}} transition={{duration:8, repeat:Infinity ,ease:'linear' }} >DONT compete with</motion.h1>      
           </motion.div>
        </div>
                   {/* video section */}
        <div className='videosection w-full h-190 max-lg:h-190  px-10 pt-10  max-xl:h-170  '>
            <div className='flex items-center gap-10  max-md:block  ' >
                <video className='w-100 max-md:w-140  ' muted="" playsinline="" autoplay="" loop="" src="https://pub-8ca9b5847fbb4d4fb97b3497fb9521d5.r2.dev/hero_optim.mp4"></video>
                <motion.h1 initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:3 ,repeat:0}} className='videotxt1 fontstyle text-[7vw] pt-32 px-8 leading-none tracking-tighter max-md:pt-5  '>Motion  the websites is a must</motion.h1>    
            </div>    
            <motion.div initial={{opacity:0}}  whileInView={{opacity:100}} transition={{duration:3 ,repeat:0}} className='block videosectxt fontstyle text-[7vw]  w-[90%] leading-20 tracking-tighter max-lg:leading-17 max-md:leading-12 max-xl:leading-17'>have these days. Developers are constantly crafting new animation that push the boundaries of cretivity.If ur are ready to explore the power of GSAP, We've got you covered with 50 unique Effects designed to help you master it like a Pro</motion.div>
        </div>
                        {/* Learn section */}
        <div className='main w-full h-270 max-lg:h-230  mt-10 max-lg:mt-0 '>
            <div className='PicLikeDivs w-full  flex  max-xl:relative max-xl:top-3 '>
                    <div className='bg-zinc-900 w-40 h-20 flex rounded-t-full max-md:h-10'></div>
                    <div className='bg-zinc-900 w-40 h-20 flex rounded-t-full max-md:h-10'></div>
                    <div className='bg-zinc-900 w-40 h-20 flex rounded-t-full max-md:h-10'></div>
                    <div className='bg-zinc-900 w-40 h-20 flex rounded-t-full max-md:h-10'></div>
                    <div className='bg-zinc-900 w-40 h-20 flex rounded-t-full max-md:h-10'></div>
                    <div className='bg-zinc-900 w-40 h-20 flex rounded-t-full max-md:h-10'></div>
                    <div className='bg-zinc-900 w-40 h-20 flex rounded-t-full max-md:h-10'></div>
                    <div className='bg-zinc-900 w-40 h-20 flex rounded-t-full max-md:h-10'></div>
                    <div className='bg-zinc-900 w-40 h-20 flex rounded-t-full max-md:h-10'></div>  
            </div>
            <div className='boldstyle  h-105  flex items-center justify-center text-[6vw] w-full bg-zinc-900 '>
                    <div className='learntext w-[70%] pt-15 text-center text-white leading-none max-lg:pb-30 max-md:text-[8vw]'>
                        <h1>Learn how to use the coolest JS library</h1>
                    </div>
            </div>
                <div className='cardssec h-160 max-lg:h-130  max-md:h-260  w-full flex items-center bg-zinc-900 max-xl:relative max-xl:bottom-10 '>
                    <div className='cardsflex w-full h-100   flex max-md:flex-col  items-center justify-center max-lg:relative max-lg:bottom-12  bg-zinc-900'>
                        {Data.map((items,index)=>{
                    return(
                        <div  key={index} className='cardData rotate-8 max-md:rotate-16  w-[25vw] max-md:w-[55vw] p-5 h-100 flex flex-col gap-8 rounded-2xl leading-none fontstyle text-5xl max-xl:text-4xl max-xl:w-[27vw] font-bold text-white bg-black'>
                            <img className='w-[7vw] ' src={items.img} alt="" />
                                 <div className='mt-8 flex flex-col '>
                                    <h1>{items.desc1}</h1>
                                    <h1>{items.desc2}</h1>
                                    <p className='text-[27px] pt-5 font-extralight'>{items.para}</p>  
                                 </div>
                            
                        </div>
                    )
                        })}
                        
                    </div>
                </div>
        </div>
                        {/* Fotter section */}
        
    <div className='footerr  w-full  h-150 max-lg:relative   max-md:top-110 '>
        <div className='cntrsec w-full h-10'>   {/*uupersection having button*/}
           <div className='flex flex-col mt-5 justify-center pt-23 items-center gap-8 w-full'>
                <h1 className='fontstyle text-2xl'>Eager to learn GSAP?</h1>
                <Link className='fotterlink px-6 py-2 border-1 bg-white text-black  border-slate-600 text-3xl fontstyle hover:bg-[#C9FD6E]' to="/Faq">Learn From Experts</Link>
           </div>
        </div>   {/*part1*/}
        <motion.div initial={{opacity:0}} whileInView={{opacity:100}} transition={{duration:3}} viewport={{once:true}}  className='mt-50 w-full  flex  middelpart h-70 max-md:flex-col'>
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
  )
}

export default Hero
