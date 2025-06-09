import './headerBar.css';

function HeaderBar(){
    return (
        <div id="header">
            <div id="firstLine">
                <div id="logoAndSearch">
                    <img className="logo" src="https://static.hopamchuan.com/assets/svg/hopamchuan-logo.svg" alt="Hopamchuan Logo"/>
                    <input className="searchBar" type="text" placeholder="Tìm kiếm..."/>
                </div>
                <div id="seccondLine">
                    <button className="normalButton">+ Đăng bài hát</button>
                    <button className="normalButton">Đăng nhập</button>
                    <button className="normalButton">Đăng ký</button>
                </div> 
            </div>
            <div id="seccondLine">
                <button className="category">Hài hát</button>
                <button className="category">Hợp âm</button>
                <button className="category">playlist</button>
                <button className="category">Điệu bài hát</button>
                <button className="category">Liên hệ quảng cáo</button>
            </div>
        </div>
    );
}

export default HeaderBar;