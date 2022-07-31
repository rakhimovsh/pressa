import { api } from '../api';
import { postSlice } from '../reducers/posts';
import history from '../../lib/history';

export const addPost = (creatorName, creatorProfession, creatorTel, creatorTel2, conferenceDate, conferenceCategory, conferenceType, conferenceLink, postTitle, postDesc, postFullDescription, file) => (dispatch) => {
  const postFomDate = new FormData();
  postFomDate.append('creatorName', creatorName);
  postFomDate.append('creatorProfession', creatorProfession);
  postFomDate.append('creatorTel', creatorTel);
  postFomDate.append('creatorTel2', creatorTel2);
  postFomDate.append('conferenceDate', conferenceDate);
  postFomDate.append('conferenceCategory', conferenceCategory);
  postFomDate.append('conferenceType', conferenceType);
  postFomDate.append('conferenceLink', conferenceLink);
  postFomDate.append('postTitle', postTitle);
  postFomDate.append('postDesc', postDesc);
  postFomDate.append('postFullDescription', postFullDescription);
  postFomDate.append('img', file);

  api().post('/post', postFomDate).then(res => {
    dispatch(postSlice.actions.setAddedPost(res.data));
    alert(res.data.message);
    history.push('/');
  }).catch(err => {
    alert(err?.response?.data.message);
    history.push('/');
  });
};