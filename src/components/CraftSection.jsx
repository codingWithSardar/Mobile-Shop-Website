import React from 'react'
import { ShieldCheck, Truck, BadgeCheck, Headset } from "lucide-react"
import { motion } from "framer-motion"

const CraftSection = () => {

    const features = [
        {
            icon: <ShieldCheck size={32}/>,
            title: "Official Warranty",
            description:
            "Every device comes with manufacturer-backed warranty and verified after-sales support."
        },
        {
            icon: <BadgeCheck size={32}/>,
            title: "100% Genuine Products",
            description:
            "No fakes, no refurbished tricks — every smartphone is sourced directly from authorized dealers."
        },
        {
            icon: <Truck size={32}/>,
            title: "Fast Nationwide Delivery",
            description:
            "Order today and get your device delivered safely to your doorstep within 24-48 hours."
        },
        {
            icon: <Headset size={32}/>,
            title: "24/7 Customer Support",
            description:
            "Our team is always ready to help — before, during, and after your purchase."
        }
    ]


    return (

        <section className="bg-[#F7FAFF] py-20 px-5 md:px-10">


            <div className="max-w-6xl mx-auto text-center">


                <motion.h2
                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:.7}}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-black"
                >
                    Why Shop With Us
                </motion.h2>


                <div className="w-16 h-[2.5px] bg-[#3B82F6] mx-auto mt-5 mb-14 rounded-full"></div>



                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">


                    {
                        features.map((item,index)=>(


                            <motion.div
                                key={index}
                                initial={{opacity:0,y:40}}
                                whileInView={{opacity:1,y:0}}
                                transition={{duration: 0.5, delay:index*.15}}
                                whileHover={{y:-6}}
                                className="flex flex-col items-center text-center bg-white rounded-2xl px-6 py-8 border border-gray-100 hover:border-[#3B82F6]/30 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
                            >


                                <div className="text-[#3B82F6] bg-[#3B82F6]/10 p-4 rounded-full mb-5">
                                    {item.icon}
                                </div>


                                <h3 className="text-lg font-semibold mb-3 text-black">
                                    {item.title}
                                </h3>


                                <p className="text-sm text-gray-500 leading-6">
                                    {item.description}
                                </p>


                            </motion.div>


                        ))
                    }


                </div>


            </div>


        </section>

    )
}

export default CraftSection