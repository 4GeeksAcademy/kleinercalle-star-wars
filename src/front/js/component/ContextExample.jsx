import React, { useContext } from "react";
import { Context } from '../store/appContext.js';


     export const ContextExample = () => {

     const { store, actions } = useContext(Context);

     const handleOnClick = () => {

     }

     return (
        <div className="conteiner border">
           
        </div>
      )
     }