import React from 'react'

function Student({name,course,age}) {
    return (
        <div>
            <h2>Name : {name}</h2>
            <p>Course : {course}</p>
            <p>Age : {age}</p>
        </div>
    )
}

export default Student


