import React from 'react';
import { NextPage } from 'next'
import Header from '../../components/header';

const Profile: NextPage = () => {
    return (
        <div>
            <Header homeLink='/dashboard' links={[{label:"Subscription", link:"/subscription"}, {label:"Profile", link:"/profile", active: true}]} />
            <div className='m-4'>
                <h4>Username: <span className='bg-primary p-2 rounded-md text-md'>Ietienne</span></h4>
            </div>
        </div>
    );
};

export default Profile;