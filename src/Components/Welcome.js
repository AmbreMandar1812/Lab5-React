import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
   color:white;
   padding:20px;
   text-align:center;
`
const Button = styled.button`
      background-color:teal;
      color:white;
      font-size:25px;
      font-weight:bold;
      padding:20px;
      width:120px;
      heigth:20px;
      border-radius : 10px ;
`


const Desc =styled.div`
    font-size: 40px;
    top:20px;
    
`

export default class Welcome extends Component {
    constructor(){
        super()
        this.state = {
           message: "Welcome to Mandar's World"
        }
    }
    ChangeHandler(){
        let val = document.querySelector('#input')
        this.setState({
            message: `Welcome ${val.value}`
        })
    }
  render() {
    return (
    <>
     <Wrapper>
        <h1>Enter your Name:<input style ={{backgroundColor:'teal'}} placeholder='Example:Mandar' id='input'/></h1>
        <Button onClick={()=>this.ChangeHandler()}>Hello</Button>
      <Desc>{this.state.message}</Desc>
    </Wrapper> 
    </>
  )
  }
}
