import React from "react";

function Notes(props) {
    return (
        <div className="notes">
        <h1>Notes</h1>
        <textarea
            className="notes-textarea"
            value={props.notes}
            onChange={props.handleNotesChange}
            placeholder="Notes"
        />
        </div>
    );
}

export default Notes;