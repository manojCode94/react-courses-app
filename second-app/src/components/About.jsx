import React, { useEffect } from 'react'

const About = () => {

    useEffect(()=> {
        document.title = 'About || Learn coding'
    }, [])

    return(
        <div>
            <p>About us page...</p>
        </div>
    )

}

export default About