import React from 'react'
import { useState,useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";
import {styles} from '../Style';
import {SectionWrapper} from '../HOC';
import {EarthCanvas} from './canvas';
import { slideIn } from '../utils/motion';





const Contact = () => {
  const[loading,setloading]=useState(false);


  const[form,setform]=useState({
    name:'',
    email:'',
    message:'',
  });
  const formref=useRef();

  const handleChange=(e)=>
  {
      const {name,value}=e.target;
      setform({...form,[name]:value})
  }

  const handlesubmit=(e)=>
  {
        e.preventDefault();
        setloading(true);
        emailjs.send('service_6wssb5h','template_90cacdf',{
          from_name:form.name,
          to_name:'Shivaram',
          from_email:form.email,
          to_email:"shivaramKrishnan612@gmail.com",
          message:form.message
},'siLv6qAHRfwprn8KG')
.then(()=>{
  setloading(false);
  alert('Thank you! I will get back to yo as soon as possible.');
  setform(
    {
      name:'',
      email:'',
      message:'',
    }
  )
},(error)=>{
  setloading(false)
  alert("Something went wrong")
})
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
        variants={slideIn('left','tween',0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Lets Work together!!</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form ref={formref} onSubmit={handlesubmit} className='mt-12 flex flex-col gap-8'>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>
                        Your name
                </span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder='Hey! May i know your name?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none outline-medium'
                />
                
              </label>


              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>
                        Your email
                </span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none outline-medium'
                />
                
              </label>




              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>
                        Your Message
                </span>
                <textarea
                  rows='7'
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What do you wanna say?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none outline-medium'
                />
                
              </label>
              <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' type='submit'>
                    {loading ? "Sending.." : "Send"}
              </button>

          </form>

        </motion.div>
        
        <motion.div variants={slideIn('right','tween',0.2,1)} className='xl:flex-1 xl-h-auto md:h-[550px] h-[350px]'>
            <EarthCanvas/>
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")