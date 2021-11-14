import {Route, Routes,Link } from 'react-router-dom';
import NotFound from './NotFound';
import AuthProvider from '../components/auth/AuthProvider';
import { Navigate } from 'react-router-dom';


const Admin = () => {
  if (AuthProvider.checkIfLoggedIn()) {  
    return (
      <div>
        <nav>
          <Link to="me">My Profile</Link>
        </nav>
  
        <Routes>
          <Route path="/" element={<p>home</p>} />
          <Route path="/id" element={<p>id</p>} />
          <Route path="/me" element={<p>me</p>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
  else {
    return (
     <Navigate to="/login" />
    );
  }
};


export default Admin;