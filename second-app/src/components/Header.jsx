import React from 'react'
import { Card, CardBody } from 'reactstrap'


const Header = ({ name, title }) => {
    return (
        <Card className='mb-3 bg-warning'>
            <CardBody>
                <h1 className='text-center my-2'>Welcome to the course</h1>

            </CardBody>
        </Card>
    )
}

export default Header