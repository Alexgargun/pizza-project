import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import styles from "../styles/TodoItem.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const { user } = useAuthContext();
  const [updateInput, setUpdateInput] = useState(itemProp.title);
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdateDone = (e) => {
    if (e.key === "Enter") {
      setUpdate(updateInput, itemProp.id);
      setEditing(false);
    }
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  const completedStyle = {
    fontStyle: "talic",
    color: "#595959",
    opacity: "0.4",
    textDecoration: "line-through",
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.complited}
          onChange={() => handleChange(itemProp.id)}
        />
        {user && (
          <button className={styles.edit} onClick={handleEditing}>
            {" "}
            <AiFillEdit
              style={{
                color: "#5e5e5e",
                fontSize: "16px",
                marginTop: "2px",
              }}
            />
          </button>
        )}
        <button className={styles.delete} onClick={() => delTodo(itemProp.id)}>
          <AiFillDelete
            style={{
              color: "#5e5e5e",
              fontSize: "16px",
              marginTop: "2px",
            }}
          />
        </button>

        <span style={itemProp.completed ? completedStyle : null}>
          {" "}
          {updateInput}
        </span>
      </div>
      <input
        className={styles.textInput}
        type="text"
        value={updateInput}
        style={editMode}
        onKeyDown={handleUpdateDone}
        onChange={(e) => setUpdateInput(e.target.value)}
      />
    </li>
  );
};

export default TodoItem;
