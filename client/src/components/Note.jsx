import { useState, useRef } from "react"
import { Link } from "react-router-dom"
// import StickyNotes from "./StickyNotes"


export default function Note({ onClose }) {

    const [allowMove, setAllowMove] = useState(false)
    const stickyNoteRef = useRef()
    const [diffx, setDirectx] = useState(0)
    const [diffy, setDirecty] = useState(0)

    function handleMouseDown(e) {
        setAllowMove(true)
        const dimensions = stickyNoteRef.current.getBoundingClientRect()
        console.log(e, dimensions, stickyNoteRef)
        setDirectx(e.clientX - dimensions.x)
        setDirecty(e.clientY - dimensions.y)
    }
    function handleMouseMove(e) {
        if (allowMove) {
            console.log("allow moving - ", e.clientX, diffx, e.clientY, diffy)
            const x = e.clientX - diffx
            const y = e.clientY - diffy
            console.log("inside mouse move", x, y)
            stickyNoteRef.current.style.left = x + "px"
            stickyNoteRef.current.style.top = y + "px"
        }
    }

    function handleMouseUp() {
        setAllowMove(false)
    }

    return (
        <div>
            <div className="sticky-note" ref={stickyNoteRef}>
                <div
                    className="sticky-note-header"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    //issue in handle mouse move? 
                    onMouseUp={handleMouseUp}
                >
                <div className="close" onClick={onClose}>
                    &times;
                </div>
                </div>
                <textarea name="" id="" cols="10" rows="10"></textarea>
            </div>

        </div>
    )
}

