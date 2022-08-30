import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <ListGroup>
                <Link className='list-group-item list-group-item action  text-muted' to="/">Home</Link>

                <Link className='list-group-item list-group-item action text-muted' to="/add-course">Add Course</Link>

                <Link className='list-group-item list-group-item action  text-muted' to="/view-courses">View Courses</Link>

                <Link className='list-group-item list-group-item action text-muted' to="/about">About us</Link>

                <Link className='list-group-item list-group-item action  text-muted' to='/contact'>Contact Us</Link>
            </ListGroup>
        </>
    )
}
export default Menu