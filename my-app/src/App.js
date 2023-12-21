import './App.css';
import Accordian from './Components/accordian';
import RandomColor from './Components/random-color';
import StarRating from './Components/star-ratings';
import ImageSlider from './Components/image-slider';

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
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page= {1}/>


    </div>

  );
}

export default App;
