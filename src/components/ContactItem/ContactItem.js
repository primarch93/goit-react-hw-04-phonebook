import PropTypes from 'prop-types';
import {
  TableRow,
  NameCeil,
  NumberCeil,
  ActionCeil,
  Button,
} from './ContactItem.styled';

export const ContactItem = ({ contacts, onDelete, }) => {
  return contacts.map(contact => {
    return (
      <TableRow key={contact.id}>
        <NameCeil>
          {contact.name}
        </NameCeil>
        <NumberCeil>{contact.number}</NumberCeil>
        <ActionCeil>
          <Button
            type="button"
            onClick={() => {
              onDelete(contact.id);
            }}
          >Delete
          </Button>
        </ActionCeil>
      </TableRow>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
