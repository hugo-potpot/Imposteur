import {User} from "../../User/User.tsx";
import UserGameItem from "./UserGameItem.tsx";

function UserGameList(props: {users: User[]}){
  return (
    <div>
        <ul>
            {props.users.map((user) => (
                <UserGameItem user={user} key={user.id}/>
            ))}
        </ul>
    </div>
  );
}

export default UserGameList