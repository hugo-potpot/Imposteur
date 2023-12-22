import {User} from "../../User.tsx";

function UserItem(props: { user: User }) {
    return (
        <li className="bg-white rounded-md shadow-md p-4 text-center">
            <span className="text-gray-800 tex">{props.user.name}</span>
        </li>
    );
}

export default UserItem