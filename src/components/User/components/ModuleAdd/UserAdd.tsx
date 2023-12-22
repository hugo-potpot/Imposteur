import React, {useState} from 'react';
import {User} from '../../User';

interface UserAddProps {
    setUsers: (users: User[]) => void;
    users: User[];
    nbUsers: number;
}

function UserAdd(props: UserAddProps) {
    const [name, setName] = useState('');


    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleAddUser = () => {
        const newUsers = [...props.users];
        newUsers.push({
            id: props.users.length + 1,
            name: name,
            words: '',
            isImposter: false,
        });
        props.setUsers(newUsers);
        setName(''); // Réinitialisation du champ de saisie après l'ajout de l'utilisateur

    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && name.trim() !== '') {
            handleAddUser();
        }
    };


    return (
        <div className="flex flex-col items-center">
            <input
                className="border-2 border-gray-400 px-3 py-2 rounded"
                value={name}
                type="text"
                placeholder="Nom du joueur"
                onChange={handleNameChange}
                onKeyDown={handleKeyPress}
            />
            <button
                onClick={handleAddUser}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition-colors mt-4"
            >
                Ajouter
            </button>
        </div>
    );
}

export default UserAdd;
