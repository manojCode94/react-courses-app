import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Home from './components/Home';
import Course from './components/Course';
import About from './components/About'
import Contact from './components/Contact'

import { Card, CardImg, CardImgOverlay, CardTitle, CardText, Button, Container, Row, Col } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Menu from './components/Menu';

import {Routes, Route, Link } from 'react-router-dom';

function App() {

  const btnHandleNotify = () => {
    toast.success('Signing in you!', {
      position: 'bottom-center'
    })
  }

  return (
    <div>

      <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={3}><Menu /></Col>
          <Col md={9}>
            <Routes>
              <Route path='/' element ={<Home />} exact />
              <Route path='/add-course' element={<AddCourse />} exact />
              <Route path='/view-courses' element={<AllCourses />} exact />
              <Route path='/about' element={<About />} exact />
              <Route path='/contact' element={<Contact />} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default App;
