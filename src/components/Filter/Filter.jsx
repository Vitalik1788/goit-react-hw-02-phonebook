import { FilterLabel, FilterInput } from "./Filter.styled";


const Filter = ({value, onChange}) => {
  return (
  <FilterLabel htmlFor="filter">
    Find contacts by name <FilterInput id="filter" type="text" value={value} onChange={onChange} />
  </FilterLabel>
  )    
}

export default Filter;