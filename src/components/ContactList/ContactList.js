import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import  { Table} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete, onFavorite, favourites }) => {
  return (
    <Table>
      <tbody>
        <ContactItem
          contacts={contacts}
          onDelete={onDelete}
        />
      </tbody>
    </Table>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
