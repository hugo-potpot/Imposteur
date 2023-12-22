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
        <li className="flex flex-col border-b-2 border-gray-200 py-4">
            <span className="text-gray-800 mb-2">{props.user.name}</span>
            <div className="flex flex-col">
                <button
                    onClick={handleShowWord}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mb-2 focus:outline-none"
                >
                    Montrer le mot
                </button>
                <button
                    onClick={handleShowImposteur}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none"
                >
                    Imposteur ?
                </button>
            </div>
            <CustomModal show={show} onHide={handleClose} text={modalContent} />
        </li>
    );
}

export default UserGameItem;
