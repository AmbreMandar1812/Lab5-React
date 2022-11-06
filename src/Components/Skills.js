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

const Skills = () => {
  return (
    <Wrapper>
      <Card style={{ width: '30rem',height: '40rem' }}>
      <Card.Img variant="top" src="https://i.ibb.co/Z6PjVgN/skills.jpg" style={{width:'100%'}}/>
      <Card.Body>
        <Card.Title style={{color:'white'}}>Skills</Card.Title>
        <Card.Text style={{color:'white'}}>
          Hello Folks, Here are the details of the skills I have.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{backgroundColor:'teal',color:'whitesmoke'}}>Java, CP In JAVA(more than 30 problems on LeetCode and HackerRank)</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'teal',color:'whitesmoke'}}>HTML,CSS,JAVASCRIPT</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:'teal',color:'whitesmoke'}}>Python,Analytical Skills</ListGroup.Item>
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

export default Skills