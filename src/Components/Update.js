import React from "react"
import axios from "axios"
import { useState } from "react"
import { Button, Row, Col, Form, Modal } from "react-bootstrap"
import {API_URL} from "../URL"
import { useNavigate } from "react-router-dom"
import './Add.css'
const AddUser = () => {
  const [image_url, setimage_url] = useState("")
  const [first_name, setfirst_name] = useState("")
  const [last_name, setlast_name] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const [is_verified, setis_verified] = useState("")
  const [showModal, setShow] = useState(true)
  
  // const handleShow () => {
  //   setShow(true);
  // };
  const Navigate = useNavigate()
  const handleClose = async () => {
    try {

        var bodyData = {
            query: `query GetAllProfiles($orderBy: globalOrderBy, $searchString: String, $rows: Int, $page: Int) {
            getAllProfiles(orderBy: $orderBy, searchString: $searchString, rows: $rows, page: $page) {
              size
              profiles {
                id
                first_name
                last_name
                email
                is_verified
                image_url
                description
              }
            }
          }`,
            variables: {"orderBy":{"key":"is_verified","sort":"desc"},"rows":10,"page":0,"searchString":""}
          };

      const res = await axios.post(API_URL,{
        first_name,
        last_name,
        email,
        is_verified,
        image_url,
        description,
      })
      console.log("Correct Header Status:", bodyData, res.data.data.getAllProfiles.profiles)
    } catch (error) {
      console.log(error)
    }
    Navigate('cards')
  }
  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Profile</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <div className="add-addform">
              <div>
                  <div className="addform">
                    <label id="lastname" >url</label>
                    <input 
                    id="urlname"
                      type="text"
                      value={image_url}
                      onChange={(e) => setimage_url(e.target.value)}
                    /></div>
                </div>
                
                  <div className="addform">
                    <label id="fname">First Name {first_name}</label>
                    <input

                            id="fname"
                      type="text"
                      value={first_name}
                      onChange={(e) => setfirst_name(e.target.value)}
                    />
                 </div>
                 <div>
                  <div className="addform">
                    <label id="lastname" >Last Name</label>
                    <input 
                    id="lastname"
                      type="text"
                      value={last_name}
                      onChange={(e) => setlast_name(e.target.value)}
                    /></div>
                </div>
                <div className="addform">
                    
                    <label>Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                    />
                  </div><div className="addform">
                    <label>Description</label>
                    <textarea
                      as="textarea"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="write a description for a talent"
                      
                    /></div>
                  
                  <div
                    style={{ backgroundColor: "#e3e3e3" }}
                    className="form-check form-switch d-flex  p-1 justify-content-end"
                  >
                    <label className="verify"> Talent is Verified</label>
                   
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      onChange={setis_verified(!is_verified)}
                    ></input>
                  
          </div>
              </div>
            </Modal.Body>   

            <Modal.Footer>
              <Button type="button" variant="primary" onClick={handleClose}>
                Create
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
};
export default AddUser;
