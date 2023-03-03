import React from 'react';
import { NextPage } from 'next'
import Header from '../../components/header';
import { FiCheck } from 'react-icons/fi';

const Subscription: NextPage = () => {
    return (
        <div>
            <Header homeLink='/dashboard' links={[{label:"Subscription", link:"/subscription", active: true}, {label:"Profile", link:"/profile"}]} />
            <h2 className='text-center'>Subscription</h2>
            <div className="flex flex-wrap justify-center gap-5 mt-7">

                <article className="rounded-2xl bg-primary hover:bg-transparent border border-secondary">
                    <div className="bg-secondary rounded-t-2xl p-6 hover:bg-primary hover:text-gray-700">
                        <h3 className="text-white font-bold text-lg text-center hover:text-gray-700">1 MONTH</h3>
                    </div>
                    <ul className="service__list px-6 py-4">
                        <li className="flex items-center gap-4 mb-3">
                            <FiCheck className="text-secondary" />
                            <h3 className="text-gray-700 text-base">
                                1000+ multiple questions
                            </h3>
                        </li>
                        <li className="flex items-center gap-4 mb-3">
                            <FiCheck className="text-secondary" />
                            <h3 className="text-gray-700 text-base">
                                Exam simulator
                            </h3>
                        </li>
                    </ul>
                </article>

                <article className="rounded-2xl bg-primary hover:bg-transparent border border-secondary">
                    <div className="bg-secondary rounded-t-2xl p-6 hover:bg-primary hover:text-gray-700">
                        <h3 className="text-white font-bold text-lg text-center hover:text-gray-700">3 MONTHS</h3>
                    </div>
                    <ul className="service__list px-6 py-4">
                        <li className="flex items-center gap-4 mb-3">
                            <FiCheck className="text-secondary" />
                            <h3 className="text-gray-700 text-base">
                                1000+ multiple questions
                            </h3>
                        </li>
                        <li className="flex items-center gap-4 mb-3">
                            <FiCheck className="text-secondary" />
                            <h3 className="text-gray-700 text-base">
                                Exam simulator
                            </h3>
                        </li>
                    </ul>
                </article>

                </div>
        </div>
    );
};

export default Subscription;