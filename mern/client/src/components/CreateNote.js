import React from "react";

function CreateNote(props) {
    return (
        <div className="create-note">
            <input
                name="title"
                onChange={props.handleChange}
                value={props.title}
                placeholder="Title"
                type="text"
            />
            <textarea
                name="content"
                onChange={props.handleChange}
                value={props.content}
                placeholder="Take a note..."
                rows={3}
            />
            <button onClick={props.handleClick}>Add</button>
        </div>
    );
};

export default CreateNote;