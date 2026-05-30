import React from "react";
import App from "./App";

function ReactList() {
    const fruits = ["Apple", "Banana", "Cherry", "Mango"];
    const App = () => {
        const users = [
            { id: 1, name: 'Geeka', age: '30' },
            { id: 2, name: 'for', age: '20' },
            { id: 3, name: 'Geeks', age: '32' },
        ];

        return (
            <div>
                <h1>Fruits List</h1>
                <ul>
                    {fruits.map((f, index) => (
                        <li key={index}>{f}</li>
                    ))}
                </ul>

                <ul>
                    {users.map((user) => (
                        user.age>30 ?(
                        <li key={user.id}>{user.name} is over 30 years old.
                        </li>
                    ):(
                        <li key={user.id}>{user.name} is under 30 years old
                        </li>)
                    ))}
                </ul>
            </div>


        );
    }
}
export default ReactList;