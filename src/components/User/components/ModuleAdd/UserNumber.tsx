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
        <div>
            {!isMaxUsersReached && (
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-4">Ajout des Joueurs</h2>
                    <div className="space-y-4">
                        <input
                            className="border-2 border-black px-3 py-2 rounded"
                            type="number"
                            name="number"
                            placeholder="Nombre de joueurs"
                            value={userNb}
                            min={min}
                            onChange={handleChange}
                        />
                        <UserAdd setUsers={props.setUsers} users={props.users} nbUsers={userNb} />
                    </div>
                </div>
            )}
            {isMaxUsersReached && (
                <Game users={props.users} setUsers={props.setUsers} />
            )}
        </div>
    );


}

export default UserNumber