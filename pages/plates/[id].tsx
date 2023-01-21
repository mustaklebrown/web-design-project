import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'
import { data } from '../../data/data'

interface Props {

}

const PortfolioDetails: Props = (props) => {
    const router = useRouter()
    const { id } = router.query
    const rid = Number(id)
    const plates = data[0].plates.find(r => r.id == rid)!


    return (
        <div className='max-w-7xl w-full min-h-screen mx-auto p-4 xl:p-0 flex flex-col items-center justify-center   '>
            <div className='md:flex items-start md:gap-10 space-y-10 md:space-y-0'>

                <div className='md:w-[46%] overflow-hidden w-full max-h-[460px]' >
                    <Image src={`${plates?.image}`} width={600} height={600} alt='rest-image' className='w-full h-full rounded-md object-cover object-center aspect-1' />
                </div>
                <div className='md:w-[46%] text-center md:text-start'>
                    <h1 className='text-2xl uppercase text-yellow-500 font-extrabold'>
                        {plates?.name}
                    </h1>
                    <p className='text-lg  gradient-1 font-semibold'>
                        {plates?.desc}
                    </p>
                    <p className='md:max-w-md  text-gray-200 mt-4'>
                        {plates?.detail}
                    </p>
                </div>
            </div>
            <button className="primarybtn mt-6" onClick={() => router.back()}>go back</button>
        </div>
    )
}

export default PortfolioDetails