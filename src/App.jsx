import './App.scss';
import Home from './pages/home';
import { Route, Routes,Navigate} from 'react-router-dom';
import Login from './pages/login';
import Admin from './pages/admin';
import Dashboard from './pages/dashboard';
import Post from './pages/post';
import AddPost from './pages/addPost';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to='/pressa' replace/>} />
        <Route path="/pressa/*" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="post" element={<Post />} />
          <Route path="add" element={<AddPost />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<h1>bunday sahifa mavjud emas</h1>} />
      </Routes>
    </>
  );
}

export default App;
