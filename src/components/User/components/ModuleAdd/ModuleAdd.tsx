import UserNumber from "./UserNumber.tsx";
import {User} from "../../User.tsx";
interface ModuleAddProps {
    setUsers: (users: User[]) => void;
    users: User[];
}
function ModuleAdd(props: ModuleAddProps) {
    return (
        <div className="p-4 mb-4">
            <UserNumber users={props.users} setUsers={props.setUsers}/>
        </div>
    )
}

export default ModuleAdd