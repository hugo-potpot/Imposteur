import {User} from "../../User.tsx";
import UserItem from "./UserItem.tsx";

function UserList(props: {users: User[]}) {

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <ul className="list-decimal pl-4">
                {props.users.map((user) => (
                    <UserItem user={user} key={user.id}/>
                ))}
            </ul>
        </div>
    );
}
export default UserList