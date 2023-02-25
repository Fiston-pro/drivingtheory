import { useState } from 'react'
import { NextPage } from 'next'
import Header from '../../components/header'

const LoginPage: NextPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSignInWithGoogl = () => {
    // TODO: Implement sign in with Google logic
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: Implement login logic using phoneNumber and password state
  }

  return (
    <div className="min-h-screen">
        <Header showButtons={true}/>
        <div className=" flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in</h2>
            </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-secondary-light py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone number
                </label>
                <div className="mt-1">
                    <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    />
                </div>
                </div>

                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="mt-1">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-secondary sm:text-sm"
                    value={password}
                    onChange={handlePasswordChange}
                    />
                </div>
                </div>

                <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-primary hover:text-secondary focus:outline-none focus:border-secondary">
                    Sign in
                </button>
                </div>
            </form>
            <div className='w-full text-center text-sm hover:text-secondary '> <span>Forgot your password?</span> </div>
            </div>
            <div className="mt-6">
                <h3 className='w-full text-center'>Or</h3>
                <button onClick={handleSignInWithGoogl} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-primary hover:text-secondary focus:outline-none focus:border-secondary">
                        Continue with Google
                </button>
            </div>
        </div>
        </div>
    </div>

  )
}

export default LoginPage
