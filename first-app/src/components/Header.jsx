import React from 'react'

const Header = ({name, title})=> {
    const headerStyle = {
        background:'blue',
        padding:'20px',
        margin:'10px'
      }
    return (
        <div style={headerStyle}>
            <span>{title}</span>
            <h1>My name is {name}</h1>
        </div>
    ) 
}

export default Header