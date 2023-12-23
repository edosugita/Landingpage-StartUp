'use client'

import TitleSection from '@/components/title'
import { Avatar, Button, Card, CardBody, CardHeader, Image, CardFooter } from '@nextui-org/react'
import { ArrowRight, Dribbble, Facebook, Instagram } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import dataReview from '@/data/review/data'
import { useTheme } from 'next-themes'
import CountUp from 'react-countup'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/navigation'

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const router = useRouter()

    const isSmallScreen = useMediaQuery({ maxWidth: 768 })

    const circleSizes = [720, 600, 480, 360, 240, 120]
    const borderColors = [
        "dark:border-primary-100 border-primary-900",
        "dark:border-primary-100 border-primary-900",
        "dark:border-primary-200 border-primary-800",
        "dark:border-primary-300 border-primary-700",
        "dark:border-primary-300 border-primary-700",
        "dark:border-primary-400 border-primary-600"
    ]

    const createCircles = (size: number, index: number): JSX.Element => (
        <div key={index} className={`h-[${size}px] w-[${size}px] bg-transparent border ${borderColors[index]} rounded-full p-[60px]`}>
            {size > 120 && createCircles(size - 120, index + 1)}
        </div>
    );

    useEffect(() => {
        document.title = 'ESI PROJECTS'

        // const hash = window.location.hash

        // if (hash) {
        //     const element = document.getElementById(hash.substring(1))
        //     if (element) {
        //         element.scrollIntoView({ behavior: 'smooth' })
        //     }
        // }

        setMounted(true)

        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (isSmallScreen) {
                    return (prevIndex + 1) % dataReview.length;
                } else {
                    const nextIndex = (prevIndex + 2) % dataReview.length;
                    return nextIndex === dataReview.length - 1 ? 0 : nextIndex;
                }
            });
        }, 5000);

        return () => clearInterval(intervalId)
    }, [currentIndex, isSmallScreen])

    if (!mounted) return null

    return (
        <div className='flex flex-col flex-nowrap gap-28 relative lg:my-28 md:my-20 sm:my-16 my-14'>
            <div className='max-w-7xl mx-auto px-6' id='home'>
                <div className="md:grid md:grid-cols-2 md:gap-28 lg:gap-56">

                    <div className="flex flex-col flex-nowrap justify-end gap-24">

                        <div className='flex flex-col flex-wrap gap-5'>
                            <TitleSection
                                title='Utilizing the latest technology to shape the digital future'
                                textGradient={['latest technology']}
                                commonGradient='bg-text-gradient-v1'
                            />

                            <p className='capitalize text-neutral-700 dark:text-neutral-200 font-normal text-sm sm:text-xl leading-normal animate__animated animate__fadeInUp animate-delay-1s'>Experience the best with us.</p>

                            <div className="flex relative">
                                <Button
                                    color='primary'
                                    variant='solid'
                                    radius='full'
                                    endContent={
                                        <ArrowRight
                                            size={24}
                                            color='#DBEAFE'
                                        />
                                    }
                                    className='py-3 px-5 font-medium sm:text-base text-sm animate__animated animate__fadeInUp animate-delay-1.5s'
                                >
                                    Get Started
                                </Button>

                                <div className="absolute -left-[282px] h-full -z-[1]">
                                    <div className="h-full flex justify-center items-center">

                                        {createCircles(circleSizes[0], 0)}

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row flex-wrap gap-4">
                            <Button
                                isIconOnly
                                aria-label='Instagram'
                                color='primary'
                                variant='solid'
                                className='p-3 h-12 w-12 bg-social-media-gradient animate__animated animate__fadeInUp animate-delay-1s'
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
                                className='p-3 h-12 w-12 bg-social-media-gradient animate__animated animate__fadeInUp animate__fast animate-delay-1-5s'
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
                                className='p-3 h-12 w-12 bg-social-media-gradient animate__animated animate__fadeInUp animate__fast animate-delay-2s'
                            >
                                <Facebook
                                    size={24}
                                    variant='Bold'
                                />
                            </Button>
                        </div>
                    </div>

                    <div className="h-auto w-auto hidden md:block">
                        <Image
                            removeWrapper
                            src='https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7'
                            alt='Background Home'
                            className='animate__animated animate__fadeInUp w-[522px] h-[522px] object-cover object-center rounded-tl-[300px] rounded-br-[300px]'
                            radius='none'
                        />
                    </div>

                </div>

                <div className="mt-20 flex flex-col gap-6">
                    <h5 className='capitalize dark:text-neutral-100 text-neutral-800 font-medium text-lg sm:text-xl md:text-2xl text-center animate__animated animate__fadeInDown'>
                        Successfully completed project
                    </h5>

                    <div className="flex flex-wrap justify-center gap-5">

                        <div className="py-3 px-6 dark:bg-[#020617] bg-primary-900 rounded-xl">
                            <h6 className='dark:text-primary-800 text-primary-50 font-medium text-lg sm:text-xl md:text-2xl leading-normal sm:leading-normal md:leading-normal'>
                                <CountUp
                                    start={0}
                                    end={100}
                                    duration={2}
                                />
                                +
                            </h6>
                            <p className='dark:text-primary-400 text-primary-400 font-normal text-sm md:text-base leading-normal'>Website App</p>
                        </div>

                        <div className="py-3 px-6 dark:bg-[#020617] bg-primary-900 rounded-xl">
                            <h6 className='dark:text-primary-800 text-primary-50 font-medium text-lg sm:text-xl md:text-2xl leading-normal sm:leading-normal md:leading-normal'>
                                <CountUp
                                    start={0}
                                    end={50}
                                    duration={2}
                                />
                                +
                            </h6>
                            <p className='dark:text-primary-400 text-primary-400 font-normal text-sm md:text-base leading-normal'>Mobile App</p>
                        </div>

                        <div className="py-3 px-6 dark:bg-[#020617] bg-primary-900 rounded-xl">
                            <h6 className='dark:text-primary-800 text-primary-50 font-medium text-lg sm:text-xl md:text-2xl leading-normal sm:leading-normal md:leading-normal'>
                                <CountUp
                                    start={0}
                                    end={300}
                                    duration={2}
                                />
                                +
                            </h6>
                            <p className='dark:text-primary-400 text-primary-400 font-normal text-sm md:text-base leading-normal'>Design UI/UX</p>
                        </div>

                        <div className="py-3 px-6 dark:bg-[#020617] bg-primary-900 rounded-xl">
                            <h6 className='dark:text-primary-800 text-primary-50 font-medium text-lg sm:text-xl md:text-2xl leading-normal sm:leading-normal md:leading-normal'>
                                <CountUp
                                    start={0}
                                    end={200}
                                    duration={2}
                                />
                                +
                            </h6>
                            <p className='dark:text-primary-400 text-primary-400 font-normal text-sm md:text-base leading-normal'>3D Design</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6" id='aboutme'>
                <div className="col-span-1">
                    <TitleSection
                        title='Building Digital Experiences with Passion'
                        textGradient={['Digital Experiences']}
                        commonGradient='bg-text-gradient-v2'
                        desc='Delivering a captivating digital experience with full commitment to innovation and dedication to meet the needs of modern users'
                        breakAfterWords={['Digital Experiences']}
                    />
                </div>

                <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div
                        className="w-full h-36 md:h-44 lg:h-72"
                        data-aos='fade-right'
                        data-aos-duration='700'
                        data-aos-anchor-placement="center-bottom"
                    >
                        <Image
                            src='https://images.unsplash.com/photo-1557804506-669a67965ba0'
                            alt='Image For Building Digital'
                            loading='lazy'
                            radius='lg'
                            removeWrapper
                            className='h-full w-full object-cover object-center'
                        />
                    </div>

                    <p
                        className='dark:text-neutral-100 text-neutral-600 font-medium text-base md:text-lg lg:text-xl leading-normal md:leading-normal lg:leading-normal'
                        data-aos='fade-left'
                        data-aos-duration='900'
                        data-aos-anchor-placement="center-bottom"
                    >
                        We offer creative and innovative solutions that reflect our commitment to crafting unforgettable digital experiences. Discover service excellence backed by our dedicated team and extensive industry expertise
                    </p>
                </div>
            </div>

            <div className="dark:bg-[#020617] bg-[#F9FBFF] w-full h-full py-20" id='services'>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1">
                        <TitleSection
                            title='Competitive Value Exceptional Quality'
                            textGradient={['Value', 'Quality']}
                            gradient={{
                                Value: 'bg-text-gradient-v3',
                                Quality: 'bg-text-gradient-v4'
                            }}
                            desc='Our pricing structure is designed with your budget in mind, offering affordable solutions without compromising on the exceptional quality you deserve'
                            breakAfterWords={['Value']}
                        />
                    </div>

                    <div className="col-span-2 grid grid-cols-12 gap-5 items-center">

                        <div
                            className='col-span-12 sm:col-span-6 lg:col-span-4 dark:bg-primary-50 bg-primary-900 py-6 px-8 w-full h-72 rounded-xl flex flex-col justify-between'
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-anchor-placement="center-bottom"
                        >
                            <div>
                                <h6 className='dark:text-neutral-100 text-neutral-800 font-medium text-lg md:text-xl leading-normal md:leading-normal'>
                                    Affordable Prices, High Quality
                                </h6>
                                <p className='dark:text-neutral-200 text-neutral-700 font-medium text-sm leading-normal md:leading-normal'>
                                    Unmatched Value Within Reach
                                </p>
                            </div>

                            <div>
                                <p className='dark:text-neutral-400 text-neutral-600 font-normal text-sm leading-normal'>
                                    Get the best solutions without worrying about your budget. Our prices are pocket-friendly, but the quality remains top-notch
                                </p>
                            </div>
                        </div>

                        <div
                            className='col-span-12 sm:col-span-6 lg:col-span-4 dark:bg-primary-50 bg-primary-900 py-6 px-8 w-full h-72 rounded-xl flex flex-col justify-between'
                            data-aos="fade-up"
                            data-aos-duration="700"
                            data-aos-anchor-placement="center-bottom"
                        >
                            <div>
                                <h6 className='dark:text-neutral-100 text-neutral-800 font-medium text-xl leading-normal'>
                                    Experienced Team
                                </h6>
                                <p className='dark:text-neutral-200 text-neutral-700 font-medium text-sm leading-normal'>
                                    Expert Service at Affordable Rates
                                </p>
                            </div>

                            <div>
                                <p className='dark:text-neutral-400 text-neutral-600 font-normal text-sm leading-normal'>
                                    We have an experienced team ready to provide the best services at prices that won&apos;t break the bank
                                </p>
                            </div>
                        </div>

                        <div
                            className='col-span-12 sm:col-span-6 lg:col-span-4 dark:bg-primary-50 bg-primary-900 py-6 px-8 w-full h-72 rounded-xl flex flex-col justify-between'
                            data-aos="fade-up"
                            data-aos-duration="900"
                            data-aos-anchor-placement="center-bottom"
                        >
                            <div>
                                <h6 className='dark:text-neutral-100 text-neutral-800 font-medium text-xl leading-normal'>
                                    Tailored Pricing Options
                                </h6>
                                <p className='dark:text-neutral-200 text-neutral-700 font-medium text-sm leading-normal'>
                                    Your Budget, Your Choice
                                </p>
                            </div>

                            <div>
                                <p className='dark:text-neutral-400 text-neutral-600 font-normal text-sm leading-normal'>
                                    Find prices that match your needs. We offer a variety of options to ensure your satisfaction
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="hidden md:block absolute w-full bottom-40">
                {theme === 'dark' ? (
                    <Image
                        src='/images/bg-portfolio-dark.svg'
                        alt='bg'
                        radius='none'
                        removeWrapper
                        className='w-full h-full -z-10'
                    />
                ) : (
                    <Image
                        src='/images/bg-portfolio-light.svg'
                        alt='bg'
                        radius='none'
                        removeWrapper
                        className='w-full h-full -z-10'
                    />
                )}
            </div>

            <div className="max-w-7xl mx-auto px-6" id='projects'>

                <div className="flex flex-col gap-6">
                    <TitleSection
                        title='Portfolio with Impressive Results'
                        desc='Explore a portfolio showcasing remarkable achievements and stunning outcomes'
                        breakAfterWords={['with', 'remarkable']}
                        textGradient={['Impressive']}
                        commonGradient='bg-text-gradient-v5'
                        position='center'
                    />

                    <div className="grid grid-1 md:grid-cols-3 gap-5">
                        <div className="flex flex-col gap-5">

                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none relative"
                                data-aos="fade-right"
                                data-aos-duration="500"
                                data-aos-anchor-placement="center-bottom"
                            >
                                <div className="absolute w-full-h-full dark:bg-black/20 bg-transparent inset-0 z-[2]"></div>
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover z-0"
                                    src="/images/png/porto3.png"
                                />
                                <CardFooter className="justify-between before:bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 backdrop-blur-3xl">
                                    <p className="text-tiny text-black/70 font-medium">StartUp Design</p>
                                    <Button className="text-tiny text-white bg-black/70" variant="flat" color="default" radius="lg" size="sm">
                                        View
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none relative"
                                data-aos="fade-right"
                                data-aos-duration="800"
                                data-aos-anchor-placement="center-bottom"
                            >
                                <div className="absolute w-full-h-full dark:bg-black/20 bg-transparent inset-0 z-[2]"></div>
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover z-0"
                                    src="/images/png/porto4.png"
                                />
                                <CardFooter className="justify-between before:bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 backdrop-blur-3xl">
                                    <p className="text-tiny text-black/70 font-medium">StartUp Design</p>
                                    <Button className="text-tiny text-white bg-black/70" variant="flat" color="default" radius="lg" size="sm">
                                        View
                                    </Button>
                                </CardFooter>
                            </Card>

                        </div>

                        <div className="flex flex-col gap-5">

                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none relative"
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-anchor-placement="center-bottom"
                            >
                                <div className="absolute w-full-h-full dark:bg-black/20 bg-transparent inset-0 z-[2]"></div>
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover z-0"
                                    src="/images/png/porto5.png"
                                />
                                <CardFooter className="justify-between before:bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 backdrop-blur-3xl">
                                    <p className="text-tiny text-black/70 font-medium">StartUp Design</p>
                                    <Button className="text-tiny text-white bg-black/70" variant="flat" color="default" radius="lg" size="sm">
                                        View
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none relative"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-anchor-placement="center-bottom"
                            >
                                <div className="absolute w-full-h-full dark:bg-black/20 bg-transparent inset-0 z-[2]"></div>
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover z-0"
                                    src="/images/png/porto6.png"
                                />
                                <CardFooter className="justify-between before:bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 backdrop-blur-3xl">
                                    <p className="text-tiny text-black/70 font-medium">StartUp Design</p>
                                    <Button className="text-tiny text-white bg-black/70" variant="flat" color="default" radius="lg" size="sm">
                                        View
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none relative"
                                data-aos="fade-up"
                                data-aos-duration="1100"
                                data-aos-anchor-placement="center-bottom"
                            >
                                <div className="absolute w-full-h-full dark:bg-black/20 bg-transparent inset-0 z-[2]"></div>
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover z-0"
                                    src="/images/png/porto7.png"
                                />
                                <CardFooter className="justify-between before:bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 backdrop-blur-3xl">
                                    <p className="text-tiny text-black/70 font-medium">StartUp Design</p>
                                    <Button className="text-tiny text-white bg-black/70" variant="flat" color="default" radius="lg" size="sm">
                                        View
                                    </Button>
                                </CardFooter>
                            </Card>

                        </div>

                        <div className="flex flex-col gap-5">

                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none relative"
                                data-aos="fade-left"
                                data-aos-duration="500"
                                data-aos-anchor-placement="center-bottom"
                            >
                                <div className="absolute w-full-h-full dark:bg-black/20 bg-transparent inset-0 z-[2]"></div>
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover z-0"
                                    src="/images/png/porto1.png"
                                />
                                <CardFooter className="justify-between before:bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 backdrop-blur-3xl">
                                    <p className="text-tiny text-black/70 font-medium">StartUp Design</p>
                                    <Button className="text-tiny text-white bg-black/70" variant="flat" color="default" radius="lg" size="sm">
                                        View
                                    </Button>
                                </CardFooter>
                            </Card>

                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none relative"
                                data-aos="fade-left"
                                data-aos-duration="800"
                                data-aos-anchor-placement="center-bottom"
                            >
                                <div className="absolute w-full-h-full dark:bg-black/20 bg-transparent inset-0 z-[2]"></div>
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover z-0"
                                    src="/images/png/porto2.png"
                                />
                                <CardFooter className="justify-between before:bg-white border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 backdrop-blur-3xl">
                                    <p className="text-tiny text-black/70 font-medium">StartUp Design</p>
                                    <Button className="text-tiny text-white bg-black/70" variant="flat" color="default" radius="lg" size="sm">
                                        View
                                    </Button>
                                </CardFooter>
                            </Card>

                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="flex flex-col gap-6">
                    <TitleSection
                        title='Revolutionizing User Experience'
                        desc='Robust Web Magic, Intuitive UI/UX, Dazzling 3D'
                        breakAfterWords={['User']}
                        textGradient={['Experience']}
                        commonGradient='bg-text-gradient-v6'
                        position='center'
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {isSmallScreen ?
                            dataReview.slice(currentIndex, currentIndex + 1).map((item, index) => (
                                <Card
                                    key={index}
                                    shadow='none'
                                    classNames={{
                                        base: [
                                            'p-6',
                                            'bg-[#F9FBFF]',
                                            'dark:bg-[#020617]',
                                            'h-full'
                                        ],
                                    }}
                                    className={`block`}
                                >
                                    <CardHeader className='gap-4'>
                                        <Avatar
                                            radius="full"
                                            src={item.photo}
                                            className='w-14 h-14 md:h-16 md:w-16 lg:w-20 lg:h-20'
                                        />
                                        <div className="flex flex-col gap-1 md:gap-2 items-start justify-center">
                                            <h5 className="font-medium dark:text-neutral-100 text-neutral-800 text-base md:text-xl leading-normal md:leading-nonrmal">
                                                {item.name}
                                            </h5>
                                            <p className="font-normal dark:text-neutral-200 text-neutral-700 text-xs md:text-sm leading-normal md:leading-nonrmal">
                                                {item.status_company}
                                            </p>
                                        </div>
                                    </CardHeader>

                                    <CardBody>
                                        <p className='font-normal dark:text-neutral-100 text-neutral-800 text-sm md:text-base leading-normal md:leading-normal'>
                                            &ldquo;
                                            {item.desc}
                                            &rdquo;
                                        </p>
                                    </CardBody>
                                </Card>
                            ))
                            :
                            dataReview.slice(currentIndex, currentIndex + 2).map((item, index) => (
                                <Card
                                    key={index}
                                    shadow='none'
                                    classNames={{
                                        base: [
                                            'p-6',
                                            'bg-[#F9FBFF]',
                                            'dark:bg-[#020617]',
                                            'h-full'
                                        ],
                                    }}
                                    className={`block`}
                                >
                                    <CardHeader className='gap-4'>
                                        <Avatar
                                            radius="full"
                                            src={item.photo}
                                            className='w-14 h-14 md:h-16 md:w-16 lg:w-20 lg:h-20'
                                        />
                                        <div className="flex flex-col gap-1 md:gap-2 items-start justify-center">
                                            <h5 className="font-medium dark:text-neutral-100 text-neutral-800 text-base md:text-xl leading-normal md:leading-nonrmal">
                                                {item.name}
                                            </h5>
                                            <p className="font-normal dark:text-neutral-200 text-neutral-700 text-xs md:text-sm leading-normal md:leading-nonrmal">
                                                {item.status_company}
                                            </p>
                                        </div>
                                    </CardHeader>

                                    <CardBody>
                                        <p className='font-normal dark:text-neutral-100 text-neutral-800 text-sm md:text-base leading-normal md:leading-normal'>
                                            &ldquo;
                                            {item.desc}
                                            &rdquo;
                                        </p>
                                    </CardBody>
                                </Card>
                            ))
                        }

                    </div>

                    <div className="mt-4 flex justify-center gap-4">
                        {isSmallScreen ?
                            Array.from({ length: Math.ceil(dataReview.length / 1) }).map((_, groupIndex) => (
                                <div
                                    key={groupIndex}
                                    className={`h-3 bg-primary-900 dark:bg-[#020617] rounded-full ease-in-out ${groupIndex === Math.floor(currentIndex / 1)
                                        ? 'bg-primary-800 dark:bg-primary-200 w-20'
                                        : 'w-3'
                                        }`}
                                ></div>
                            ))
                            :
                            Array.from({ length: Math.ceil(dataReview.length / 2) }).map((_, groupIndex) => (
                                <div
                                    key={groupIndex}
                                    className={`h-3 bg-primary-900 dark:bg-[#020617] rounded-full ease-in-out ${groupIndex === Math.floor(currentIndex / 2)
                                        ? 'bg-primary-800 dark:bg-primary-200 w-20'
                                        : 'w-3'
                                        }`}
                                ></div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
