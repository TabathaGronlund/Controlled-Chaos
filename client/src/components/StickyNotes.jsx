import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import Note from "./Note"


// export default function StickyNotes({ onClose }) {
const StickyNotes = () => {
    const [notes, setNotes] = useState([])
    function addNote() {
        setNotes([
            ...notes,
            {
                id: Date.now(),
            },
        ])
    }
    function removeNote(noteId) {
        setNotes(notes.filter((item) => item.id !== noteId))
    }
    return (
        <div>
                <Link to={`/`}>Home</Link>

            <div className="App">
                {notes.map((item) => (
                    <Note key={item.id} onClose={() => removeNote(item.id)} />
                
                ))}

                
                <button className="sticky-btn" onClick={addNote}>
                    New Note
                </button>
            </div>
        </div>
    )
}

export default StickyNotes