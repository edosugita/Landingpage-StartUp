import TitleSection from '@/components/title'
import { Input, Textarea, Button } from '@nextui-org/react'
import { Send } from 'iconsax-react'
import React from 'react'

export default function ContactUs() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-6 lg:my-28 md:my-20 sm:my-16 my-14 h-full">
                <div className="w-full h-full flex flex-col justify-center gap-16">
                    <TitleSection
                        title='Elevate Your Digital Presence with Us'
                        desc='Explore digital excellence with ESI PROJECTS'
                        textGradient={['Your Digital']}
                        commonGradient='bg-text-gradient-v6'
                        position='center'
                        breakAfterWords={['Your Digital', 'PROJECTS']}
                    />

                    <div className='w-full px-0 sm:px-10 md:px-20 xl:px-40 2xl:px-80'>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Input
                                type="text"
                                label="Name"
                                isRequired
                                classNames={{
                                    inputWrapper: [
                                        'dark:bg-[#020617] bg-primary-900',
                                        'hover:dark:bg-primary-100 hover:bg-primary-800',
                                        'focus:dark:bg-[#020617] focus:bg-primary-900',
                                    ],
                                }}
                            />
                            <Input
                                type="email"
                                label="Email"
                                isRequired
                                classNames={{
                                    inputWrapper: [
                                        'dark:bg-[#020617] bg-primary-900',
                                        'hover:dark:bg-primary-100 hover:bg-primary-800',
                                        'focus:dark:bg-[#020617] focus:bg-primary-900',
                                    ],
                                }}
                            />
                        </div>

                        <div className="mt-4 w-full">
                            <Textarea
                                label="Description"
                                placeholder="Enter your description"
                                className='w-full'
                                isRequired
                                classNames={{
                                    inputWrapper: [
                                        'dark:bg-[#020617] bg-primary-900',
                                        'hover:dark:bg-primary-100 hover:bg-primary-800',
                                        'focus:dark:bg-[#020617] focus:bg-primary-900',
                                    ],
                                    input: [
                                        'resize-y min-h-[40px]',
                                    ],
                                }}
                            />
                        </div>

                        <div className="mt-4 w-full">
                            <Button
                                endContent={<Send size={16} />}
                                className='w-full'
                                variant='solid'
                                color='primary'
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
