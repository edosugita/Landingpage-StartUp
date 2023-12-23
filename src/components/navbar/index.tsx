'use client'

import { useEffect, useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Image } from "@nextui-org/react"
import { useTheme } from 'next-themes';
import { Moon, Sun1 } from 'iconsax-react';
import { useRouter } from 'next/navigation';

export default function NavbarUser() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const { push } = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const menuItems = [
        "Home",
        "About me",
        "Services",
        "Projects",
    ];
    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            maxWidth='xl'
            classNames={{
                base: [
                    'lg:py-6 md:py-4 py-3',
                ],
                brand: [
                    'gap-3.5'
                ],
                item: [
                    'font-medium',
                    'data-[active=true]:bg-primary-800',
                    'dark:data-[active=true]:bg-primary-100',
                    'data-[active=true]:py-3',
                    'data-[active=true]:px-6',
                    'data-[active=true]:rounded-md',
                ],
                menu: [
                    'pt-16',
                    'gap-6',
                    'items-center'
                ],
            }}
            className='animate__animated animate__fadeInDown'
        >
            <NavbarContent>
                <NavbarBrand>
                    {theme === 'dark' ? (
                        <Image
                            src='/images/logo-dark.svg'
                            alt='Logo Esi Projects'
                            radius='none'
                            className='w-full h-full cursor-pointer'
                        />
                    ) : (
                        <Image
                            src='/images/logo-light.svg'
                            alt='Logo Esi Projects'
                            radius='none'
                            className='w-full h-full cursor-pointer'
                        />
                    )}
                    <p className="font-medium text-inherit dark:text-primary-700 text-primary-200 cursor-pointer">ESI PROJECTS</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-8" justify="end">
                <NavbarItem isActive>
                    <Link className='dark:text-primary-900 text-primary-100' href="/#home" aria-current="page">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color='foreground' href="/#aboutme">
                        About me
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color='foreground' href="/#services">
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color='foreground' href="/#projects">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <label className='cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        {theme === 'dark' ? (
                            <Sun1 size={24} color='#D8DBE1' />
                        ) : (
                            <Moon size={24} color='#454A53' />
                        )}
                    </label>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        color='primary'
                        variant='solid'
                        radius='sm'
                        onClick={() => push('/contact-us')}
                    >
                        Contact Us
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className='lg:hidden flex gap-8' justify="end">
                <NavbarItem>
                    <label className='cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        {theme === 'dark' ? (
                            <Sun1 size={24} color='#D8DBE1' />
                        ) : (
                            <Moon size={24} color='#454A53' />
                        )}
                    </label>
                </NavbarItem>
                <NavbarItem className='hidden sm:flex'>
                    <Button
                        color='primary'
                        variant='solid'
                        radius='sm'
                        onClick={() => push('/contact-us')}
                    >
                        Contact Us
                    </Button>
                </NavbarItem>

                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color='foreground'
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
