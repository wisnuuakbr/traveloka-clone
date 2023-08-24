"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import downloadIcon from '/public/icon/download_apps.png'
import arrowIcon from '/public/icon/arrow.png'
import qrCode from '/public/images/qr-code.png'
import appStore from '/public/images/AppStore.svg'
import playStore from '/public/images/PlayStore.svg'
import { motion } from 'framer-motion';

const Download = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    // handle cursor
    const containerRef = useRef(null);

    // handle click outside the container
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <div ref={containerRef}>
                <button
                    onClick={handleOpen}
                    className='flex items-center px-2 py-2 hover:bg-gray-100 rounded-md'
                >
                    <Image className='mr-1' src={downloadIcon} width={16} height={16} alt='download apps icon' />
                    <span>Unduh Aplikasi</span>
                    <Image src={arrowIcon} width={16} height={16} alt='arrow icon' />
                </button>
                {open && (
                    <div className='absolute w-[150px] top-11'>
                        <motion.div
                            className='bg-white shadow-sm border rounded-md px-2 py-2 flex flex-col items-center'
                            initial={{ opacity: 0, scaleY: 0, transformOrigin: 'top', translateY: 0 }}
                            animate={{
                                opacity: open ? 1 : 0, // Set opacity based on open state
                                scaleY: open ? 1 : 0, // Set scaleY based on open state
                                transformOrigin: 'top', // Set the transform origin to the top
                                translateY: open ? 0 : -20,
                            }}
                            exit={{ opacity: 0, scaleY: 0, translateY: -20 }}
                            transition={{ duration: 0.3, type: 'spring', damping: 10, stiffness: 100 }}
                        >
                            <div className='py-2 text-center'>
                                <h3 className='font-semibold'>Pindai kode QR untuk mengunduh</h3>
                            </div>
                            <div className='py-2'>
                                <Image src={qrCode} width={116} height={100} alt='qr code' />
                            </div>
                            <div className='py-2'>
                                <a href='https://play.google.com/store/apps/details?id=com.traveloka.android&referrer=adjust_reftag%3DcmkalN1jBsBvs%26utm_source%3DTraveloka%2BDesktop&pli=1'>
                                    <Image src={playStore} width={123} height={100} className='mb-2' alt='playStore' />
                                </a>
                                <a href='https://apps.apple.com/app/id898244857?mt=8'>
                                    <Image src={appStore} width={123} height={100} alt='appStore' />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Download;
