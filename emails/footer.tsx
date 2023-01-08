import React from 'react';
import { Section } from '@react-email/section';
import { Column } from '@react-email/column';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Container } from '@react-email/container';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import logo from "./assets/logo.png"

export type formProps = {
  name: string;
  position: string;
  phoneNumber:string;
  email:string;
}


const Footer: React.FC<formProps > = ({ name, position, phoneNumber, email}): JSX.Element => {
  return (
        <Container style={mainContainer}>
            <Section style={mainSection} align="left">
                  <Img src={logo}/>
                  <Container style={rightColumn}>
                      <Text style={nameStyle}>{name}</Text>
                      <Text style={positionStyle}>{position}</Text>
                      <Text style={phoneNumberStyle}>{phoneNumber} <Link href="https://example.com"> {email} </Link></Text>
                      <Container>
                      <Text>Samorząd </Text>
                      <Text>adres <br/></Text>
                      <Text>tel. <Link href="https://example.com">inny mail</Link>
                      </Text>
                      </Container>
                  </Container>
            </Section>
            <Container style={fixed}>
          <Text style={bottomContentStyle}> Treść tej wiadomości ...<br/>This email contains...</Text>
        </Container>
        </Container>
  );
};

const mainContainer = {
    width:600,
    height:350,
    backgroundColor: '#ffffff',
    border:"solid 1px black",
    //Jest ustawiony jakiś dziwny maxwidth. JaK dla mnie lepiej to usunąć
    maxWidth: "100vw",
}
const mainSection = {
    marginLeft:30,
    width:500,
    height:200,
    display:"flex"
  };
  //grid-auto-columns:minmax(0, 1fr)przesuwa kolumny w prawo nie wiem jak to usunąć, bo nie da się tego zmienić tutaj w stylach 
const columnStyle = {
    color:"#000000",
    padding:10,
    justifyContent:"start",
    alignItems:"start",
    width:250,
    height:200,
}

const fixed = {
  position:"fixed",
  top:250,
  left:30,
}

const rightColumn = {
  marginLeft:20,
}
const nameStyle = {
  color:"#000000",
  fontSize:20,
}

const positionStyle = {
  color:"#000000",
  fontSize:20,
}

const phoneNumberStyle = {
  color:"#000000",
  fontSize:20,
}

const bottomContentStyle = {
  color:"#000000",
  fontSize:20,
}

export default Footer;