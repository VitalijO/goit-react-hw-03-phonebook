import React from "react";
import css from "./Contact.module.css"
import PropTypes from 'prop-types';

export const Contact = ({  item :{id, name, number }, onDelete} ) => {
    return (
        <>  
            <p> {name} </p>
            <p> {number} </p>
            <button type="button" className={css.button} onClick={()=> onDelete(id)}>delete</button>
    </>
    )
}
      




Contact.propTypes = {
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.shape({
     id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  }).isRequired,
};

