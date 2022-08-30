import React,{useEffect} from 'react'
import { Card, CardImg, CardText, CardTitle, CardImgOverlay, Button } from 'reactstrap'



const Home = () => {

  useEffect(()=> {
    document.title = 'Home || Learn coding'
  }, [])
  
    return (
        <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="#"
            style={{
              height: 270
            }}
            width="100%"
          />
          <CardImgOverlay className='text-center'>
            <CardTitle tag="h5">
              <h2 className='text-muted'>Welcome to Course Application</h2>
            </CardTitle>
            <CardText className='text-muted'>
              This is a demo course application using springboot and react js fro beginners level!
            </CardText>
            <CardText>
              <small className="text-muted">
                Made with full support !
              </small>
            </CardText>
            <Button color='primary' outline>Start Using</Button>
          </CardImgOverlay>
        </Card>
      </div>
    )
}

export default Home