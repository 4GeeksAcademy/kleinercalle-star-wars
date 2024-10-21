import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
//import { Spinner } from "../component/Spinner.jsx";//


export const DetailsCharacters = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getCharacterDetails(params.uid)
  }, [])

  return (  

      
    <div className="container bg-dark">
      <div className="row g-0">
        <h1 className="d-flex text-light">{store.currentCharacter.name}</h1>
        
        <div className="col-md-2 col-lg-2 col-xl-5">
          <img
            className="img-fluid rounded-start"
            src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`}
            alt="Character Image"
            style={{ width: "75%" }} // Asegúrate de que la imagen ocupe el 100% de su columna
          />
        </div>
  
        <div className="col-md-4 col-lg-6 col-xl-3"> {/* Ajusta las columnas para que sumen 12 */}
          <div className="card-body">
            <ul className="list-unstyled text-light">
              <li className="mb-3"><strong>Height:</strong> {store.currentCharacter.height}</li>
              <li className="mb-3"><strong>Mass:</strong> {store.currentCharacter.mass}</li>
              <li className="mb-3"><strong>Hair color:</strong> {store.currentCharacter.hair_color}</li>
              <li className="mb-3"><strong>Skin color:</strong> {store.currentCharacter.skin_color}</li>
              <li className="mb-3"><strong>Eye color:</strong> {store.currentCharacter.eye_color}</li>
              <li className="mb-3"><strong>Birth year:</strong> {store.currentCharacter.birth_year}</li>
              <li><strong>Gender:</strong> {store.currentCharacter.gender}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) 
}