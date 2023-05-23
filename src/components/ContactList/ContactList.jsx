import { useSelector, useDispatch } from 'react-redux';
// import { getContacts, getFilter } from 'redux/phonebook/phonebook-selectors';
// import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { remove } from 'redux/phonebook/phonebook-reducer';
function ContactList() {
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const onDelete = id => dispatch(remove(id));

  return (
    <>
      <ul>
        {contacts
          .filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map(contact => {
            return (
              <li className={s.item} key={contact.id}>
                {contact.name}: {contact.number}{' '}
                <button
                  className={s.button}
                  onClick={() => {
                    onDelete(contact.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

// ContactList.propTypes = {
//   appState: PropTypes.object.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
