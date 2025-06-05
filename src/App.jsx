import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Trang chủ</h1>} />
          <Route path="/HopAm" element={<h1>Tra cứu hợp âm</h1>} />
          <Route path="/Playlist" element={<h1>Danh sách Playlist</h1>} />
          <Route path="/NgheSi" element={<h1>Danh sách nghệ sĩ</h1>} />
          <Route path="/GiaiDieu" element={<h1>Danh sách giai điệu</h1>} />
          <Route path="/Donate" element={<h1>Ủng hộ</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
