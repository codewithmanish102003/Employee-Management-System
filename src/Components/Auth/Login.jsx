/* eslint-disable react/prop-types */
import { useState } from 'react';

const Login = ({handleLogin}) => {

  // console.log(handleLogin)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submit clicked");
    // You can add further logic for handling login here
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 rounded-xl p-2 m-5'>
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center mx-10 my-14'>
          <input 
            value={email} 
            onChange={(e) => { setEmail(e.target.value) }}
            type="email"
            className='bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 text-white outline-none mt-3' 
            placeholder='Enter Your email' 
            required 
          />
          <input 
            value={password} 
            onChange={(e) => { setPassword(e.target.value) }}
            type="password" 
            className='bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 text-white outline-none mt-3' 
            placeholder='Enter Your password'
            required
          />
          <button className='mt-7 text-white bg-emerald-600 w-full outline-none border-emerald-600 text-xl py-3 px-5 rounded-full'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;