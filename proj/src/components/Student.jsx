import React from 'react'

function Student({name,course,age}) {
    return (
        <div>
            <h2>Name is {name}</h2>
            <p>Course is {course}</p>
            <p>Age is {age}</p>
        </div>
    )
}

export default Student


