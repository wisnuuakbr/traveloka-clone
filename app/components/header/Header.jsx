import React from 'react';
import logoTraveloka from '/public/logo/logo_traveloka.png';
import Image from 'next/image'
import Download from '../button/Download';
import Partner from '../button/Partner';
import Link from 'next/link';
import saveIcon from '/public/icon/save.png'
import orderIcon from '/public/icon/order_list.png'
import LanguageSelector from '../button/LanguageSelector';
import Payment from '../button/Payment';
import stripIcon from '/public/icon/three.svg'

const Header = () => {
    return (
        <div className='mx-auto w-full px-1 py-2'>
            <div className='flex justify-between mx-auto max-w-6xl'>
                <div className='flex'>
                    <button className='mr-4'>
                        <Image src={stripIcon} height={20} width={20} alt='Strip Icon' />
                    </button>
                    <Link href='/traveloka.com'>
                        <Image src={logoTraveloka} height={100} width={130} style={{ cursor: 'pointer' }} alt='Traveloka Logo' />
                    </Link>
                </div>
                <div className='flex items-center text-sm'>
                    <Download />
                    <Partner />
                    <Link href="/save" className='flex items-center px-2 py-2 rounded-md'>
                        <Image className='mr-1' src={saveIcon} width={16} height={16} alt='simpan' />
                        <span>Simpan</span>
                    </Link>
                    <Link href="/cart" className='flex items-center px-2 py-2 rounded-md'>
                        <Image className='mr-1' src={orderIcon} width={16} height={16} alt='order' />
                        Pesanan Saya
                    </Link>
                    <LanguageSelector />
                    <Payment />
                </div>
                <div className='flex flex-col'>
                    <button className='rounded-full border hover:shadow-md px-4 py-2'>
                        Button
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
