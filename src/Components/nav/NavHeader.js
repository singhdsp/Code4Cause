import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function NavHeader(props) {

    const linkObj = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About Us',
            path: '/About'
        },
        {
            title: 'Contact',
            path: '/Contact'
        }
    ]

    return (
        <div className='px-6 py-5 flex justify-between items-center shadow-2xl bg-fixed bg-gradient-to-br from-grey-100 to-white-500  '>
                     <motion.div  
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
>
                <img src='./plants-r.png ' className='h-10 scale-150' />
            </motion.div>
            <div className='flex items-center space-x-16'>
                <div className='space-x-8 font-Poppins font-bold'>
                    {linkObj.map((link) => <a href={link.path} className='hover:text-sky-400 hover:underline'>{link.title}</a>)}
                </div>
                <div className='flex space-x-2 font-Poppins font-bold uppercase'>
                    <Link to="Login" className='px-4 py-1 bg-green-400 rounded-full hover:bg-amber-700 cursor-pointer'>
                        <h1>Login</h1>
                    </Link>
                    <Link to="SignUp" className='px-4 py-1 bg-amber-700 rounded-full hover:bg-green-400 cursor-pointer'>
                        <h1>Sign Up</h1>
                    </Link>
                </div>
            </div>
        </div>
    )

}
