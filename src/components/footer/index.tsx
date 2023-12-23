'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes';
import { Button, Image } from '@nextui-org/react'
import { Dribbble, Facebook, Instagram } from 'iconsax-react';

export default function FooterUser() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <footer className='max-w-7xl mx-auto px-6 h-full w-full'>
            <div className="w-full flex justify-center">
                <div className="h-[1px] w-4/5 dark:bg-primary-100 bg-primary-800 "></div>
            </div>
            <div className="lg:py-20 md:py-8 py-5 bg-transparent rounded-2xl">
                <div className="grid grid-cols-4 gap-5 md:gap-12 justify-between items-center">
                    <div className="col-span-4 md:col-span-2">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                {theme === 'dark' ? (
                                    <Image
                                        src='/images/logo-dark.svg'
                                        alt='Logo Esi Projects'
                                        radius='none'
                                        className='w-full h-full'
                                    />
                                ) : (
                                    <Image
                                        src='/images/logo-light.svg'
                                        alt='Logo Esi Projects'
                                        radius='none'
                                        className='w-full h-full'
                                    />
                                )}
                                <h5 className='text-xl font-medium dark:text-primary-700 text-primary-200'>ESI PROJECTS</h5>
                            </div>
                            <h6 className='lg:text-2xl md:text-base text-sm dark:text-neutral-200 text-neutral-700 font-medium'>
                                Fusion of Aesthetics and <br /> Functionality
                            </h6>
                            <p className='dark:text-[#BFDBFE] text-primary-200 text-xs md:text-base lg:text-xl'>esiprojects@gmail.com</p>
                        </div>
                    </div>

                    <div className="col-span-4 md:col-span-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-9 md:gap-6 lg:gap-12 justify-end">

                            <div className="col-span-1">
                                <h5 className='font-bold text-sm text-neutral-500 dark:text-neutral-200 mb-2'>Features</h5>

                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-neutral-700 dark:text-neutral-50'>
                                            Projects
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-neutral-700 dark:text-neutral-50'>
                                            Services
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-neutral-700 dark:text-neutral-50'>
                                            The Team
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-neutral-700 dark:text-neutral-50'>
                                            Insight
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <h5 className='font-bold text-sm text-neutral-500 dark:text-neutral-200 mb-2'>Generai</h5>

                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-neutral-700 dark:text-neutral-50'>
                                            Career
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-neutral-700 dark:text-neutral-50'>
                                            Company Deck
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-neutral-700 dark:text-neutral-50'>
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <h5 className='font-bold text-sm text-neutral-500 dark:text-neutral-200 mb-2'>Find Us</h5>

                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-neutral-700 dark:text-neutral-50'>
                                            Malang, Indonesia
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'#'} className='text-xs font-medium text-neutral-700 dark:text-neutral-50'>
                                            View On Map
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-5 md:mt-12 flex flex-wrap items-center justify-center md:justify-between md:gap-0 gap-6">
                    <div className="flex flex-row flex-wrap gap-4">
                        <Button
                            isIconOnly
                            aria-label='Instagram'
                            color='primary'
                            variant='solid'
                            className='p-3 h-12 w-12 bg-social-media-gradient'
                        >
                            <Instagram
                                size={24}
                                variant='Bold'
                            />
                        </Button>

                        <Button
                            isIconOnly
                            aria-label='Instagram'
                            color='primary'
                            variant='solid'
                            className='p-3 h-12 w-12 bg-social-media-gradient'
                        >
                            <Dribbble
                                size={24}
                                variant='Bold'
                            />
                        </Button>

                        <Button
                            isIconOnly
                            aria-label='Instagram'
                            color='primary'
                            variant='solid'
                            className='p-3 h-12 w-12 bg-social-media-gradient'
                        >
                            <Facebook
                                size={24}
                                variant='Bold'
                            />
                        </Button>
                    </div>

                    <div>
                        <p className='font-normal dark:text-neutral-200 text-neutral-400 text-xs md:text-sm md:leading-normal leading-normal
                        '>&copy; ESI PROJECTS 2023. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
