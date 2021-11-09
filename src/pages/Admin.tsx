import {Route, Routes,Link } from 'react-router-dom';
import NotFound from './NotFound';
function Admin() {
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

export default Admin;