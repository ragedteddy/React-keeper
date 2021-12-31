import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    console.log(name);
    console.log(value);

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const [Show, setShow] = useState("none");

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setShow("none");
    event.preventDefault();
  }

  function expand() {
    setShow(null);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          onClick={expand}
        />
        <div style={{ display: Show }}>
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
          />
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </div>
      </form>
    </div>
  );
}

export default CreateArea;
