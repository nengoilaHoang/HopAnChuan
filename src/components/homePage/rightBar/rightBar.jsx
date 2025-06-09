import './rightBar.css';

function RightBar() {
  return (
    <div id="rightBar">
            <div id="topPlaylist">
                <h3 className="title">Playlist hot</h3>
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
            <div id="topArtist">
                <h3 className="title">Nghệ sĩ đang hot</h3>
                <div className="titleContent">
                    <div className="artist">
                        <img className="artistImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRM2-AldpZgaraCXCnO5loktGi0wGiNPydQ&s" alt="Playlist Image"/>
                        <p>Vũ</p>
                    </div>
                    <div className="artist">
                        <img className="artistImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRM2-AldpZgaraCXCnO5loktGi0wGiNPydQ&s" alt="Playlist Image"/>
                        <p>Thắng</p>
                    </div>
                    <div className="artist">
                        <img className="artistImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRM2-AldpZgaraCXCnO5loktGi0wGiNPydQ&s" alt="Playlist Image"/>
                        <p>Sơn Tùng</p>
                    </div>  
                </div>
                
            </div>
        </div>
  );
}

export default RightBar;