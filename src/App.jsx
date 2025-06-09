import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import HomePageView from './components/homePage/homePageView/homePageView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageView/>} />
          <Route 
            path="/HopAm" 
            element={<h1>Tra cứu hợp âm</h1>}
          />
          <Route path="/Playlist" element={<h1>Danh sách Playlist</h1>} />
          <Route path="/NgheSi" element={<h1>Danh sách nghệ sĩ</h1>} />
          <Route path="/GiaiDieu" element={<h1>Danh sách giai điệu</h1>} />
          <Route path="/Donate" element={<h1>Ủng hộ</h1>} />
          <Route path="*" element={<h1>404 - Trang không tìm thấy</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
