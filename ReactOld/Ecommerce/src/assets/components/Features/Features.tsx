import React from 'react'
import { FeaturesContent } from '../../constant/FeaturesContent'

const Features = () => {
  return (
    <div className='dark:bg-black'>
        <div className='container'>
            <div className='grid grid-cols-2 lg:grid-cols-4 p-4 gap-3'>
                {FeaturesContent.map((item)=>(
                    <div key={item.id} className='group bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-700 p-10 rounded-xl space-y-4 hover:border-primary'>
                        <div className='h-12 w-12 lg:h-16 lg:w-16 bg-primary/20 text-primary rounded-xl flex justify-center items-center group-hover:bg-primary group-hover:rounded-xl'>
                            <item.icon className='font-semibold text-4xl group-hover:text-white'/>
                        </div>
                        <p className='font-bold dark:text-white group-hover:text-primary'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Features