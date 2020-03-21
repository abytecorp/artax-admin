import React from "react";
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardColumns,
	CardGroup,
	CardDeck,
	CardLink,
	CardHeader,
	CardFooter,
	Button,
	Row,
	Col
  } from 'reactstrap';

import users from '../../assets/images/big/users.png';
import invoice from '../../assets/images/big/fact.jpg';

class Dashboard extends React.Component {
	render() {
		return (
		<Row>
			<Col xs="12" md="4">
				<Card>
					<CardImg top width="100%" src={users} />
					<CardBody>
					<CardTitle>Manejo de usuarios</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
					<Button>Button</Button>
					</CardBody>
				</Card>
			</Col>
			<Col xs="12" md="4">
				<Card>
					<CardImg top width="100%" src={invoice} />
					<CardBody>
					<CardTitle>Facturación</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
					<Button>Button</Button>
					</CardBody>
				</Card>
			</Col>
		</Row>
		);
	}
}

export default Dashboard;