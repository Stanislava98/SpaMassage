import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material';
import FormControl from '@mui/material/FormControl';

const oils = ['Апельсиновое', 'Масло ши', 'Сандаловое', 'Иланг-иланг', 'Кокосовое'];

const StyledSelect = styled(Select)({
  '.MuiSvgIcon-root': {
    color: 'white',
  },
  '&.MuiInputBase-root': {
    color: 'white',
    fontFamily: '"Raleway"',
  },
  '.MuiPopover-root.MuiMenu-root': {
    zIndex: 1350,
  },
});

const SelectOils = ({ details }) => {
  const [oilName, setOilName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    details.selectedOils = value.join(', ');
    setOilName(typeof value === 'string' ? value.split(',') : value);
  };


  return (
    <div>
      <FormControl
        sx={{
          width: 300,
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#dc5b13',
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#dc5b13',
          },
          '& .MuiOutlinedInput-notchedOutline': { borderColor: '#E2702F' },
        }}
      >
        <InputLabel
          htmlFor="grouped-native-select"
          style={{
            color: 'white',
            fontFamily: '"Raleway"',
          }}
        >
          Выбрать масла
        </InputLabel>
        <StyledSelect
          id="grouped-native-select"
          multiple
          value={oilName}
          onChange={handleChange}
          input={<OutlinedInput label="Выбрать масла" style={{ borderRadius: '0' }} />}
          renderValue={(selected) => selected.join(',')}
        >
          {oils.map((oil) => (
            <MenuItem key={oil} value={oil}>
              <Checkbox style={{ color: '#E2702F' }} checked={oilName.indexOf(oil) > -1} />
              <ListItemText primary={oil} />
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </div>
  );
};

export default SelectOils;
