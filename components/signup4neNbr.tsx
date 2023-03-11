import React, {useState} from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import {
    RecaptchaVerifier
  } from 'firebase/auth'
  import { auth } from '../config/firebase'

type Props = {
    onSubmit: (number: string) => void;
  }; 

const Signup4neNbr = ({ onSubmit }: Props) => {

    const [inputValue, setInputValue] = useState('');

    const inSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        onSubmit(inputValue)
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={inSubmit}>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Phone number
                </label>
                    <PhoneInput
                        country={'pl'}
                        onlyCountries= {['rw','pl']}
                        value={inputValue}
                        onChange={phone =>setInputValue( phone )}
                        inputClass= "flex w-full"
                        containerClass='flex w-full '
                        />
                <div>
                <button type='submit' id='sign-in-button' className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-primary hover:text-secondary focus:outline-none focus:border-secondary">
                    Send Code
                </button>
                </div>
            </form>
            </div>
            <div className="mt-6">
                <h3 className='w-full text-center'>Or</h3>
                <button type='submit' className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-primary hover:text-secondary focus:outline-none focus:border-secondary">
                        Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Signup4neNbr;