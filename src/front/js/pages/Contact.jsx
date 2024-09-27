import React from "react";


export const Contact = () => {
    return (
        <div className="container bg-dark mb-3">

            <div className="navbar navbar-dark bg-dark ">
                <h1 className="text-light pt-4">Contacts</h1>
                <button className="btn btn-secondary">Add Contact</button>


                <div className=" container card mb-3 d-flex justify-content-between">
                    <div className="row g-0 bg-secondary bg-opacity-10">
                        <div className="col-md-3 p-2 position-relative">
                        </div>
                        <div className="">
                           <img src="" alt="" />
                        </div>
                        <div className="d-flex col-md-7 p-2 position-relative text-start">
                            <div className="card-body">
                                <h5 className="card-title">Kleiner garcia      </h5>
                                <p className="card-text">
                                    madison street <br/>283754587 <br /> kleinerg@gmail.com</p>
                            
                            </div>
                        </div>
                    </div>
                </div>



                <div className="  card mb-3 d-flex justify-content-between">
                    <div className="row g-0 bg-secondary bg-opacity-10">
                        <div className="col-md-3 p-2 position-relative">
                        </div>
                        <div className="d-none d-md-block position-absolute top-50 start-50 translate-middle">
                            <img src="" alt="" />
                        </div>
                        <div className="d-flex col-md-7 p-2 position-relative text-start">
                            <div className="card-body">
                                <h5 className="card-title">Kleiner garcia      </h5>
                                <p className="card-text">
                                    madison street <br/>283754587 <br /> kleinerg@gmail.com</p>
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </div>


    )
}