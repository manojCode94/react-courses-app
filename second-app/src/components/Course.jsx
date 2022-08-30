import React from 'react'

import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container } from 'reactstrap'

import axios from 'axios'
import base_url from '../api/bootapi' 

import {toast} from 'react-toastify'

const Course = ({course, updateCourse})=> {

    const deleteCourse = (course)=> {
        axios.delete(`${base_url}/courses/${course.id}`)
        .then(
            (response)=> {
                console.log(`course Id:  ${course.id} is deleted from the databse`)
                toast.success(`${course.title} has been deleted ...`)
                updateCourse(course.id)
            },
            (error)=> {
                console.log({error})
                toast.error(`Some error happend in deleting ${course.title}`)
            }
        )
    }

    return (
        <Card className='my-2'>
            <CardBody>
                <CardSubtitle className='font-weight-bold'>{ course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container>
                    <Button onClick={()=> {deleteCourse(course)}} color='danger'>Delete</Button>
                    <Button color='warning mx-3'>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course