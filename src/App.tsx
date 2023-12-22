import './App.css'
import UserList from "./components/User/components/UserList/UserList.tsx";
import ModuleAdd from "./components/User/components/ModuleAdd/ModuleAdd.tsx";
import {useState} from "react";
import {User} from "./components/User/User.tsx";

function App() {

    const [users, setUsers] = useState<User[]>([])

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Imposteur
            </h1>
            <UserList users={users}/>
            <ModuleAdd setUsers={setUsers} users={users} />
        </>
    )
}

export default App
