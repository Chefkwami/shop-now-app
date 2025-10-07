import React from 'react'
import signUpImage2 from "../assets/signUpImage2.jpg";
import style from "../pages/CreateAccount.module.css"
import Input from '../components/Input';
import Button from '../components/Button';

function CreateAccount() {
  return (
    <div className={`grid grid-cols-10  ${style.container}`}>
      <div className="col-span-5">
        <img src={signUpImage2} alt="sign-up-image" className='h-screen object-cover w-2xl' />
      </div>
      <div className="col-span-5">
        
        <h1 className='text-5xl font-bold mt-20 text-center mb-2'>Welcome to Shop.ng</h1>
        <p className='text-center mb-10'>Don't have an account? Sign up for free</p>
        <div className=" flex flex-col justify-center items-center gap-6 mb-10">
          <Input placeholder="Username or Email" />
          <Input placeholder="Password" />
        </div>
        <div className='flex justify-center'>
          <Button word="Create Account" />
        </div>
      </div>
    </div>
  )
}

export default CreateAccount;