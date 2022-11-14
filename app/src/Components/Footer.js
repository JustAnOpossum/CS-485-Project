import zIndex from "@mui/material/styles/zIndex";
import { display } from "@mui/system";
import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box style={{
		"background-color": "#8c0b42",
		marginLeft: "-4.2%",
		display: "block",
		position: "absolute",
		marginBottom: "-20%",
		height: "50%"
	}}>
	<Container style={{

	}}>

		<h1 style={{ color: "white", 
                   textAlign: "center", 
				   paddingTop: "40px",
				   paddingBottom: "20px",
				   fontWeight: "bold"
                    }}>
        Need to get in touch?
      </h1>
	
		<Row style={{
			marginTop: "10px"
		}}>
		
			<Heading>Contact Us:</Heading>
			<FooterLink href="#"><b>Email:</b> lostandfound@nmsu.edu</FooterLink>
			<FooterLink href="#"><b>Phone:</b> 123-456-7890</FooterLink>
			<FooterLink href="#"><b>Address:</b> 123 Stewart Street</FooterLink>
		</Row>
		<Row style={{
			marginTop: "10px"
		}}>
			<Heading>Social Media:</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<b>Facebook:</b> @NMSULostAndFound
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				<b>Instagram:</b> @NMSULostAndFound
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				<b>Twitter:</b> @NMSULostAndFound
				</span>
			</i>
			</FooterLink>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
