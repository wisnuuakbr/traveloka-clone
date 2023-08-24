"use client"
import React, { useState, useRef, useEffect } from 'react'
import arrowIcon from '/public/icon/arrow.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import indoFlag from '/public/images/flag/indo.svg'
import singFlag from '/public/images/flag/sing.svg'

const LanguageSelector = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    // selected language logic
    const [selectedLanguage, setSelectedLanguage] = useState('Indonesia');
    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };
    const currencies = {
        'Indonesia': 'IDR',
        'Singapore': 'SGD',
    };
    const selectedCurrency = selectedLanguage ? currencies[selectedLanguage] : '';

    const languageImages = {
        'Indonesia': indoFlag,
        'Singapore': singFlag,
        // Tambahkan bahasa lain jika diperlukan
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
    const languageBorderClasses = {
        'Indonesia': 'border-green-500',
        'Singapore': 'border-blue-500',
        // Tambahkan kelas bingkai untuk bahasa lain jika diperlukan
    };
    return (
        <>
            <div ref={containerRef} className='flex justify-end'>
                <button
                    onClick={handleOpen}
                    className='flex items-center px-2 py-2 hover:bg-gray-100 rounded-md'
                >
                    <Image
                        className={`mr-1 border-2 border-blue-500 rounded-full ${selectedLanguage}`}
                        src={languageImages[selectedLanguage]} // Menggunakan referensi gambar berdasarkan bahasa yang dipilih
                        width={20}
                        height={20}
                        alt={selectedLanguage === 'Indonesia' ? 'Indonesia flag' : 'Singapore flag'} // Ganti alt sesuai dengan bahasa yang dipilih
                    />
                    <span>{selectedCurrency}</span>
                    <Image className='ml-1' src={arrowIcon} width={16} height={16} alt='arrow icon' />
                </button>
                {open && (
                    <div className='absolute w-[450px] top-11'>
                        <motion.div
                            className='bg-white shadow-sm border rounded-md px-2 py-2 flex'
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
                            <div className='w-3/4 px-1'>
                                <h3 className='font-semibold'>Negara & Bahasa</h3>
                                <div
                                    className={`flex rounded-md hover:bg-gray-100 py-2 px-1 cursor-pointer
                                    ${selectedLanguage === 'Indonesia' ? '' : ''}`}
                                    onClick={() => handleLanguageSelect('Indonesia')}
                                >
                                    <div className='overflow-hidden'>
                                        <Image
                                            className={`mr-1 border-2 border-blue-500 rounded-full ${selectedLanguage === 'Indonesia' ? 'border-green-500' : ''
                                                }`}
                                            src={indoFlag}
                                            width={20}
                                            height={20}
                                            alt='indo flag'
                                        />
                                    </div>
                                    <span className='text-sm'>Indonesia (Bahasa Indonesia)</span>
                                </div>
                                <div
                                    className={`flex rounded-md hover:bg-gray-100 py-2 px-1 cursor-pointer ${selectedLanguage === 'Singapore' ? '' : ''
                                        }`}
                                    onClick={() => handleLanguageSelect('Singapore')}
                                >
                                    <div className='overflow-hidden'>
                                        <Image
                                            className={`mr-1 border-2 border-blue-500 rounded-full ${selectedLanguage === 'Singapore' ? 'border-green-500' : ''
                                                }`}
                                            src={singFlag}
                                            width={20}
                                            height={20}
                                            alt='sing flag'
                                        />
                                    </div>
                                    <span className='text-sm'>Singapore (English)</span>
                                </div>
                            </div>
                            <div className='w-1/2 px-1'>
                                <h3 className='font-semibold'>Mata Uang</h3>
                                <div className='flex rounded-md hover:bg-gray-100 py-2 px-1 cursor-pointer'>
                                    <div className='mr-3 font-semibold'>
                                        {selectedCurrency}
                                    </div>
                                    <span>
                                        {selectedCurrency === 'IDR' ? 'Indonesia Rupiah' : selectedCurrency === 'SGD' ? 'Singapore Dollar' : ''}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </>
    );
};

export default LanguageSelector;