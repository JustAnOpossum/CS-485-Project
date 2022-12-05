import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: #8c0b42;
position: fixed;
bottom: -200%;
margin-left: -10%;
width: 100%;



`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	height: 40%;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 30px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: grey;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 20px;
font-weight: bold;
`;
