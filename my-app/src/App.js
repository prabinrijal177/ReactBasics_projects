import './App.css';
import ScrollToSection from './Components/scroll-top-bottom/scroll-section';
// import ScrollToTopBottom from './Components/scroll-top-bottom';
// import UseOnclickOutsideTest from './Components/click-outside/test';
// import UseFetchHookTest from './Components/use-fetch/test';


// import FeatureFlags from './Components/feature-flag';
// import FeatureFlagGlobalState from './Components/feature-flag/context';
// import TicTacToe from './Components/tic-tac-toe';
// import ModelTest from './Components/custom-model-popup/modal-test';
// import GithubProfileFinder from './Components/github-profile-finder';
// import SearchAutocomplete from './Components/search-autoComplete';
// import Accordian from './Components/accordian';
// import RandomColor from './Components/random-color';
// import StarRating from './Components/star-ratings';
// import ImageSlider from './Components/image-slider';
// import LoadMoreData from './Components/load-more-data';
// import TreeView from './Components/tree-view';
// import menus from "./Components/tree-view/data";
// import QrGenerator from './Components/qr-generator';
// import DarkMode from './Components/Dark-theme';
// import ScrollIndicator from './Components/scroll-indicator';
// import UseWindowResizeTest from "./Components/use-window/test";



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
        {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

        {/* custom-modal */}
        {/* <ModelTest/> */}

        {/* github profile finder */}
        {/* <GithubProfileFinder/> */}

        {/* for search auto-complete */}
        {/* <SearchAutocomplete/> */}

        {/* tic-tac-toe game */}
        {/* <TicTacToe/> */}

        {/* feature flag implementation */}
        {/* <FeatureFlagGlobalState>
          <FeatureFlags/>
        </FeatureFlagGlobalState> */}

        {/* fetching data API dummy json */}
        {/* <UseFetchHookTest/> */}

        {/* closing while clicking outside */}
        {/* <UseOnclickOutsideTest/> */}

        {/* use window resize hook/responsive */}
        {/* <UseWindowResizeTest/> */}

        {/* scroll to top and bottom in a page */}
        {/* <ScrollToTopBottom/> */}

        {/* scroll to a particular section */}
       <ScrollToSection/>

    </div>

  );
}

export default App;
