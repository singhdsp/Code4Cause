import React from 'react'
import { TextField, Tooltip, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Alert } from '@mui/material'
import { VisibilityOff, Visibility, Close } from '@mui/icons-material'
import { Link, redirect } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../Auth/Firebase';

export default function Login() {

    const [showPassword, setShowPassword] = React.useState(false);
    const [txtUsername, setTxtUsername] = React.useState("");
    const [txtPassword, setTxtPassword] = React.useState("");
    const [showErrorDialog, setShowErrorDialog] = React.useState(false);
    const [loginError, setLoginError] = React.useState();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const signInUser = (e) => {
        /* e.preventDefault(); */
        signInWithEmailAndPassword(auth, txtUsername, txtPassword)
            .then((userCredential) => {
                alert("Welcome " + userCredential.user.email)
            })
            .catch((error) => {
                setLoginError(error)
                setShowErrorDialog(true)
            })
    }

    return (
        <div className='h-screen w-screen px-48 py-20 flex justify-center items-center bg-gray-200'>
            <div className='w-full h-full shadow-2xl rounded-3xl grid grid-cols-5 bg-white'>
                <div className=' col-span-3 flex flex-col justify-center p-16 overflow-y-scroll'>
                    <div className='space-y-4 flex flex-col justify-center'>
                        <h1 className='text-center font-bold font-Poppins text-4xl capitalize tracking-wide'>Login To Your Account</h1>
                        <TextField
                            id="userLoginName"
                            label="Username"
                            onChange={(e) => setTxtUsername(e.target.value)}
                            value={txtUsername}
                        />
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="userPassLogin">Password</InputLabel>
                            <OutlinedInput
                                id="userPassLogin"
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setTxtPassword(e.target.value)}
                                value={txtPassword}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <button className='w-full py-2 text-white rounded-full uppercase tracking-widest font-bold text-xl bg-gradient-to-br from-violet-600 to-blue-700 transition-all hover:scale-105' onClick={() => signInUser()}>Login</button>
                    </div>
                    <div className="mt-5">
                        <h1 className='font-semibold font-Poppins text-center'>Forgot Password ? <Link to="/ForgotPassword" className='text-blue-600 hover:underline cursor-pointer'>Reset Password</Link></h1>
                        {/* <h1 className='font-semibold font-Poppins text-center'>Already A User ? <a className='text-blue-600 hover:underline cursor-pointer'>Sign In</a></h1> */}
                    </div>
                    <div className='mt-14 font-Poppins font-semibold uppercase tracking-widest border-black border-t-2 flex flex-col items-center text-slate-900'>
                        <div className='px-2 py-1 -mt-4 bg-white'>
                            <h1>Login Using Social Networks</h1>
                        </div>
                        <div className='flex items-center justify-center mt-2 space-x-4'>
                            <Tooltip title="Facebook">
                                <img src='/social-media-1.jpg' className='h-10 w-10 overflow-hidden rounded-full' alt='Facebook' />
                            </Tooltip>
                            <Tooltip title="Google">
                                <img src='/social-media-2.jpg' className='h-10 w-10 overflow-hidden rounded-full' alt='Google' />
                            </Tooltip>
                            <Tooltip title="LinkedIn">
                                <img src='/social-media-3.jpg' className='h-10 w-10 overflow-hidden rounded-full' alt='LinkedIn' />
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 relative'>
                    <img src='/bg1.jpg' className='h-full w-full overflow-hidden object-cover rounded-e-3xl' />
                    <div className='absolute top-0 left-0 h-full w-full'>
                        <div className='flex flex-col justify-center items-center text-white h-full w-full font-Poppins text-center space-y-3 p-8'>
                            <h1 className='text-3xl font-bold'>New Here ?</h1>
                            <h1 className='text-xl font-semibold'>Sign Up to discover a great ammount of new oppurtunities</h1>
                            <Link to="/SignUp" className='px-4 py-2 rounded-full bg-gradient-to-r font-bold uppercase tracking-widest from-violet-800 to-fuchsia-600 hover:scale-110 transition-all'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
            {showErrorDialog &&
                <>
                    <div className='absolute top-0 left-0 h-screen w-screen z-10 bg-gray-200 flex justify-center items-center'>
                        <div className='py-6 pl-10 pr-16 rounded-3xl w-[30rem] shadow-2xl bg-red-600 text-white font-Poppins relative'>
                            <h1 className='font-bold text-2xl'>Error - {loginError.code}</h1>
                            <h1>{loginError.message}</h1>
                            <div className='absolute top-3 right-3 p-2 rounded-full hover:bg-white hover:text-red-600' onClick={() => setShowErrorDialog(false)}>
                                <Close />
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
