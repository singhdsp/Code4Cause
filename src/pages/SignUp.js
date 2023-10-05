import React from 'react'
import { TextField, Tooltip, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Box } from '@mui/material'
import { VisibilityOff, Visibility, AccountCircle, AlternateEmail, Email , Close} from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../Auth/Firebase';

export default function SignUp() {

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [txtUsername, setTxtUsername] = React.useState("");
  const [txtPassword, setTxtPassword] = React.useState("");
  const [txtPassword2, setTxtPassword2] = React.useState("");
  const [txtEmail, setTxtEmail] = React.useState("");
  const [showErrorDialog, setShowErrorDialog] = React.useState(false);
  const [loginError, setLoginError] = React.useState();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signUpUser = () => {
    if (txtPassword === txtPassword2) {
      createUserWithEmailAndPassword(auth, txtEmail, txtPassword)
        .then((userCredential) => {
          alert("Welcome " + userCredential.user.email)
        })
        .catch((error) =>{
          setLoginError(error)
          setShowErrorDialog(true)
        })
    }
  }


  return (
    <div className='h-screen w-screen px-48 py-20 flex justify-center items-center bg-gray-200'>
      <div className='w-full h-full shadow-2xl rounded-3xl grid grid-cols-5 bg-white'>
        <div className=' col-span-3 flex flex-col justify-center p-16 overflow-y-scroll'>
          <div className='space-y-4 flex flex-col justify-center'>
            <h1 className='text-center font-bold font-Poppins text-4xl capitalize tracking-wide'>Create Your Account</h1>
            <TextField
              id="userName"
              label="Username"
              onChange={(e) => setTxtUsername(e.target.value)}
              value={txtUsername}
            />
            <FormControl variant="outlined">
              <InputLabel htmlFor="userPass">Password</InputLabel>
              <OutlinedInput
                id="userPass"
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
            <FormControl variant="outlined">
              <InputLabel htmlFor="userPassC">Confirm Password</InputLabel>
              <OutlinedInput
                id="userPassC"
                onChange={(e) => setTxtPassword2(e.target.value)}
                value={txtPassword2}
                type={showPassword2 ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword2 ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="Email">Email</InputLabel>
              <OutlinedInput
                id="Email"
                onChange={(e) => setTxtEmail(e.target.value)}
                value={txtEmail}
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
                label="Email"
              />
            </FormControl>
            {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField id="userEmail" label="Email" variant="standard" />
            </Box> */}
            <button className='w-full py-2 bg-blue-500 hover:bg-blue-800 text-white rounded-full uppercase tracking-widest font-bold text-xl bg-gradient-to-br from-violet-600 to-blue-700 transition-all hover:scale-105' onClick={() => signUpUser()}>Sign Up</button>
          </div>
        </div>
        <div className='col-span-2 relative'>
          <img src='/bg1.jpg' className='h-full w-full overflow-hidden object-cover rounded-e-3xl' />
          <div className='absolute top-0 left-0 h-full w-full'>
            <div className='flex flex-col justify-center items-center text-white h-full w-full font-Poppins text-center space-y-3 p-8'>
              <h1 className='text-2xl font-bold'>Already Have An Account ?</h1>
              <h1 className='text-xl font-semibold'>Sign In to discover a great ammount of new oppurtunities</h1>
              <Link to="/Login" className='px-4 py-2 rounded-full bg-gradient-to-r font-bold uppercase tracking-widest from-violet-800 to-fuchsia-600 hover:scale-110 transition-all'>Sign In</Link>
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
