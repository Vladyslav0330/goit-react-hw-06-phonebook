import { FilterLabel, FilterInput, FilterLabelName } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      <FilterLabelName>Find contacts by name</FilterLabelName>
      <FilterInput
        type="text"
        name="filter"
        onChange={e => {
          dispatch(addFilter(e.target.value));
        }}
      />
    </FilterLabel>
  );
};

export default Filter;

// import PropTypes from 'prop-types';

// export function Filter({ onChange }) {
//   return (
//     <label>
//       <p>Find contacts by name</p>
//       <input
//         type="text"
//         name="filter"
//         onChange={({ target }) => onChange(target.value)}
//       />
//     </label>
//   );
// }

// Filter.propTypes = {
//   onchange: PropTypes.array,
// };
