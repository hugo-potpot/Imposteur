import {User} from "../../User/User.tsx";
import UserGameList from "./UserGameList.tsx";
import {useState} from "react";
import WORD_PAIRS from "../../../Data/data.ts";

interface GameProps {
    users: User[];
    setUsers: (users: User[]) => void;
}
function Game(props: GameProps){

    const [isGameStarted, setIsGameStarted] = useState(false)
    const [wordPair, setWordPair] = useState(WORD_PAIRS[0])

    const handleStart = () => {
        setIsGameStarted(true)
        const randomIndex = Math.floor(Math.random() * WORD_PAIRS.length);
        setWordPair(WORD_PAIRS[randomIndex]);
        const userCopy = [...props.users];
        props.setUsers(userCopy.sort(() => Math.random() - 0.5));
    }

    return (
        <div>
            <h2 className={"text-2xl font-bold mb-4"}>Game</h2>
            <button className={"border-2 border-black"} onClick={handleStart}>Start</button>
            {isGameStarted && (<UserGameList users={props.users} wordPair={wordPair}/>)}
        </div>
    )
}

export default Game