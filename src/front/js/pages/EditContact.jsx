import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";


export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const currentContact = store.currentContact;
  const [ name, setName ]  = useState(currentContact.name);
  const [ phone, setPhone ]  = useState(currentContact.phone);
  const [ email, setEmail ]  = useState(currentContact.email);
  const [ address, setAddress ]  = useState(currentContact.address);
  const navigate = useNavigate()

  const handleName = (event) => setName(event.target.value);
  const handlePhone = (event) => setPhone(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleAddress = (event) => setAddress(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSend = {
      name, phone, email, address
    }
    actions.editContact(currentContact.id , dataToSend)
    navigate('/contact')
  }

  return (
    <div className="container vh-100 w-50 text-secondary">
      <h1 className="text-light pt-4">Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName"
            value={name} onChange={handleName}/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPhone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="inputPhone"
            value={phone} onChange={handlePhone}/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail"
            value={email} onChange={handleEmail}/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress"
            value={address} onChange={handleAddress}/>
        </div>
        <span className="d-flex justify-content-end">

        <button type="submit" className="btn btn-warning">Save</button>
        </span>
      </form>
    </div>
  )
}