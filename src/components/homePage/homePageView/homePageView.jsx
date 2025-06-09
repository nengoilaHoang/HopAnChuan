import HeaderBar from '../headerBar/headerBar';
import LefBar from '../leftBar/leftBar';
import RightBar from '../rightBar/rightBar';
import Content from '../content/content';
import './homePageView.css';

function HomePageView() {
  return (
    <div>
        <HeaderBar />
        <div id="mainContent">
            <LefBar />
            <Content />
            <RightBar />
        </div>
        <div id="footer">
        </div>
    </div>
  );
}

export default HomePageView;