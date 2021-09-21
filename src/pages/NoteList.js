import React, { useEffect, useState }  from 'react'
//import notes from '../assests/data'
import {Link} from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assests/chevron-right.svg'

const NotesPages = () => {

    let [notes, setNote] = useState([])

    useEffect(()=>{
        getNotes()
    },[])

    let getNotes = async ()=>{
        let response = await fetch ('http://localhost:5000/')
        let data = await response.json()
        console.log(data)
        setNote(data)
    }
    
    return (
        <Link to="/note/" className="floating-button">
            <AddIcon />
        </Link>
    )
}

export default NotesPages