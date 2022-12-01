import "./styles.css";
import { Footer } from '../Components';
import "./reportLostItems.css"
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'

const ReportLostItems = () => {
  //State for showing the modal
  const [show, setShow] = useState(false);
  //State for the desc. of the modal
  const [modalDesc, updateDesc] = useState('')

  //States for showing and hiding the modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Event handle for the form submit
  function handleSubmit(event) {
    //Prevents redirect
    event.preventDefault()
    //Vars for all the objects in the form
    let title = event.currentTarget.elements.postTitle.value
    let photo = event.currentTarget.elements.photo.files
    let desc = event.currentTarget.elements.itemDesc.value
    let location = event.currentTarget.elements.location.value
    let aggieID = event.currentTarget.elements.aggieID.value
    let dateLost = event.currentTarget.elements.dateLost.value
    let modalDescStr = ''
    //Changed if user did not enter a value
    let showUser = true

    //Goes though and checks each value to make sure it got entered
    if (title === '') {
      showUser = false
      modalDescStr += 'Title not entered, '
    }
    if (photo.length === 0) {
      showUser = false
      modalDescStr += 'Photo not selected, '
    }
    if (desc === '') {
      showUser = false
      modalDescStr += 'Desc. not entered, '
    }
    if (location === '') {
      showUser = false
      modalDescStr += 'Location not entered, '
    }
    if (aggieID === '') {
      showUser = false
      modalDescStr += 'Aggie ID not entered, '
    }
    if (dateLost === '') {
      showUser = false
      modalDescStr += 'Date lost not entered, '
    }
    //Called if user entered all the values successfully
    if (showUser) {
      modalDescStr = 'Form Submitted!'
    }
    //Updates state for modal desc. and shows modal
    updateDesc(modalDescStr)
    handleShow()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Lost Item Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalDesc}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='container'>
        <h3 className='heading'>Report Lost Items</h3>
        <div class="row">
          <form onSubmit={handleSubmit}>
            <div class="container main">
              <div class="row">
                <div class="col-sm">
                  <label>
                    <div class="number">1</div><h2 class="postTitle">Post Title:</h2>
                    <br></br>
                    <input id="postTitle" type="text" />
                  </label>
                </div>
                <div class="col-sm">
                  <label>
                    <div class="number">2</div><h2 class="postTitle">Upload Photo:</h2>
                    <br></br>
                    <input class="btn btn-primary" type="file" id="photo" />
                  </label>
                </div>
              </div>
            </div>
            <div class="container main">
              <div class="row">
                <div class="col-sm">
                  <label>
                    <div class="number">3</div><h2 class="postTitle">Enter Item Description:</h2>
                    <br></br>
                    <input type="text" id="itemDesc" />
                  </label>
                </div>
                <div class="col-sm">
                  <label>
                    <div class="number">4</div><h2 class="postTitle">Last Know Location:</h2>
                    <br></br>
                    <input type="text" id="location" />
                  </label>
                </div>
              </div>
              <div class="container main">
                <div class="row">
                  <div class="col-sm">
                    <label>
                      <div class="number">5</div><h2 class="postTitle">Aggie ID:</h2>
                      <br></br>
                      <input type="text" id="aggieID" />
                    </label>
                  </div>
                  <div class="col-sm">
                    <label>
                      <div class="number">6</div><h2 class="postTitle">Date Lost:</h2>
                      <br></br>
                      <input type="text" id="dateLost" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="main"><input class="btn btn-success" type="submit" value="Submit" /></div>
          </form>
        </div>
        <Footer />
      </div >
    </>
  );
}

export default ReportLostItems;
