import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Autocomplete, Button, Checkbox, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import io from 'socket.io-client';
import { category } from '../../lib/categories';
import dayjs from 'dayjs';

const socket = io.connect(process.env.REACT_APP_API);

const type = [
  {
    label: 'online',
  },
  {
    label: 'offline',
  },
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function Index() {
  const [date, setDate] = React.useState(new Date(Date.now()));
  const [categoryValue, setCategoryValue] = useState(category[0].label);
  const [inputValue, setInputValue] = useState('');
  const [typeValue, setTypeValue] = useState(0);


  useEffect(() => {
    socket.emit('post', {
      status: 'active',
      date: dayjs(date).format('YYYY-MM-DD HH:mm:ss'),
      category: 'salom',
      type: typeValue,
    });
  }, [date, categoryValue, typeValue]);

  const handleChange = (newValue) => {
    setDate(newValue);
  };
  return (
    <form className="search-form">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          border="none"
          style={{ border: 'none' }}
          label=""
          inputFormat="dd/MM/yyyy"
          value={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

      </LocalizationProvider>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        value={categoryValue}
        onChange={(event, newValue) => {
          setCategoryValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={category}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={type}
        sx={{ width: 300 }}
        onChange={evt => setTypeValue(evt.target.value)}
        renderInput={(params) => <TextField {...params} label="Online / Offline" />}
      />
      <Button variant="contained" style={{ height: '100%' }}>Izlash</Button>
    </form>
  );
}

export default Index;