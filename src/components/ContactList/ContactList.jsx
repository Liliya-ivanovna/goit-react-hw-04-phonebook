
import PropTypes from 'prop-types';
import {ContactItem} from './ContactItem';
import {Ul} from './ContactList.styled';

export const ContactList = ({ contacts,deleteContact }) => {
  return (
    <Ul>
      {contacts
        .map(contact => {
          const { id } = contact;
          return (
            <ContactItem
              key={id}
              contact={contact}
              deleteContact={deleteContact}
              />
          );
        })}
    </Ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact:PropTypes.func.isRequired,
};