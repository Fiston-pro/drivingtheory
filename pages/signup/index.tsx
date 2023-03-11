
import { useState } from 'react'
import { NextPage } from 'next'
import Stepper from 'react-stepper-horizontal'

import Header from '../../components/header'
import Signup4neNbr from '../../components/signup4neNbr'
import SignupSms from '../../components/signupSms'
import SignupFinal from '../../components/signupFinal'

import { useAuth } from '../../context/AuthContextProvider'

interface Auth {
  signup: (number: string) => void;

}
const SignUpPage: NextPage = () => {
  const [pageValue, setPageValue] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [smsCode, setSmsCode] = useState()
  const [password, setPassword] = useState('')

  const { signup } = useAuth() as Auth

  const handleSignup4neNbr = (number: string) => {
    signup(number)
  }
  const handleSignupSms = (number: number) => {
    console.log(number)
    setPageValue(pageValue + 1);
  }
  const handleSignupFinal = (password: string) => {
    console.log(password)
    setPageValue(pageValue + 1);
  }

  return (
    <div className="min-h-screen">
        <Header showButtons={true}/>

        <div className=" flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <Stepper completeColor={'#C3DCE3'} activeColor={'#2B788B'} steps={ [{title: 'Phone number', onClick: () => setPageValue(0)}, {title: 'SMS code'}, {title: 'Sign Up'}] } activeStep={ pageValue } />
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
            </div>
            {pageValue === 0 && <Signup4neNbr onSubmit = {handleSignup4neNbr} />}
            {pageValue === 1 && <SignupSms onSubmit={handleSignupSms} />}
            {pageValue === 2 && <SignupFinal number={phoneNumber} onSubmit={handleSignupFinal} />}
        </div>
    </div>

  )
}

export default SignUpPage
