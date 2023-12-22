import { useState } from 'react';
import {User} from "../../User/User.tsx";
import CustomModal from "../../Modal/CustomModal.tsx";

interface UserGameItemProps {
    user: User;
    imposteur: User | undefined;
    word: string;
}

function UserGameItem(props: UserGameItemProps) {
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState<string>(''); // État pour le contenu de la modal

    const handleClose = () => {
        setShow(false);
        setModalContent('');
    };

    const handleShowWord = () => {
        setShow(true);
        setModalContent(props.word);
    };

    const handleShowImposteur = () => {
        setShow(true);
        setModalContent(props.imposteur?.name ? 'Imposteur': 'Pas Imposteur');

    };

    return (
        <li className="flex items-center justify-between border-b-2 border-gray-200 py-2">
            <span>{props.user.name}</span>
            <button
                onClick={handleShowWord}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Show Words
            </button>
            <button
                onClick={handleShowImposteur}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Show Imposteur
            </button>
            <CustomModal show={show} onHide={handleClose} text={modalContent} />
        </li>
    );
}

export default UserGameItem;
