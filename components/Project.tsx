import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = ({ pro, project }) => {
    return (
        <Link key={pro.id} href={`/${project}/${pro.id}`}>
            <div className="cursor-pointer hover:-translate-y-1 duration-300 transition-all  relative bg-white w-full h-[260px] p-4 group rounded-md shadow-md shadow-rose-600 border-none">
                <Image
                    src={pro.image}
                    alt={pro.name}
                    width={400}
                    height={250}
                    className="group-hover:opacity-50 h-full w-full  duration-300 transition-all"
                />
                <div className="text-gray-900 opacity-0 z-30 w-full h-full left-0 top-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center transition-all absolute  bg-rose-500/30 space-y-2">
                    <p className="text-center font-mono text-rose-700 font-bold uppercase">
                        {pro.name}
                    </p>
                    <p className="text-center max-w-xs text-base  font-medium ">
                        {pro.desc}
                    </p>
                    <button className="secondarybtn">explore</button>
                </div>
            </div>
        </Link>
    )
}

export default Project