import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Wrapper =styled.div`
      background-color:#181818;
      padding: 20px 20px;
      height:100%;
      display:flex;
      justify-content:center;
`

const Project = () => {
  return (
    <Wrapper>
      <Card style={{ width: '30rem',height: '40rem' }}>
      <Card.Img variant="top" src="https://i.ibb.co/Src2rvr/Project.jpg" style={{width:'100%'}}/>
      <Card.Body>
        <Card.Title style={{color:'white'}}>Projects</Card.Title>
        <Card.Text style={{color:'white'}}>
          Hello Folks, Here are the Guthub links to my project.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{backgroundColor:'teal',color:'whitesmoke'}}><a style={{textDecoration:'none',color:'white',backgroundColor:'teal'}} href="https://github.com/AmbreMandar1812/PasswordGenerator">PassWord Generator</a></ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'teal',color:'whitesmoke'}}><a style={{textDecoration:'none',color:'white',backgroundColor:'teal'}} href="https://github.com/AmbreMandar1812/PasswordGenerator">Budget Calculator</a></ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'teal',color:'whitesmoke'}}>I am working on a Online Shopping Website</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <p style={{color:'white'}}>Contact me at:</p>
        <Card.Link href="#">InstaGram</Card.Link>
        <Card.Link href="#">GitHub</Card.Link>
      </Card.Body>
    </Card> 
    </Wrapper>
  )
}

export default Project