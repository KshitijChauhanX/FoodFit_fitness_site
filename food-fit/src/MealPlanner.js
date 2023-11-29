import { useState } from "react";

function App() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo,
        };

        // add the todo to the list
        setList([...list, newTodo]);

        // clear input box
        setInput("");
    };

    const deleteTodo = (id) => {
        // Filter out todo with the id
        const newList = list.filter((todo) => todo.id !== id);

        setList(newList);
    };

    return (
        <div className="home">
            <div className="meal-planner main-mp">
                <h1 className="">Meal Planner</h1>
                <div>
                <input
                    className="meal-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn-meal" onClick={() => addTodo(input)}>Add</button>
                </div>
                <ul >
                    {list.map((todo) => (
                        <li key={todo.id}>
                            {todo.todo}
                            <button className="btn-meal" onClick={() => deleteTodo(todo.id)}>&times;</button>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* <div className="dashboard">
                <h1>Plan your Meal</h1>
                <h2>Total Calories: </h2>
                <h2></h2>
                <h2></h2>
                <div className="circle">
                    <h2></h2>
                </div>
            </div> */}
        </div>
    );
}

export default App;