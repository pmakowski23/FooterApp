import React from 'react';
import { Section } from '@react-email/section';
import { Column } from '@react-email/column';
import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Container } from '@react-email/container';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';

const test:string = "\n test";
export default function Email(){
  return (
    <Html>
        <Container style={mainContainer}>
            <Section style={mainSection} align="left">
                  <Img src='/static/logo.png'/>
                  <Column style={columnStyle}>
                    <Section>
                      <Text style={textStyle}>Imię Nazwisko</Text>
                      <Text style={textStyle}>Stanowisko</Text>
                      <Text>nr. Telefon <Link href="https://example.com"> Link do poczty </Link></Text>
                      <Text>Samorząd <br/>
                        adres <br/>
                        tel. <Link href="https://example.com">inny mail</Link>
                      </Text>
                  </Section>
                </Column>
            </Section>
        </Container>
        <Container style={fixed}>
          <Text>Treść tej wiadomości ... <br/> This email contains...</Text>
        </Container>
    </Html>
  );
};

const mainContainer = {
    width:600,
    height:350,
    backgroundColor: '#ffffff',
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
const textStyle = {
    color:"#000000",
}
const fixed = {
  position:"fixed",
  top:220,
  left:30,
}