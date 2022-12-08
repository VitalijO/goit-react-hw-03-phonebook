import { Contact } from "../Contact/Contact"
import css from "./ContactList.module.css"
import PropTypes from 'prop-types';

export const ContactsList = ({items, onDelete}) => {
    return (
        <ul className={css.contactsList}>
        {items.map((item, idx) => (
        <li key={idx} className={css.contact}>
          <Contact item={item} onDelete={onDelete} />
            </li>
            ))}
    </ul>
    )
    
}

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};