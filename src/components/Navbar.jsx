import React from 'react'
import logociudad from '../assets/silin-ciudad.png'
const Navbar = () => {

    const links = [
        {
            id: 1,
            link: 'inicio'
        },
        {
            id: 2,
            link: 'campo'
        },
        {
            id: 3,
            link: 'ciudad'
        },
        {
            id: 4,
            link: 'nosotros'
        },
        {
            id: 5,
            link: 'contacto'
        },
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-slate-800 bg-white fixed '>
            <div>
                <div className='flex justify-between gap-6 items-center'>
                    <img className=' ml-8 w-12' src={logociudad} alt="" />
                    <h1 className='text-4xl ml-9 font-secundaria font-black '>SARA SILIN </h1>
                    <h4 className='flex ml-5 text-sm  font-secundaria  text-transform: uppercase'>servicios inmobiliarios ccpier 1139</h4>
                </div>
            </div>
            <ul className='flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer text-transform: uppercase font-medium text-slate-800 hover:scale-105'>{link}</li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar