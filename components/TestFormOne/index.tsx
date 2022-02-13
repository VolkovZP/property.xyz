import React, { useState } from 'react'

export default function TestFormOne({ setShow }: any) {
    const [state, setState] = useState('')

    const showTodo = async () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                setShow(true)
                console.log(json);

            })
    }

    return (
        <button onClick={showTodo}>
            click
        </button>
    )
}
