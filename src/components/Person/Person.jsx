import './Person.css'

//rafce
import React from 'react'
const Person = ({name, lastName, age})=> {
    return (
        <div className='person'>
        <p>Name:{name}</p>
        <p>Lastname:{lastName}</p>
        <p>Age:{age}</p>
        </div>
    )
}

export default Person