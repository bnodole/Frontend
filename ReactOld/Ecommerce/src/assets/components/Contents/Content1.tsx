import React from 'react'
import { banner } from '../../constant/image'

const Content1 = () => {
  return (
    <div className='relative h-[650px]'>
        <img src={banner} alt="" className='absolute object-cover h-full w-full'/>
        <div className='absolute inset-0 dark:bg-black/20'>
            <div className='container flex items-center h-full'>
                <div className='space-y-5 text-white'>
                    <div>
                        <span className='Content1_design'>New Arrivals 2026</span>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='font-bold text-6xl'>Discover Your Perfect Style</h1>
                        <h3>Explore our latest collection of trendy fashion. Quality meets affordability</h3>
                    </div>
                    <div className='space-x-10'>
                        <button className='primary_btn'>Shop Now</button>
                        <button className='secondary_btn'>View Collection</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content1