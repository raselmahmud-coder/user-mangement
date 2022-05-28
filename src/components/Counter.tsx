import React, { FormEvent, useState } from 'react';

interface User{
    name: string,
    job: string
}


const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [users, setUsers] = useState<User | null>(null);
    const handleIncrease = (): void => {
        setCounter(counter + 1);
    }

    const handleUserSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: "adan",
            job:"dev"
        }
        setUsers(userData)
    }
    return (
        <div>
            <h1>this is counter</h1>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button>Decrease</button>
        </div>
    );
};

export default Counter;