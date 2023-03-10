import PropTypes from 'prop-types';
import { FilterInput } from './ContactFilter.styled';

export const ContactFilter = ({ onFilter, value }) => {
  return (
      <FilterInput
        id="filter"
        type="text"
        value={value}
        onChange={onFilter}
        name="filter"
        placeholder="Search contacts"
      />
  );
};

ContactFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
