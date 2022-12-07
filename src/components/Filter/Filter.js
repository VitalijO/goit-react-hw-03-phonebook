import PropTypes from 'prop-types';

export const Filter = ({ onFindContact, filter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
<input type="text"search={filter} onChange={onFindContact} 
   name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required />
 </>
  );
};

Filter.propTypes = {
  onFindContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};