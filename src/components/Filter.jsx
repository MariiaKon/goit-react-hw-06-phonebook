import { Label, Input, FilterForm } from './App.styled';
import { useDispatch } from 'react-redux';
import { filter } from '../redux/contactReducer';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterForm action="">
      <Label>
        Find contacts by name
        <Input
          type="text"
          onChange={e => {
            dispatch(filter(e.target.value));
          }}
        />
      </Label>
    </FilterForm>
  );
}
