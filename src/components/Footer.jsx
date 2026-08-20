import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {

    return (

        <footer className='bg-[#0F0F0F] text-white px-5 md:px-12 lg:px-20 py-16'>


            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>


                <div className='space-y-5'>


                    <h1 className='text-3xl font-bold tracking-tight'>
                        MOBILE <span className='text-[#3B82F6]'>HUB</span>
                    </h1>


                    <p className='text-gray-400 text-sm leading-6'>
                        Your trusted destination for genuine smartphones,
                        official warranty and fast nationwide delivery.
                    </p>


                    <div className='flex gap-4'>

                        <FaInstagram
                            size={22}
                            className='hover:text-[#3B82F6] cursor-pointer'
                        />

                        <FaFacebook
                            size={22}
                            className='hover:text-[#3B82F6] cursor-pointer'
                        />

                        <FaTwitter
                            size={22}
                            className='hover:text-[#3B82F6] cursor-pointer'
                        />

                    </div>


                </div>




                <div>


                    <h2 className='font-semibold text-lg mb-5'>
                        Shop
                    </h2>


                    <ul className='space-y-3 text-gray-400 text-sm'>

                        <li className='hover:text-white cursor-pointer'>
                            iPhone
                        </li>

                        <li className='hover:text-white cursor-pointer'>
                            Android
                        </li>

                        <li className='hover:text-white cursor-pointer'>
                            Accessories
                        </li>

                        <li className='hover:text-white cursor-pointer'>
                            New Arrivals
                        </li>

                    </ul>


                </div>





                <div>


                    <h2 className='font-semibold text-lg mb-5'>
                        Customer Care
                    </h2>


                    <ul className='space-y-3 text-gray-400 text-sm'>

                        <li className='hover:text-white cursor-pointer'>
                            My Account
                        </li>

                        <li className='hover:text-white cursor-pointer'>
                            Track Order
                        </li>

                        <li className='hover:text-white cursor-pointer'>
                            Returns & Exchange
                        </li>

                        <li className='hover:text-white cursor-pointer'>
                            Privacy Policy
                        </li>

                    </ul>


                </div>





                <div>


                    <h2 className='font-semibold text-lg mb-5'>
                        Contact
                    </h2>


                    <div className='space-y-4 text-gray-400 text-sm'>


                        <p className='flex gap-3 items-center'>
                            <MapPin size={18} />
                            Rawalpindi, Pakistan
                        </p>


                        <p className='flex gap-3 items-center'>
                            <Phone size={18} />
                            +92 300 1234567
                        </p>


                        <p className='flex gap-3 items-center'>
                            <Mail size={18} />
                            support@mobilehub.com
                        </p>


                    </div>


                </div>


            </div>




            <div className='border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500'>

                © 2026 Mobile Hub. All rights reserved.

            </div>


        </footer>

    )
}

export default Footer