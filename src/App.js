import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editReady, setEditReady] = useState(-1); // Use -1 to indicate no item is being edited

  const handleAddTodo = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = () => {
    setTodoList([...todoList, todo]);
    setTodo(""); // Clear the input after adding
  };

  const handleDelete = (indexToRemove) => {
    setTodoList((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleEdit = (indexToEdit) => {
    setEditReady(indexToEdit);
  };

  const handleEditChange = (event, index) => {
    const newTodoList = todoList.map((item, i) =>
      i === index ? event.target.value : item
    );
    setTodoList(newTodoList);
  };

  const handleEditSubmit = (index) => {
    setEditReady(-1); // Reset edit mode
  };

  return (
    <div className="App">
      <div className="container">
        <div className="field">
          <input
            type="text"
            value={todo}
            onChange={handleAddTodo}
            placeholder="Todo??"
          />
        </div>
        <button onClick={handleSubmit}>Add to do</button>
      </div>
      <div className="todo-container">
        {todoList.map((list, index) => (
          <div key={index}>
            <div className="todo-container-list">
              <div className="todo-container-list-name">
                {editReady === index ? (
                  <div className="field">
                    <input
                      type="text"
                      value={todoList[index]}
                      onChange={(event) => handleEditChange(event, index)}
                      onBlur={() => handleEditSubmit(index)}
                    />
                  </div>
                ) : (
                  list
                )}
              </div>
              <div className="todo-container-list-button">
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
