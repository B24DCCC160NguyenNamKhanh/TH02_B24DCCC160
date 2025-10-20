import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Bai1App from './components/bai1-appthoitiet';
import Bai2App from './components/bai2-danhsachsinhvien';
import StudentDetail from './components/StudentDetail';
import Bai3News from './components/bai3-tintuc';

const App: React.FC = () => (
  <Router>
    <nav style={{ marginBottom: 20 }}>
      <Link to="/" style={{ marginRight: 10 }}>Bài 1 - Thời tiết</Link>
      <Link to="/bai2" style={{ marginRight: 10 }}>Bài 2 - Sinh viên</Link>
      <Link to="/bai3">Bài 3 - Tin tức</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Bai1App />} />
      <Route path="/bai2" element={<Bai2App />} />
      <Route path="/bai2/student/:id" element={<StudentDetail />} />
      <Route path="/bai3" element={<Bai3News />} />
    </Routes>
  </Router>
);

export default App;
