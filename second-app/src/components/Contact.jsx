import react, { useEffect } from 'react'

const Contact = ()=> {

    useEffect(()=> {
        document.title = 'Contact us || Learn Coding'
    }, [])

    return (
        <p>Contact us page...</p>
    )
}

export default Contact