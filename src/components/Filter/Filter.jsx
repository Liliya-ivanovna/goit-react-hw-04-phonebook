import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';

export const Filter = ({ filter, addFilter }) => {
  return (
    <>
      <Label>
        Find contacts by name{' '}
        <Input type="text" name="filter" value={filter} onChange={addFilter} />
      </Label>
    </>
  );
};

Filter.propTypes = {
  addFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
