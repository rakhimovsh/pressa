import React, { useState } from 'react';
import './styles.scss';
import { DesktopDatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { Autocomplete, Button, ButtonGroup, Stack, TextareaAutosize, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { category } from '../../lib/categories';
import dayjs from 'dayjs';
import { addPost } from '../../redux/actions/posts';
import { useDispatch, useSelector } from 'react-redux';


function  Index() {
  const [date, setDate] = React.useState(new Date(Date.now()));
  const [categoryValue, setCategoryValue] = React.useState(category[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [clickedBtn, setClickedBtn] = React.useState('online');
  const [linkValue, setLinkValue] = useState('')
  const [name, setName] = useState('')
  const [profession, setProfession] = useState('')
  const [tel, setTel] = useState('')
  const [tel2, setTel2] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [fullDesc, setFullDesc] = useState('')
  const [file, setFile] = useState()
  const dispatch = useDispatch()
  const {addedPost} = useSelector(state => state.posts)


  const handleChangeDate = (newValue) => {
    setDate(newValue);
  };

  const handleClick = ()=>{
      dispatch(addPost(name, profession, tel, tel2, dayjs(date).format('YYYY-MM-DD HH:mm:ss'), categoryValue.label, clickedBtn, linkValue, title, desc, fullDesc, file))
  }
  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <h2>E’lon berish</h2>
      <div className="add-post">
        <h3>Vaqt va yo’nalishni tanlang</h3>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <h4>O’tkaziladigan sanani kiriting</h4>
          <Stack style={{ flexDirection: 'revert', gap: '40px' }}>
            <DesktopDatePicker
              label=""
              inputFormat="dd/MM/yyyy"
              value={date}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label=""
              value={date}
              onChange={handleChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        <div>
          <h4>Yo’nalishni belgilang</h4>
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
        </div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <div>
            <h4>Tadbir turi</h4>
            <ButtonGroup aria-label="outlined primary button group">
              <Button variant={clickedBtn === 'online' ? 'contained' : 'outlined'}
                      onClick={() => setClickedBtn('online')}>Online</Button>
              <Button variant={clickedBtn === 'offline' ? 'contained' : 'outlined'}
                      onClick={() => setClickedBtn('offline')}>Offline</Button>
            </ButtonGroup>
          </div>
          <div>
            <h4>Link kiriting</h4>
            <TextField id="outlined-basic" label="" variant="outlined" onChange={(evt)=> setLinkValue(evt.target.value)}/>
          </div>
        </div>
      </div>
      <div className="add-post">
        <h3>Tashkilotchi</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <TextField id="outlined-basic" label="Ismi sharifi" variant="outlined" onChange={(evt)=> setName(evt.target.value)}/>
          <TextField id="outlined-basic" label="Professiya" variant="outlined"  onChange={(evt)=> setProfession(evt.target.value)}/>
          <TextField id="outlined-basic" type="number" label="Telefon raqami" variant="outlined" onChange={(evt)=> setTel(evt.target.value)}/>
          <TextField id="outlined-basic" type="number" label="Qo’shimcha tel raqam" variant="outlined" onChange={evt=> setTel2(evt.target.value)}/>
        </div>
      </div>
      <div className="add-post" style={{ marginBottom: '150px' }}>
        <h3>Post</h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
          marginBottom: '30px',
          alignItems: 'flex-start',
        }}>
          <TextField id="outlined-basic" label="Mavzuni sarlavhasi" variant="outlined" style={{ width: '100%' }} onChange={evt=> setTitle(evt.target.value)}/>
          <TextField id="outlined-basic" label="Description" variant="outlined" style={{ width: '100%' }} onChange={evt=> setDesc(evt.target.value)}/>
          <label htmlFor="file-upload" className="upload-image">Upload img</label>
          <input type="file" placeholder="choose file" accept="image/*" id="file-upload"
                 onChange={evt => setFile(evt.target.files[0])} />
          <p>Yuklanyotgan rasm o’lchami 1080x1080 hajmi 2 mb dan oshmasin</p>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Mavzu matni"
            style={{ width: '100%', height: '200px' }}
            onChange={evt => setFullDesc(evt.target.value)}
          />
        </div>
        <Button variant="outlined" style={{ marginRight: '30px' }}>Bekor qilish</Button>
        <Button variant="contained" onClick={handleClick}>E’lonni yuborish</Button>
      </div>
    </div>
  );
}

export default Index;