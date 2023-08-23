import React from 'react'
import arrowIcon from '/public/icon/arrow.png'
import Image from 'next/image'

const Transportasi = () => {
    return (
        <button className='flex items-center px-2 py-2 hover:bg-gray-100 rounded-md'>
            <span>Transportasi</span>
            <Image className='ml-1' src={arrowIcon} width={16} height={16} alt='arrow icon' />
        </button>
    )
}

export default Transportasi;