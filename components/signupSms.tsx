import React, {useState} from 'react';
import OtpInput from 'react-otp-input';

type Props = {
    onSubmit: (nbr: number) => void;
  }; 

const SignupSms = ({ onSubmit }: Props) => {

    const [inputValue, setInputValue] = useState<string>();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInputValue(newValue);
    };

    const inSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue !== undefined) {
            const temp = parseInt(inputValue)
            onSubmit(temp)
        }
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={inSubmit}>
                <div>
                <label htmlFor="sms" className="block text-sm font-medium text-gray-700">
                    SMS Code
                </label>
                {/* <OtpInput
                    value={inputValue}
                    onChange={handleInputChange}
                    numInputs={6}
                    containerStyle= "flex justify-between mx-3"
                /> */}

                <div className="mt-1">
                    <input
                    id="sms"
                    name="sms"
                    type="number"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                    value={inputValue}
                    onChange={handleInputChange}
                    />
                </div>
                </div>

                <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-primary hover:text-secondary focus:outline-none focus:border-secondary">
                    Verify Code
                </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default SignupSms;