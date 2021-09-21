import React, { useEffect, useState }  from 'react'
//import notes from '../assests/data'
import ListItem from '../components/listItem'
import AddButton from '../components/AddButton'

const NotesPages = () => {

    let [notes, setNote] = useState([])

    useEffect(()=>{
        getNotes()
    },[])

    let getNotes = async ()=>{
        let response = await fetch ('http://localhost:5000/note')
        let data = await response.json()
        console.log(data)
        setNote(data)
    }
    
    return (
        <div className="notes">
            <div className="notes-header">
                <h2 className="notes-title">&#9782;Notes</h2>
                <p className="notes-count">{notes.length}</p>
            </div>
            <div className="notes-list">
            
                {notes.map((note,id)=>(
                    
                    <ListItem key={id} note={note} />
                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default NotesPages
