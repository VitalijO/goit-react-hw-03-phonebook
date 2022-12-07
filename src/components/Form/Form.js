import css from "./Form.module.css"
  import PropTypes from 'prop-types';


export const ContactForm = ({ onSubmit}) => {
const hendleSubmit = (event) => {
  event.preventDefault();
   const { name, number} =event.target.elements
        onSubmit(
          name.value,
          number.value,
          name.value="",
          number.value=""
  )       
  }
    return (
        <form className={css.form} onSubmit={hendleSubmit} > 
      <label> Name</label>
    <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required />
<label> Phone</label>
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
<button type ="submit"> Add contacts</button>
        </form>
    )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};