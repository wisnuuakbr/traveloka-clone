import React from 'react'
import Transportasi from '../button/Transportasi';
import Penginapan from '../button/Penginapan';
import Aktivitas from '../button/Aktifitas';

const Navbar = () => {
    return (
        <div className='bg-gray-100 mx-auto w-full'>
            <div className='max-w-6xl mx-auto flex items-center justify-center'>
                <Transportasi />
                <Penginapan />
                <Aktivitas />
            </div>
        </div>
    )
}

export default Navbar;
