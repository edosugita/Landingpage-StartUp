import Image from "next/image";


export default function Loading() {

    return (
        <div className="bg-[#0F172A]">
            <div className='flex flex-col gap-6 justify-center items-center max-w-7xl mx-auto px-6 h-screen w-full'>
                <Image
                    src='/images/logo-dark.svg'
                    alt='Logo Esi Projects'
                    width={80}
                    height={80}
                    className='w-10 h-10 md:w-16 md:h-16 cursor-pointer animate-bounce'
                />
            </div>
        </div>
    )
}
