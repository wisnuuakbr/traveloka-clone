import React from 'react'
import Image from 'next/image';
import partnershipIcon from '/public/icon/partnership.png'
import Link from 'next/link';

const Partner = () => {
    return (
        <Link href='https://www.traveloka.com/id-id/partnership' className='flex items-center px-2 py-2 rounded-md'>
            <Image className='mr-1' src={partnershipIcon} width={16} height={16} alt='partnership icon' />
            <span>Jadi Partner Traveloka</span>
        </Link>
    )
}

export default Partner;
