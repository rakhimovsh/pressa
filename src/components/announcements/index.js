import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Button } from '@mui/material';
import io from 'socket.io-client';
import dayjs from 'dayjs';

const socket = io.connect(process.env.REACT_APP_API);

function Announcements() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    socket.emit('post', {status: "active"});
    socket.on('get_active_posts', (data) => {
      setPosts(data);
    });
  }, []);

  return (
    <section className="announcements">
      <div className="container announcements__container">
        <h2>Oxirgi e’lonlar</h2>
        <ul className="announcements__list">
          {
            posts?.map(post => (
              <li className="announcements__item" key={post.post_id}>
                <img src={process.env.REACT_APP_API + '/' + post.post_image} alt="image" width={400} height={400} />
                <div>
                  <h3>{post.post_title}</h3>
                  <ul>
                    <li>{post.creator_name}</li>
                    <li>{dayjs(post.conference_date).format('DD/MM/YYYY')}</li>
                    <li>{post.conference_type}</li>
                  </ul>
                </div>
              </li>
            ))
          }
        </ul>
        <Button style={{ marginLeft: 'auto', marginRight: 'auto' }} variant="contained">Ko’proq ko’rish</Button>
      </div>
    </section>
  );
}

export default Announcements;