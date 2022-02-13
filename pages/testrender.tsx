import React, { useState } from 'react'
import TestFormOne from '../components/TestFormOne'

export default function testrender() {
    const [show, setShow] = useState(false)
    console.log(show);

    return (
        <>
            {show ? <>
                <TestFormOne setShow={setShow} />
                <div>show</div>
            </> : <>

                <TestFormOne setShow={setShow} />
                <div>hidden</div>
            </>}
        </>
    )
}
