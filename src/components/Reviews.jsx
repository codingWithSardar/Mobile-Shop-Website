import React from 'react'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const Reviews = () => {


    const reviews = [

        {
            name:"Ali Raza",
            role:"Verified Buyer",
            review:"Ordered my iPhone from here and got it delivered in 2 days. 100% genuine with official warranty.",
        },

        {
            name:"Alisha Batool",
            role:"Verified Buyer",
            review:"Great prices compared to the market and the after-sales support is really responsive. Highly recommended.",
        },

        {
            name:"Adnan Khan",
            role:"Verified Buyer",
            review:"Smooth checkout, secure payment, and the phone was exactly as described. My go-to store for gadgets now.",
        }

    ]


    return (

        <section className='py-20 px-5 md:px-10 bg-white'>


            <div className='text-center mb-12 flex flex-col items-center gap-3'>


                <h1 className='text-4xl md:text-5xl font-bold tracking-tight text-black'>
                    Customer Reviews
                </h1>


                <div className='h-[2.5px] w-16 bg-[#3B82F6] rounded-full'></div>


                <p className='text-gray-500 text-sm'>
                    What our customers say about their experience
                </p>


            </div>




            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>


                {
                    reviews.map((item,index)=>(


                        <motion.div

                            key={index}

                            initial={{
                                opacity:0,
                                y:40
                            }}

                            whileInView={{
                                opacity:1,
                                y:0
                            }}

                            transition={{
                                duration:.5,
                                delay:index*.2
                            }}

                            className='bg-white border border-gray-100 rounded-2xl p-8 text-center hover:border-[#3B82F6]/30 hover:shadow-xl hover:shadow-blue-100 transition duration-300'

                        >



                            <div className='flex justify-center gap-1 mb-5'>


                                {
                                    [1,2,3,4,5].map((star)=>(
                                        <Star
                                            key={star}
                                            size={18}
                                            fill='#3B82F6'
                                            className='text-[#3B82F6]'
                                        />
                                    ))

                                }


                            </div>




                            <p className='text-gray-500 text-sm leading-7 mb-6'>
                                "{item.review}"
                            </p>




                            <h2 className='font-semibold text-lg'>
                                {item.name}
                            </h2>


                            <p className='text-[#3B82F6] text-xs uppercase tracking-widest mt-1'>
                                {item.role}
                            </p>



                        </motion.div>


                    ))
                }


            </div>


        </section>

    )
}

export default Reviews