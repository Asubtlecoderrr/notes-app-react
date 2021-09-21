import React, { useEffect, useState } from 'react'
//import notes from '../assests/data'
import {ReactComponent as ArrowLeft } from '../assests/arrow-left.svg'
import {Link} from 'react-router-dom'

// const Note = ({match}) => {
//     let noteID = parseInt(match.params.id) 
//     let note = notes.find(note => note.id === noteID)
const Note = ({ match, history }) => {
    let noteId = match.params.id
    //let note = notes.find(note => note.id == noteId)
    let [note, setNote] = useState(null)


    useEffect(() => {

        getNote()
    }, [noteId])

    let getNote = async () => {
        if (noteId === 0) return
        let response = await fetch(`http://localhost:5000/note/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    const createNote = async () => {


        await fetch(`http://localhost:5000/note/0`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...note, 'updated': new Date() })
        })
    }


    const updateNote = async () => {
        await fetch(`http://localhost:5000/note/${noteId}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...note, 'updated': new Date() })
        })
    }

    const deleteNote = async () => {
        await fetch(`http://localhost:5000/note/${noteId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        history.push('/note')
    }

    let handleSubmit = () => {
        if (noteId != 0 && !note.body) {
            deleteNote()
        } else if (noteId != 0) {
            updateNote()
        } else if (noteId == 0 && note !== null) {
            createNote()
        }

        history.push('/note')
    }
    return (
        <div className="note">
            <div className="note-header">
                <h3>
                    <Link to={'/note'}>
                        <ArrowLeft onClick={handleSubmit} />
                    </Link>
                </h3>
                {noteId != 0 ? (
                    <button onClick={deleteNote}>Delete</button>
                ) : (
                    <button onClick={handleSubmit}>Done</button>
                )}

            </div>
            <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }} placeholder="Edit note" value={note?.body}></textarea>
        </div >
    )
}

export default Note
