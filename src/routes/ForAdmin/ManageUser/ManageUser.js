import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import Users from '../Users';

const ManageUser = () => {
    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        fetch('https://dry-journey-38445.herokuapp.com/user')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, [reload]);
    return (
        <div className='md:mx-20 md:my-10 h-screen'>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="hidden md:flex text-sm font-medium w-20 text-gray-900 md:px-6 px-9 py-4">
                                            UserId
                                        </th>
                                        <th scope="col" class="text-sm font-medium w-96 text-center text-gray-900 md:px-6 px-9 py-4">
                                            Email
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 md:px-6 px-9 py-4">
                                            Role
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 md:px-6 px-9 py-4">

                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map(user => <Users
                                            key={user._id}
                                            alluser={user}
                                        >
                                        </Users>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;