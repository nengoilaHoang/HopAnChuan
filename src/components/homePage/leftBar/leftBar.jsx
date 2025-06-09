import './leftBar.css';

function LeftBar() {
  return (
    <div id="leftBar">
        <div id="userInfor">
            <h3 className="title">Thông tin cá nhân</h3>
            <p>Đăng nhập để xem xem thông tin</p>
        </div>
        <div id="keyWord">
            <h3 className="title">Từ khóa</h3>
            <div className="titleContent2">
                <p className="item">vũ</p>
                <p className="item">lần cuối</p>
            </div>
        </div>
        <div id="songTune">
            <h3 className="title">Thể loại</h3>
            <div className="titleContent2">
                <p className="item">rock</p>
                <p className="item">ballad</p>
                <p className="item">funk</p> 
                <p className="item">rock metal</p>
                <p className="item">slow</p>
                <p className="item">disco</p> 
                <p className="item">valse</p>
                <p className="item">fox</p>
                <p className="item">pop</p>  
            </div>
        </div>
        <div id="randomPlaylist">
            <h3 className="title">Playlist ngẫu nhiên</h3>
            <div className="titleContent">
                <div className="playList">
                    <img className="playListImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ZuiQ6Ul7JEOTRlLoRBT77riDSe0tGZC_Sg&s" alt="Playlist Image"/>
                    <p>Các bài hát cho người mới</p>
                </div>
                <div className="playList">
                    <img className="playListImage" src="https://static.tuoitre.vn/tto/i/s626/2010/06/03/x6ii2xVN.jpg" alt="Playlist Image"/>
                    <p>mùa hè sôi động</p>
                </div>
                <div className="playList">
                    <img className="playListImage" src="https://congstudio.com.vn/wp-content/uploads/2023/03/CHUP-ANH-KY-YEU-TAI-LANG-SON-24-1024x684.jpg" alt="Playlist Image"/>
                    <p>nhạc mùa tốt nghiêp</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftBar;