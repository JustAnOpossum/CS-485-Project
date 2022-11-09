import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

const DropdownBtn = (props) => {
    return (
        <DropdownButton variant="lostPage" id="dropdown-basic-button dropDownbtn" title={props.title} >
            {props.items.map(item => (
                <Dropdown.Item href={item.action}>{item.name}</Dropdown.Item>
            ))}
        </DropdownButton>
    )
}

const Cards = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.claimDesc}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Description: <b>{props.desc}</b></ListGroup.Item>
                        <ListGroup.Item>Building: <b>{props.building}</b></ListGroup.Item>
                        <ListGroup.Item>Date Found: <b>{props.dateFound}</b></ListGroup.Item>
                    </ListGroup>
                    <Button variant="success" onClick={handleShow}>
                        Claim this item
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export { DropdownBtn, Cards }