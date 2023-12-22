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
        <div className="flex items-center space-x-2">
            <input
                className="border-2 border-black px-3 py-2 rounded"
                value={name}
                type="text"
                placeholder="Name"
                onChange={handleNameChange}
                onKeyDown={handleKeyPress} // Gestionnaire pour la touche "Entrée"

            />
                <button
                    onClick={handleAddUser}
                    className="px-4 py-2 border-2 border-black rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                >
                    Add User
                </button>
        </div>
    );
}

export default UserAdd;
