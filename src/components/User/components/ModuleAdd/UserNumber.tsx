import React, {useState} from "react";
import UserAdd from "./UserAdd.tsx";
import {User} from "../../User.tsx";
import Game from "../../../Game/components/Game.tsx";

interface UserNumberProps {
    setUsers: (users: User[]) => void;
    users: User[];
}

function UserNumber(props: UserNumberProps) {
    const min = 3
    const [userNb, setUserNb] = useState(min)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserNb(parseInt(event.target.value))
    }

    const isMaxUsersReached = props.users.length >= userNb;


    return (
        <>
            {!isMaxUsersReached && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">User Number</h2>
                    <input
                        className="border-2 border-black"
                        type="number"
                        name="number"
                        value={userNb}
                        min={min}
                        onChange={handleChange}
                    />
                    <UserAdd setUsers={props.setUsers} users={props.users} nbUsers={userNb}/>
                </div>
            )}
            {isMaxUsersReached && (
                <Game users={props.users}/>
            )}
        </>
    );
}

export default UserNumber