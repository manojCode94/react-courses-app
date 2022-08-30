import React, { Fragment, useEffect, useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'
import base_url from '../api/bootapi'
import axios from 'axios'
import { toast } from 'react-toastify'

const AddCourse = () => {

    const[course, setCourse]= useState({})

    useEffect(() => {
        document.title = 'Add courses || Learn coding'
    }, [])

    //form handler
    const handleForm = (e)=> {
        const keylen = Object.keys(course).length
        const values = Object.values(course).length
        if(keylen === 0 && values === 0){
            toast.warning('Please Fill up the course detail!')
        }  else {
            postCourses(course)
        }
        e.preventDefault()
    }

    const postCourses = (data) => {
        axios.post(`${base_url}/courses`, data)
        .then(

            (response)=> {
                console.log({response})
                toast.success('Course added!', {
                    position:'bottom-center'
                })
                
            },
            (error)=> {
                console.log({error})
                toast.error('Someting wrong happend!', {
                    position:'bootom-center'
                })
            }
        )
    }

    return (
        <Fragment>
            <h1 className='text-center my-3'>Fill course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for='couseId'>
                        Course Id
                    </Label>
                    <Input
                        id='couseId'
                        disabled
                        name='couseId'
                        placeholder='Enter course Id'
                        type='text'
                        onChange={(e)=> {
                            setCourse({...course, id:e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='courseName'>
                        Course Name
                    </Label>
                    <Input
                        id='courseName'
                        name='courseName'
                        placeholder='Enter course name'
                        type='text'
                        onChange={(e)=> {
                            setCourse({...course, title:e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for='courseDesc'>
                        Course Description
                    </Label>
                    <Input
                        id='courseDesc'
                        name='courseDesc'
                        placeholder='Enter course desscription'
                        type='textarea'
                        onChange={(e)=> {
                            setCourse({...course, description:e.target.value})
                        }}
                    />
                </FormGroup>
                <Container className='text-center'>
                    <Button type='submit' color='success mx-2'>Add Course</Button>
                    <Button type='reset' onClick={()=> {
                        setCourse({})
                        console.log(course)
                    }} color='warning'>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse