import React from "react";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";

export type formProps = {
  name: string;
  position: string;
  phoneNumber: string;
  email: string;
  imageSrc?:string;
};

const Footer: React.FC<formProps> = ({
  name,
  position,
  phoneNumber,
  email,
  imageSrc
}): JSX.Element => {
  return (
    <Container style={mainContainer}>
      <Section style={mainSection} align="left">
      <Container style={columnStyle}>
        <Img
          src="https://samorzad.p.lodz.pl/addons/shared_addons/themes/adonis/img/logo-brown.png"
          alt="logo"
          style={imageStyle}
        />
        {imageSrc && <Img
          src={imageSrc}
          alt="logo2"
          style={imageStyle}
        />
        }
        </Container>
        <Container style={columnStyle}>
          <Text style={nameStyle}>{name}</Text>
          <Text style={positionStyle}>{position}</Text>
          <Text style={phoneNumberStyle}>
            tel. {phoneNumber} | {" "}
            <Link href="https://example.com"> {email} </Link>
          </Text>
          <Container>
            <Text>Samorząd Studencki Politechniki Łódźkiej </Text>
            <Text>
              al. Politechniki 3a | 90-924 Łódź <br />
            </Text>
            <Text>
              tel. +48 42 631 28 41{" "}| {" "}
              <Link href="https://example.com">www.samorzad.p.lodz.pl</Link>
            </Text>
          </Container>
        </Container>
      </Section>
      <Container style={absoulute}>
        <Text style={bottomContentStyle}>
          {" "}
          Treść tej wiadomości zawiera informacje przeznaczone tylko dla
          adresata. Jeżeli nie jesteście Państwo jej adresatem, bądź
          otrzymaliście ją przez pomyłkę, prosimy o powiadomienie o tym nadawcy
          oraz trwałe jej usunięcie.
        </Text>
        <Text style={bottomContentStyle}>
          This email contains information intended solely for the use of the
          individual to whom it is addressed. If you are not the intended
          recipient or if you have received this message in error, please notify
          the sender and delete it from your system.
        </Text>
      </Container>
    </Container>
  );
};

const mainContainer = {
  width: 800,
  height: 450,
  backgroundColor: "#ffffff",
  border: "solid 1px black",
  maxWidth: "100vw",
  position: "relative",
} as const;

const mainSection = {
  marginLeft: 30,
  marginTop: 20,
  width: 700,
  height: 200,
  display: "flex",
} as const;

const imageStyle = {
  width: 250,
  paddingBottom:5,
} as const;

const absoulute = {
  position: "absolute",
  top: 250,
  left: 30,
  width: 800,
} as const;

const columnStyle = {
  marginLeft: 20,
} as const;

const nameStyle = {
  marginBlockStart: 0,
  color: "#000000",
  fontSize: 20,
} as const;

const positionStyle = {
  marginBlockStart: 0,
  color: "#000000",
  fontSize: 10,
} as const;

const phoneNumberStyle = {
  marginBlockStart: 0,
  color: "#000000",
  fontSize: 10,
} as const;

const bottomContentStyle = {
  color: "#000000",
  fontSize: 12,
  marginTop: 30,
  width: 750,
} as const;

export default Footer;
