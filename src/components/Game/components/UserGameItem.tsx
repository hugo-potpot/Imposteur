import { useState } from 'react';
import {User} from "../../User/User.tsx";
import CustomModal from "../../Modal/CustomModal.tsx";

function UserGameItem(props: { user: User }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <li className="flex items-center justify-between border-b-2 border-gray-200 py-2">
            <span>{props.user.name}</span>
            <button
                onClick={handleShow}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Show Words
            </button>
            <CustomModal show={show} onHide={handleClose} text={"test"}/>
        </li>
    );
}

export default UserGameItem;
