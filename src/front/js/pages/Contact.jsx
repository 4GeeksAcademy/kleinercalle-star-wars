import React, { useContext} from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";


export const Contact = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();

    const handleAddContact = () => {

        navigate ('/Add-Contact')
       
    }

    const handleEdit = (contact) => {
        console.log(contact)
        actions.setCurrentContact(contact)
         navigate('/Edit-Contact') 
     }

     const handleDelete = (id) => {
        actions.deleteContact(id)
      }

    return  (
        <div className="container">
          <button onClick={handleAddContact} className="btn btn-success mb-3 ">Add Contact</button>
          <ul className="list-group">
            {store.contacts.map((item) =>
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <div>
                    <span className="d-flex"> 
                    <h5>{item.name}</h5>
                    </span>
                    <span className="d-flex"> 
                    <i class="fa-solid fa-location-dot mx-1 text-secondary"></i>
                    <p>{item.address}</p>
                    </span>
                    <span className="d-flex"> 
                    <i class="fa-solid fa-phone mx-1 text-secondary"></i>
                    <p>{item.phone}</p>
                    </span>
                    <span className="d-flex"> 
                    <i class="fa-solid fa-envelope mx-1 text-secondary"></i>
                    <p>{item.email}</p>
                    </span>
                </div>
                <div>
                  <span onClick={() => handleEdit(item)}>
                    <i className="fas fa-pencil-alt  mx-1"></i>
                  </span>
                  <span onClick={() => handleDelete(item.id)}>
                    <i className="fas fa-trash-alt  mx-4"></i>
                  </span>
                </div>
              </li> 
            )}
          </ul>
        </div>
      )
    
}