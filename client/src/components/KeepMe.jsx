// import { useState, useRef } from "react"
// import { Link } from "react-router-dom"
// // import { Navigate } from "react-router-dom"
// export default function StickyNotes({ onClose }) {
    
//     const [allowMove, setAllowMove] = useState(false)
//     const stickyNoteRef = useRef()
//     const [diffx, setDirectx] = useState(0)
//     const [diffy, setDirecty] = useState(0)
    
//     function handleMouseDown(e) {
//         setAllowMove(true)
//         const dimensions = stickyNoteRef.current.getBoundingClientRect()
//         console.log(e, dimensions,stickyNoteRef)
//         //figure out why the notes are dragging the others
//         setDirectx(e.clientX - dimensions.x)
//         setDirecty(e.clientY - dimensions.y)
//     }
//     function handleMouseMove(e) {
//         if (allowMove) {
//             console.log("allow moving - ", e.clientX, diffx, e.clientY, diffy)
//             const x = e.clientX - diffx
//             const y = e.clientY - diffy
//             console.log("inside mouse move", x, y)
//             stickyNoteRef.current.style.left = x + "px"
//             stickyNoteRef.current.style.top = y + "px"
//         }
//     }
//     const [note, setNote] = useState([])
//     function addNote(e) {
//         //why are the notes duplicating the singlular button
//         e.preventDefault()
//         setNote([
//             ...note,
//             {
//                 id: Date.now(),
//             },
//         ])
//     }
//     function removeNote(noteId) {
//         setNote(note.filter((item) => item.id !== noteId))
//     }
//     function handleMouseUp() {
//         setAllowMove(false)
//     }
    
//     return (
//         <div>
//             <Link to={`/`}>Home</Link>
//             <p>
//                 <button className="sticky-btn" onClick={(e) => addNote(e)}>
//                     New Note
//                 </button>
//             </p>

            
//         <div className="sticky-note" ref={stickyNoteRef}>
//             <div
//                 className="sticky-note-header"
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 //issue in handle mouse move? 
//                 onMouseUp={handleMouseUp}
//             >
//                 <div>Sticky Note</div>
//                 {note.map((item) => (
//                     <StickyNotes key={item.id} onClose={() => removeNote(item.id)} />
//                     ))}
//                 
//             </div>
//             <textarea name="" id="" cols="10" rows="10"></textarea>
//         </div>
//     </div>
//     )
// }

