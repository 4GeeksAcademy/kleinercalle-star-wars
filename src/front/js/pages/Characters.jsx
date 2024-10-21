import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const Characters = () => {
  const { store, actions } = useContext(Context);

  const handleError = (event) => {
    event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
  }

  const handleFavorite = (element) => {
    const newFavorite = {
      name: element.name,
      type: 'character'
    }
    actions.addFavorites(newFavorite);

  }

  return (
    <div className="container my-3 bg-dark">
      <h1 className="text-center text-light">Characters</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2">
        {store.characters.map((item) =>
          <div key={item.uid} className="col">
            <div className="card">
              <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."
                onError={handleError} />
              {/* <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..." 
                onError={handleError}/> */}
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="d-flex justify-content-between">
                  <Link to={`/character/${item.uid}`} className="btn btn-secondary  btn-item">Detalles</Link>
                  <span className="btn btn-outline-warning" onClick={() => handleFavorite(item)}>
                    <i className=" fa-regular fa-heart fa-2x text-warning"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}