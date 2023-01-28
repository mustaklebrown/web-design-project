import { GetServerSideProps } from 'next';
import React, { useState, useEffect } from 'react'
import Project from '../components/Project'

const Projects = ({ products }) => {
    const [index, setIndex] = useState(2)
    const [Pjt, setPjt] = useState("design")
    const [active, setActive] = useState("primarybtn")


    const filter = (category: string) => {
        if (category == "plates") {
            setIndex(1)
            setPjt("plates")
        }
        if (category == "design") {
            setIndex(2)
            setPjt("design")
        }
        if (category == "resto") {
            setIndex(0)
            setPjt("resto")
        }

    }


    return (
        <div className='max-w-7xl mx-auto py-10'>
            <div className=" grid  grid-cols-3 gap-4 items-center mb-4 justify-center md:gap-4">
                <button onClick={() => filter("design")} className={` ${index == 2 && active} btn`}>design</button>
                <button onClick={() => filter("plates")} className={` ${index == 1 && active} btn`}>plates</button>
                <button onClick={() => filter("resto")} className={` ${index == 0 && active} btn`}>resto</button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
                {products[index].map(product => {
                    return <Project key={product.id} pro={product} project={Pjt} />
                })}
            </div>
        </div>
    )
}

export default Projects


export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/products')
    const data = await res.json()
    return { props: { products: data } }
}