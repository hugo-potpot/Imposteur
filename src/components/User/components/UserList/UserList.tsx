import {User} from "../../User.tsx";
import UserItem from "./UserItem.tsx";

function UserList(props: { users: User[] }) {
    const isUserListEmpty = props.users.length === 0;

    return (
        !isUserListEmpty && (
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Joueurs</h2>
                <ul className="grid gap-4">
                    {props.users.map((user) => (
                        <UserItem user={user} key={user.id} />
                    ))}
                </ul>
            </div>
        )
    );
}

export default UserList