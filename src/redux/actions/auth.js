import { api } from '../api';
import { batch } from 'react-redux';
import { authSlice } from '../reducers/auth';
import history from '../../lib/history';


export const adminLogin = (username, password) => (dispatch) => {
  api().post('/admin', { username, password }).then(res => {
    if(res.data.token){
      batch(() => {
        dispatch(authSlice.actions.setLogin(true));
        dispatch(authSlice.actions.setUser(res.data));
      });
      localStorage.setItem('token', JSON.stringify(res.data.token))
      history.push('/admin')
    }
  }).catch(err => {
    alert(err?.response?.data.message)
    dispatch(authSlice.actions.setLogin(false));
    history.push('/')
  });
};