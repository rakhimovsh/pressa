import React, { useState } from 'react';
import './styles.scss';
import { Button, Divider } from '@mui/material';
import dayjs from 'dayjs';
import { api } from '../../redux/api';

function Index({ title, username, tel, date, profession, id }) {
  const handleAcceptClick =  () => {
    api().put(`/post/${id}`).then(res=>{
      alert(res.data.message)
    })
  };
  const handleDeleteClick =  () => {
    api().delete(`/post/${id}`).then(res=>{
      alert(res.data.message)
    })
  };
  return (
    <>
      <li><Divider /></li>
      <li className="admin-body__item">
        <div className="task">
          <h3>{title}</h3>
          <ul className="task__list">
            <li className="task__item">{username}</li>
            <li>{tel}</li>
            <li>{dayjs(date).format('DD/MM/YYYY')}</li>
            <li>{dayjs(date).format('HH:mm')}</li>
            <li>{profession}</li>
          </ul>
        </div>
        <div className="task__btn">
          <Button variant="outlined" onClick={handleDeleteClick}>Bekor qilish</Button>
          <Button variant="contained" onClick={handleAcceptClick}>Tasdiqlash</Button>
        </div>

      </li>
    </>
  );
}

export default Index;