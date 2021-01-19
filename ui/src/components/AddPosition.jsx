import React from "react";

export const AddPosition = ({ onCancel, onAccept }) => {

    const [official, setOfficial] = React.useState("")
    const [position, setPosition] = React.useState("")

    return (
        <div>
            <input required placeholder="Official" name="official" value={official} onChange={e => setOfficial(e.target.value)} />

            <input required placeholder="Position" name="position" value={position} onChange={e => setPosition(e.target.value)}  />

            <button type="button" onClick={() => onAccept(official, position)}>ok</button>

            <button onClick={onCancel} type="button">Cancel</button>
        </div>
    );
};
