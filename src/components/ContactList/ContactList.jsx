import React from 'react';
import { ListOfContacts } from './ContactList.styled';
import Contact from '../Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/contactsSlice';

const ContactList = () => {
  const stateContacts = useSelector(getContacts);
  const stateFilterValue = useSelector(getFilter);

  const showFilteredContacts = () => {
    return stateContacts.filter(contact =>
      contact.name.toLowerCase().includes(stateFilterValue.toLowerCase())
    );
  };

  const filteredContacts = showFilteredContacts();

  return (
    <ListOfContacts>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} id={id} />
      ))}
    </ListOfContacts>
  );
};

export default ContactList;

// import PropTypes from 'prop-types';

// const ContactListItem = ({ id, name, number, onRemove }) => {
//   return (
//     <li>
//       {name}: {number} <button onClick={() => onRemove(id)}> Delete</button>
//     </li>
//   );
// };

// export function ContactList({ contacts, onRemove }) {
//   if (contacts.lenght === 0) return null;
//   return (
//     <ul>
//       {contacts.map(({ id, name, number }) => (
//         <ContactListItem
//           key={id}
//           id={id}
//           name={name}
//           number={number}
//           onRemove={onRemove}
//         />
//       ))}
//     </ul>
//   );
// }

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ),
//   onRemove: PropTypes.func.isRequired,
// };
