import React from 'react'
import { motion } from 'framer-motion'

const Stats = () => {


    const stats = [
        {
            number:"10K+",
            title:"Happy Customers"
        },
        {
            number:"500+",
            title:"Smartphones Sold"
        },
        {
            number:"99%",
            title:"Satisfaction Rate"
        }
    ]


    return (

        <section className='bg-[#F7FAFF] py-20 px-5 md:px-10'>


            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>


                {
                    stats.map((item,index)=>(


                        <motion.div

                            key={index}

                            initial={{
                                opacity:0,
                                y:30
                            }}

                            whileInView={{
                                opacity:1,
                                y:0
                            }}

                            transition={{
                                duration:.5,
                                delay:index*.2
                            }}

                            className='bg-white border border-gray-100 rounded-2xl h-32 flex flex-col items-center justify-center text-center hover:border-[#3B82F6]/30 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300'

                        >


                            <h1 className='text-4xl md:text-5xl text-[#3B82F6] font-bold'>
                                {item.number}
                            </h1>


                            <p className='text-xs tracking-widest uppercase text-gray-600 mt-3'>
                                {item.title}
                            </p>


                        </motion.div>


                    ))
                }


            </div>


        </section>

    )
}

export default Stats