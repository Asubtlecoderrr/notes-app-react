import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assests/add.svg'

const AddButton = () => {
    return (
        <Link to="/note/0" className="floating-button">
            <AddIcon />
        </Link>
    )
}

export default AddButton
