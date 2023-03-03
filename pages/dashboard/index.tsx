import React from 'react';
import Header from '../../components/header';

const Dashboard = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Header homeLink='/dashboard' links={[{label:"Subscription", link:"/subscription"}, {label:"Profile", link:"/profile"}]}/>
            <div className='m-4 flex-grow flex flex-col justify-center items-center'>
                <div className='h-80 w-96 rounded-lg flex justify-center items-center bg-primary'>
                    <div className='p-5 rounded-lg h-80 w-96 flex justify-center items-center flex-col border border-secondary bg-white gap-2 rotate-[5deg] hover:rotate-[0] transition-all duration-400 ease-out'>
                        <h3 className='text-2xl'>Practice Questions</h3>
                        <p>You are doing pretty good!</p>
                        <div className="w-36 h-36 mx-3 rounded-full bg-secondary hover:transform hover:scale-105 flex justify-center items-center text-center">
                            <div className='w-32 h-32 rounded-full bg-white flex flex-col justify-center items-center text-center' >
                                <p>Did</p>
                                <h2>10</h2>
                                <p>questions</p> 
                            </div>
                        </div>
                        <p className="text-base mt-2 px-3 py-1 border rounded-3xl text-secondary bg-primary cursor-pointer">Start</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;