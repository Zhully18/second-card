import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from './components/Image';
import price from './components/Price';
import description from './components/Description';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
const App = () => {
  return (
    <>
      <h2>Hello world</h2>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xr-1.jpg" />
      <Card.Body>
        <Name />
        <Card.Text>
        <Price />
        <Description />
        </Card.Text>
        <Button variant="primary" className=' product-button'>Buy</Button>
        <Button variant="primary" className= 'product-button'>Add to Cart</Button>
      </Card.Body>
    </Card>

    </>
    
  )
}

export default App