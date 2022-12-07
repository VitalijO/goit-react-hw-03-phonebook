import React from "react";
import css from "./Contact.module.css"

export const Contact = ({  item :{id, name, number }, onDelete} ) => {
    return (
        <>  
            <p> {name} </p>
            <p> {number} </p>
            <button type="button" className={css.button} onClick={()=> onDelete(id)}>delete</button>
    </>
    )
      }