import React from "react";

function CreateArea(props) {
  function handleSubmit(event) {
    props.runthis(event);
    event.target[0].value = event.target[1].value = "";
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
