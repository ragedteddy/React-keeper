import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleClick(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function handleAdd(event) {
    setTasks([
      ...tasks,
      {
        title: event.target[0].value,
        content: event.target[1].value
      }
    ]);
  }

  return (
    <div>
      <Header />
      <CreateArea runthis={handleAdd} />
      {tasks.map((task, index) => (
        <Note
          key={index}
          id={index}
          title={task.title}
          content={task.content}
          handleClick={() => handleClick(index)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
