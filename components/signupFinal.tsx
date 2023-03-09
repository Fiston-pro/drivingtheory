import React, {useState} from 'react';

type Props = {
    number: string;
    onSubmit: (password: string) => void;
  }; 

const SignupFinal = ({ number,  onSubmit }: Props) => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
          } else {
            onSubmit(password);
          }
      };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };
    
    const handleConfirmPasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
        ) => {
        setConfirmPassword(event.target.value);
        };

    const passwordsMatch = password === confirmPassword;

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mt-3">
                        Phone Number
                    </label>
                    <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                    value={number}
                    readOnly
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                    />

                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-3">Password:</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                    />

                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mt-3">Confirm Password:</label>
                    <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
                    />

                </div>

                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-primary hover:text-secondary focus:outline-none focus:border-secondary">
                        Sign Up
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default SignupFinal;