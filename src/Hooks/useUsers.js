import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useUsers = () => {
    const { id } = useParams();
    const [users, setUsers] = useState({});

    useEffect(() => {
        const url = `https://dry-journey-38445.herokuapp.com/user/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    console.log(users);
    return ({users});
};

export default useUsers;