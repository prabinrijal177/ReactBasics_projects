import './App.css';
// import Accordian from './Components/accordian';
// import RandomColor from './Components/random-color';
// import StarRating from './Components/star-ratings';
// import ImageSlider from './Components/image-slider';
// import LoadMoreData from './Components/load-more-data';
// import TreeView from './Components/tree-view';
// import menus from "./Components/tree-view/data";
// import QrGenerator from './Components/qr-generator';
// import DarkMode from './Components/Dark-theme';
import ScrollIndicator from './Components/scroll-indicator';


function App() {
  return (
    <div className='App'>
       {/* accordian component */}
       {/* <Accordian/> */}

       {/* random color component */}
       {/* <RandomColor/> */}

       {/* star rating component */}
       {/* <StarRating noOfStars={15}/> */}

      {/* image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page= {1}/> */}

       {/* load more products component */}
       {/* <LoadMoreData/>  */}

        {/* tree view structure */}
        {/* <TreeView menus ={menus}/> */}

        {/* QR code Generator */}
        {/* <QrGenerator/> */}

        {/* enabling dark-light mode */}
        {/* <DarkMode/> */}

        {/* scrollIndicator */}
        <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>

    </div>

  );
}

export default App;
