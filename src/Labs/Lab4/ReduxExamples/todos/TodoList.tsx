import React, { useState } from "react";
export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node"  }]);

  const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });

  const addTodo = (todo: any) => {
    const newTodos = [ ...todos, { ...todo,
      id: new Date().getTime().toString() }];
    setTodos(newTodos);
    setTodo({id: "-1", title: ""});
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const updateTodo = (todo: any) => {
    const newTodos = todos.map((item) =>
      (item.id === todo.id ? todo : item));
    setTodos(newTodos);
    setTodo({id: "-1", title: ""});
  };

	return (
    <div className="container">
      <h2>Todo List</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center ">
					<input value={todo.title}
            onChange={(e) =>
              setTodo({ ...todo,
                title: e.target.value })
            } className="form-control me-2" placeholder = "Learn Mongo"
          />
					
					<button onClick={() => updateTodo(todo)}
                  id="wd-update-todo-click" className="btn btn-warning me-2">
            Update </button>
          <button onClick={() => addTodo(todo)}
                  id="wd-add-todo-click" className="btn btn-success">Add</button>
         
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <button onClick={() => deleteTodo(todo.id)}
                    id="wd-delete-todo-click" className="btn btn-danger btn-sm">
              Delete </button>
            <button onClick={() => setTodo(todo)}
                    id="wd-set-todo-click" className="btn btn-primary btn-sm me-2">
              Edit </button>
            {todo.title}
						
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}
