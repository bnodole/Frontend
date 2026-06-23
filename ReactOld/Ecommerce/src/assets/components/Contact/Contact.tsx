import React from 'react'
import { contacts } from '../../constant/ContactsDetails'

const Contact = () => {
  return (
    <div className='container dark:bg-black'>
        <div className='flex justify-center items-center flex-col p-5'>
            <span className='Content1_design'>Get In Touch</span>
            <h1 className='text-5xl font-semibold dark:text-white'>Contact <span className='text-primary'>Us</span></h1>
        </div>
        <div className='flex gap-8'>
            <div className='w-[40%] space-y-5'>
                <p className='dark:text-white'>Have questions about our products? We're here to help!</p>
                {contacts.map((items)=>(
                    <div key={items.id} className='flex space-x-5 p-3 rounded-2xl hover:border hover:border-primary dark:text-white dark:bg-gray-800'>
                        <div className='h-12 w-12 lg:h-16 lg:w-16 bg-primary text-white rounded-2xl flex items-center justify-center'>
                            <items.icon className='font-semibold text-3xl'/>
                        </div>
                        <div>
                            <p>{items.name}</p>
                            <p>{items.details}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-[60%] p-10'>
                <form action="">
                    <h1 className='font-bold text-2xl dark:text-white'>Send us a <span className='text-primary'>Message</span></h1><br />
                    <input type="text" name="Name" id="name" placeholder='Your Name' className='border-2 broder-black rounded-xl h-[50px] w-[50%] p-3 dark:text-white dark:bg-gray-800' />
                    <input type="text" name="Email" id="email" placeholder='Your Email' className='border-2 broder-black rounded-xl h-[50px] w-[50%] p-3 dark:text-white dark:bg-gray-800'/><br /><br />
                    <input type="text" name="Subject" id="subject" placeholder='Your Subject' className='border-2 broder-black rounded-xl h-[50px] w-[100%] p-3 dark:text-white dark:bg-gray-800'/><br /><br />
                    <textarea name="Details" id="details" className='border-2 broder-black rounded-xl h-[85px] w-[100%] p-3 dark:text-white dark:bg-gray-800'></textarea><br /><br />
                    <button className='primary_btn h-[50px] w-[100%] dark:text-white'>Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact