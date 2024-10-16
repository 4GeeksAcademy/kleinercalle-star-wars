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

      return (
        <div className="container mt-4 vh-100">
          <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="">Contactos</h1>

            <button onClick={handleAddContact} className="btn btn-secondary d-flex justify-content-end">Add Contact</button>
          </div>
            <ul className="list-group">
                {store.contacts.map((item) =>
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center contact-card">
                        <div className="d-flex align-items-center">
                            <img src="https://starwars.chocobar.net/star-wars-soldier.jpeg" 
                                 alt="profile" 
                                 className="img-fluid" 
                                 style={{ width: "100px", height: "100px", borderRadius: "20%" }}
                            />
                            <div className="ms-3">
                                <h5 className="mb-1">{item.name}</h5>
                                <p className="mb-1"><i className="fas fa-location-dot text-secondary me-2"></i>{item.address}</p>
                                <p className="mb-1"><i className="fas fa-phone text-secondary me-2"></i>{item.phone}</p>
                                <p className="mb-1"><i className="fas fa-envelope text-secondary me-2"></i>{item.email}</p>
                            </div>
                        </div>
                        <div>
                            <span className="btn btn-outline-secondary me-5" onClick={() => handleEdit(item)}>
                                <i className="fas fa-pencil-alt mx-1  "></i>
                            </span>
                            <span className="btn btn-outline-danger" onClick={() => handleDelete(item.id)}>
                                <i className="fas fa-trash-alt mx-1 t"></i>
                            </span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};