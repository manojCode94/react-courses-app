import React, { useEffect } from 'react'
import Course from './Course'

import { useState } from 'react'

import axios from 'axios'
import base_url from '../api/bootapi'
import { toast } from 'react-toastify'

const AllCourses = () => {

    //This is the state of the course added manually
    // const [courses, setCourses] = useState([
    //     { Id:1, title: 'Java course', description: 'this is java course' },
    //     { Id: 2, title: 'Demo course', description: 'this is demo course' },
    //     { Id: 3, title: 'Oracle DB course', description: 'this Oracle DB  course' },
    //     { d: 4, title: 'React Js course', description: 'this is React JS course' },
    // ])

    //this is the course getting from the server
    const [courses, setCourses] = useState([])

    //function to get all courses
    const getAllCourses = () => {
        axios.get(`${base_url}/courses`)
            .then(
                (response) => {
                    console.log({ response })
                    setCourses(response.data)
                    toast.success('Courses has been loaded!', {
                        position:'top-right'
                    })
                },
                (error) => {
                    console.log({ error })
                    toast.error('Something went wrong!', {
                        position:'top-right'
                    })
                }
            )
    }

    const refreshCoursesById = (courseId)=> {
        console.log('refresh the course')
        setCourses(courses.filter((c) => c.Id !== courseId))
    }

    useEffect(() => {
        document.title = 'All courses || Learn coding'
        getAllCourses()
    }, [])

    return (
        <div>
            <h1>All Courses</h1>
            <p>List of courses</p>
            {
                (courses.length > 0) ? courses.map((courseItem) => {
                    return <Course key={courseItem.Id} course={courseItem} updateCourse={refreshCoursesById} />
                }) : 'No courses!'
            }

        </div>
    )

}

export default AllCourses