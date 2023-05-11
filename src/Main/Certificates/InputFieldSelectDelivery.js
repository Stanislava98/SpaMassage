import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const InputFieldSelectDelivery = () => {
  return (
    <>
      <Box sx={{ minWidth: 120, marginTop: '34px' }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Тип доставки
          </InputLabel>
          <NativeSelect
          >
            <option>Доставка курьером</option>
            <option>Получить в салоне</option>
            <option>Элетронный сертификат</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </>
  );
};

export default InputFieldSelectDelivery;
