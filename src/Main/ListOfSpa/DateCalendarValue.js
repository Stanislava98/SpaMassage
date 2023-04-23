import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru'
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateCalendar} from '@mui/x-date-pickers/DateCalendar';
import {styled} from '@mui/material';


dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')

const StyledDateCalendar = styled(DateCalendar)({
  '.MuiPickersCalendarHeader-root': {
    backgroundColor: '#E2702F',
    paddingTop: '12px',
    paddingBottom: '12px',
    marginBottom: '0',
    '.MuiPickersArrowSwitcher-spacer': {
      width: '14px'
    },
  },
  '.MuiPickersCalendarHeader-labelContainer': {
    pointerEvents: 'none',
    textTransform: 'capitalize',
    fontSize: '16px',
    fontFamily: 'Raleway',

    '.MuiPickersFadeTransitionGroup-root': {
      backgroundColor: 'transparent',
    },

    '.MuiPickersCalendarHeader-switchViewButton': {
      display: 'none',
    },
  },
  '.MuiButtonBase-root-MuiIconButton-root-MuiPickersCalendarHeader-switchViewButton': {
    backgroundColor: '#131111',
  },
  '.MuiPickersFadeTransitionGroup-root': {
    color: 'white',
    backgroundColor: '#131111',
  },
  '.MuiPickersSlideTransition-root': {
    minHeight: '215px',
    marginTop: '8px'
  },
  span: {
    color: 'white',
    fontSize: '16px',
    fontFamily: 'Raleway',
  },
  button: {
    '&.MuiPickersYear-yearButton': {
      display: 'none',
    },
    color: 'white',
    fontSize: '16px',
    fontFamily: 'Raleway',
    fontFeatureSettings: '"lnum"',

    '.MuiSvgIcon-root': {
      height: '24px',
      width: '24px',
    },

    '&.MuiPickersDay-root.Mui-selected': {
      backgroundColor: '#E2702F',
      ':hover': {
        backgroundColor: '#dc5b13',
      },
    },
  },
});

const DateCalendarValue = () => {
  dayjs.locale('ru');

  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} locale="ru">
      <DemoContainer components={['DateCalendar']}>
        <StyledDateCalendar value={value} onChange={(newValue) => setValue(newValue)}/>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateCalendarValue;
