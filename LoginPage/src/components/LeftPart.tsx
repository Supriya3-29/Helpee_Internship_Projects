import AppleLogo from '../assets/images/AppleLogo.png'
import SelloraLogo from '../assets/images/SelloraLogo.jpg'
import GoogleLogo from '../assets/images/GoogleLogo.png'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/LoginSlice';
// import { useNavigate } from 'react-router-dom';
import { fetchData } from '../store/LoginSlice';
import type { AppDispatch } from '../store/store';

// export interface formData {
//   email: string,
//   password: string
// }

export const LeftPart = () => {

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch<AppDispatch>()
  // const navigate = useNavigate();

  const togglePassword = () => {
    setShow(prev => !prev)
  }

  const formSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    dispatch(setUser(email));
    dispatch(fetchData());
    // navigate('/home');
  }

  return (
    <div className=' flex flex-col '>
      <header className=' flex flex-row items-center'>
        <img src={SelloraLogo} width="50" height="30" title="sellora_logo" />
        <span className='font-semibold text-xl'>&nbsp; Sellora</span>
      </header>

      <div className='pt-15 flex flex-col gap-5 p-5' >
        <div className=' text-center'>
          <h1 className='text-4xl font-semibold'>Welcome Back</h1><br />
          <span className=' text-5 font-thin text-zinc-400'>Enter your email password to access your account</span>
        </div>
        <form
          className=' flex flex-col ml-40 mr-40 gap-4'
          onSubmit={formSubmit}
          >
          <div >
            <label>Email</label><br />
            <input
              type="text"
              id="em"
              title="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border-solid border-1 rounded-sm border-gray-300 w-full h-10 pl-2 ' />
          </div>

          <div >
            <label>Password</label>
            <div className='relative flex items-center'>
              <input
                type={show ? 'text' : 'password'}
                id="pass"
                title="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border-solid border-1 rounded-sm border-gray-300 w-full h-10 pl-2 ' />
              <span id="password-icon" onClick={togglePassword} className='cursor-pointer inline-block ml-[-30px]'><i className={`fa-solid ${show ? "fa-eye" : "fa-eye-slash"}`}></i></span>
            </div>
          </div>

          <div className=' grid grid-cols-[2fr_1fr]' >
            <div>
              <input type="checkbox" id="remember-me" title="remember-me" className='text-5 font-thin text-zinc-400' />&nbsp;  Remember Me
            </div>
            <a href="#" id="forgot-password" className='text-blue-600'>Forgot your Password?</a>
          </div>

          <button id="login" type="submit" className='bg-blue-700 h-10 text-white border-none rounded-lg cursor-pointer'>Log in</button>
          <span className=' flex items-center text-5 font-thin text-zinc-400'><hr className='w-50 ' /> &nbsp; &nbsp; Or Login with &nbsp; &nbsp; <hr className='w-50' /></span>

          <div className=' grid grid-cols-[1fr_1fr] gap-5'>
            <button id="google" type="button" className='flex flex-row border-solid border-1 rounded-sm border-gray-300 justify-center h-10 rounded-md bg-gray-200 items-center cursor-pointer'>
              <img src={GoogleLogo} width="20" height="20" title="google_logo" />
              <span>&nbsp; Google</span></button>

            <button id="apple" type="button" className='flex flex-row border-solid border-1 rounded-sm border-gray-300 justify-center h-10 rounded-md bg-gray-200 items-center cursor-pointer'>
              <img src={AppleLogo} width="20" height="20" title="apple_logo" />
              <span>&nbsp; Apple</span> </button>
          </div>
        </form>

        <div className='flex justify-center'>
          <span id="register-now">Don't have an account?
            <a href="#" className='text-blue-600'> Register Now</a>
          </span>
        </div>
      </div>

      <footer className='grid grid-cols-[2.5fr_0.5fr] gap-10 text-5 font-thin text-zinc-400 mt-15'>
        <span id="left-headding-span">Copyright &copy; 2025 Sellora Enterprises LTD</span>
        <span id="left-headding-span1" >Privacy Policy</span>
      </footer>
    </div>
  )
}
