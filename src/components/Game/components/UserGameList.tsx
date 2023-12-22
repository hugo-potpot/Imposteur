import {User} from "../../User/User.tsx";
import UserGameItem from "./UserGameItem.tsx";
import {useEffect, useState} from "react";

interface UserGameListProps {
    users: User[];
    wordPair: string[];
}

function UserGameList(props: UserGameListProps) {
    const [imposteur, setImposteur] = useState<User>(props.users[0]);
    const [imposteurWord, setImposteurWord] = useState<string>('');
    const [classicWord, setClassicWord] = useState<string>('');

    useEffect(() => {
        const randomIndexImposteur = Math.floor(Math.random() * props.users.length);
        setImposteur(props.users[randomIndexImposteur]);

        const wordsCopy = [...props.wordPair];
        const randomIndexWord1 = Math.floor(Math.random() * wordsCopy.length);
        setImposteurWord(wordsCopy[randomIndexWord1]);
        wordsCopy.splice(randomIndexWord1, 1);

        setClassicWord(wordsCopy[0]);
    }, [props.users, props.wordPair]);

    const isImposteur = (user: User) => {
        return user.id === imposteur.id;
    };

    return (
        <div>
            <ul>
                {props.users.map((user) => (
                    <UserGameItem
                        user={user}
                        key={user.id}
                        imposteur={isImposteur(user) ? imposteur : undefined}
                        word={isImposteur(user) ? imposteurWord : classicWord}
                    />
                ))}
            </ul>
        </div>
    );
}

export default UserGameList