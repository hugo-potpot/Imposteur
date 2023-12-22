import {User} from "../../User/User.tsx";
import UserGameList from "./UserGameList.tsx";

function Game(props: {users: User[]}){
    return (
        <div>
            <h2 className={"text-2xl font-bold mb-4"}>Game</h2>
            <UserGameList users={props.users}/>
        </div>
    )
}

export default Game