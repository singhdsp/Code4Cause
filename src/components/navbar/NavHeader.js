import React from 'react'
import { Link } from 'react-router-dom'
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
        <div className='px-10 py-5 flex justify-between items-center shadow-2xl'>
            <div>
                <img src='./logo.png' className='h-10 cover' />
            </div>
            <div className='flex items-center space-x-16'>
                <div className='space-x-8 font-Poppins font-bold'>
                    {linkObj.map((link) => <a href={link.path} className='hover:text-sky-400 hover:underline'>{link.title}</a>)}
                </div>
                <div className='flex space-x-2 font-Poppins font-bold uppercase'>
                    <Link to="Login" className='px-4 py-1 bg-pink-600 rounded-full hover:bg-pink-800 cursor-pointer'>
                        <h1>Login</h1>
                    </Link>
                    <Link to="SignUp" className='px-4 py-1 bg-sky-600 rounded-full hover:bg-blue-800 cursor-pointer'>
                        <h1>Sign Up</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}
