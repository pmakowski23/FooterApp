import React from 'react';
import { Section } from '@react-email/section';
import { Column } from '@react-email/column';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Container } from '@react-email/container';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import logo from "./assets/logo2.svg"

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
                  <Img src='https://samorzad.p.lodz.pl/addons/shared_addons/themes/adonis/img/logo-brown.png' alt="logo" style={imageStyle}/>
                  <Container style={rightColumn}>
                      <Text style={nameStyle}>{name}</Text>
                      <Text style={positionStyle}>{position}</Text>
                      <Text style={phoneNumberStyle}>{phoneNumber} <Link href="https://example.com"> {email} </Link></Text>
                      <Container>
                      <Text>Samorząd Studencki Politechniki Łódźkiej </Text>
                      <Text>al. Politechniki 3a | 90-924 Łódź <br/></Text>
                      <Text>tel. +48 42 631 28 41<Link href="https://example.com">www.samorzad.p.lodz.pl</Link>
                      </Text>
                      </Container>
                  </Container>
            </Section>
            <Container style={absoulute}>
          <Text style={bottomContentStyle}> Treść tej wiadomości zawiera informacje przeznaczone tylko dla adresata. Jeżeli nie jesteście Państwo jej adresatem, bądź otrzymaliście ją przez pomyłkę, prosimy o powiadomienie o tym nadawcy oraz trwałe jej usunięcie.</Text>
          <Text style={bottomContentStyle}>This email contains information intended solely for the use of the individual to whom it is addressed. If you are not the intended recipient or if you have received this message in error, please notify the sender and delete it from your system.</Text>
        </Container>
        </Container>
  );
};

const mainContainer = {
    width:800,
    height:450,
    backgroundColor: '#ffffff',
    border:"solid 1px black",
    //Jest ustawiony jakiś dziwny maxwidth. JaK dla mnie lepiej to usunąć
    maxWidth: "100vw",
    position:"relative"
}
const mainSection = {
    marginLeft:30,
    marginTop:20,
    width:700,
    height:200,
    display:"flex"
  };

const imageStyle = {
  width:300,
}

const absoulute = {
  position:"absolute",
  top:250,
  left:30,
  width:800,
}

const rightColumn = {
  marginLeft:20,
}
const nameStyle = {
  marginBlockStart:0,
  color:"#000000",
  fontSize:20,
}

const positionStyle = {
  marginBlockStart:0,
  color:"#000000",
  fontSize:10,
}

const phoneNumberStyle = {
  marginBlockStart:0,
  color:"#000000",
  fontSize:10,
}

const bottomContentStyle = {
  color:"#000000",
  fontSize:12,
  marginTop:30,
  width:750,
}

export default Footer;