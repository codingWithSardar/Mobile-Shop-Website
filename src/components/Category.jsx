import React from 'react'
import { assets } from '../assets/assets'
import Box from './Box'

const Category = () => {

  return (

    <div className='bg-[#F7FAFF] py-20 px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-6'>
      <Box category={'iphone'} image={assets.iphone} title={'PREMIUM SERIES'} subtitle={'iPHONE'}/>
      <Box category={'android'} image={assets.android} title={'FLAGSHIP RANGE'} subtitle={'ANDROID'}/>
    </div>
  )
}

export default Category