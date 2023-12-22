import {User} from "../../User.tsx";

function UserItem (props: {user: User}) {
    return (
        <li>
            {props.user.name}
        </li>
    )
}

export default UserItem