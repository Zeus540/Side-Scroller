import React, {Component} from 'react';
import styled from 'styled-components';
import Left from '../images/left.png'

const Container = styled.div`
  background:#323a3a;

  position:relative;
  display: flex;

  @media  (min-width: 426px) and (max-width: 768px) {

  }
  @media  (min-width: 769px) and (max-width: 2560px) {
    min-width:100vw;
`

const LeftContainer = styled.div`
background: url(${Left});  
background-size:100% 100%;
height:100vh;
  display: flex;
  flex-direction: column;
  float:left;
  font-family:arial
  min-width: 35vw;
 
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width: 114vw;
  }
  @media  (min-width: 426px) and (max-width: 480px) {
    min-width: 55vw;
  }
 
  @media  (min-width: 480px) and (max-width: 768px) {
    width: 100vw;
  }
`


const RightContainer = styled.div`
  min-width: 60vw;
  height: 100vh;
  float:right;
  @media  (min-width: 1px) and (max-width: 425px) {
    min-width:200vw;
  }
`

const Img = styled.img`
  width:100%;
  height:100%;
  border:none;
`   

const TextContainer =styled.div`
width: 70%;
overflow-y: auto;

@media  (min-width: 1px) and (max-width: 425px) {
  width: 77vw;
  position: relative;
  top: 0vw;
  left: 0vw;
 
  
}
`

const Text = styled.p`
  color:${props=> props.Tcolor};
  padding:2vw 2vw 2vw 2vw;
  text-align:justify;
 
  @media  (min-width: 1px) and (max-width: 425px) {
    padding: 6vw 1vw 5vw 8vw;
    font-size: 4.5vw;
    position: relative;
    width: unset;
    text-align:left;
  }
  @media  (min-width: 426px) and (max-width: 768px) {
    padding:4vw 4vw 4vw 4vw;
 
  }
`

const Floating = styled.div`
color:white;
top: 4.5vw;
left: 20vw;
white-space:nowrap;
font-family:arial;
font-weight:bold;
z-index:10;
@media (max-width: 425px){
  font-size:20vw;
  letter-spacing: 1vw;
  top: 21vw;
  left: 94vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  top:10vw;
  left: 40vw;
}

`

const Text1 = styled.h1`
color:${props=> props.T1};
font-size:6vw;
margin-top: 5vw;
margin-bottom: 0;
margin-left: 0vw;
white-space: nowrap;
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 25vw;
  margin: 15vw;
  margin-bottom: 0;
  margin-top: 30vw;
  margin-left: 0vw;
}
@media  (min-width: 426px) and (max-width: 768px) {
  font-size:10vw;

}
`

const Text2 = styled.h1`
margin:0px;
position:absolute;
color:${props=> props.T2};
font-size:6vw;
right: 7vw;
bottom: 4vw
margin: 15vw;
margin-bottom: 0;

white-space: nowrap;
@media  (min-width: 1px) and (max-width: 425px) {
  font-size: 22vw;
  margin: 15vw;
  margin-bottom: 0;
  bottom: 4vw;

}
@media  (min-width: 426px) and (max-width: 768px) {
  font-size:10vw;
  bottom: 3vw
  
}
`

class Parallax2 extends Component {

render() {


    return (
      <Container color={this.props.color} >

        <Floating>
         
          <Text2 T2={this.props.T2} className="text-pop-up-tr">{this.props.text2}</Text2>
        </Floating>

        <LeftContainer >
        <Text1 T1={this.props.T1} className="text-pop-up-tr">{this.props.text1}</Text1>

          <TextContainer>
         
          <Text Tcolor={this.props.Tcolor} >{this.props.paragraph1}</Text>
          </TextContainer>

        </LeftContainer>

        <RightContainer>
          <Img src={this.props.img1} alt=""/>
        </RightContainer>

      </Container>
  );
  }
}

export default Parallax2;
