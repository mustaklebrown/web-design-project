import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { data } from '../../data/data'

interface Props {

}

const PortfolioDetails: Props = () => {
    const router = useRouter()
    const { id } = router.query
    const rid = Number(id)
    const design = data[0].design.find(r => r.id == rid)


    return (
        <div className='max-w-7xl w-full min-h-screen mx-auto p-4 xl:p-0 flex flex-col items-center justify-center   '>
            <div className='md:flex items-start md:gap-10 space-y-10 md:space-y-0'>

                <div className='md:w-[46%] overflow-hidden w-full max-h-[700px]'>
                    <Image src={`${design?.image}`} width={600} height={700} alt='rest-image' className='w-full h-full rounded-md object-cover object-center' />
                </div>
                <div className='md:w-[46%] text-center md:text-start'>
                    <h1 className='text-2xl uppercase text-yellow-500 font-extrabold'>
                        {design?.name}
                    </h1>
                    <p className='text-lg  gradient-1 font-semibold'>
                        {design?.desc}
                    </p>
                    <p className='md:max-w-md  text-gray-200 mt-4'>
                        {design?.detail}
                    </p>
                </div>
            </div>
            <button className="primarybtn mt-6" onClick={() => router.back()}>go back</button>
        </div>
    )
}

export default PortfolioDetails