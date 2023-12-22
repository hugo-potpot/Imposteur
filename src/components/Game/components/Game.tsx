import {User} from "../../User/User.tsx";
import UserGameList from "./UserGameList.tsx";
import {useState} from "react";
import WORD_PAIRS from "../../../Data/data.ts";
import toast, {Toaster} from "react-hot-toast";

interface GameProps {
    users: User[];
    setUsers: (users: User[]) => void;
}
function Game(props: GameProps){

    const [isGameStarted, setIsGameStarted] = useState(false)
    const [wordPair, setWordPair] = useState(WORD_PAIRS[0])
    const successToast = () => toast.success("Nouvelle game lancée !");


    const handleStart = () => {
        setIsGameStarted(true)
        const randomIndex = Math.floor(Math.random() * WORD_PAIRS.length);
        setWordPair(WORD_PAIRS[randomIndex]);
        const userCopy = [...props.users];
        props.setUsers(userCopy.sort(() => Math.random() - 0.5));
        successToast();
    }

    return (
        <div className="p-4 bg-gray-100">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Game</h2>
                <button
                    className="px-4 py-2 border-2 border-black rounded-md bg-white text-black hover:bg-gray-200 transition-colors"
                    onClick={handleStart}
                >
                    Start
                </button>
            </div>
            {isGameStarted && (
                <div className="mt-6">
                    <UserGameList users={props.users} wordPair={wordPair} />
                </div>
            )}
            <Toaster />
        </div>
    );


}

export default Game