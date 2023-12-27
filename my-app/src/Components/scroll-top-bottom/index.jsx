import React, { useRef } from 'react';
import useFetch from '../use-fetch';

export default function ScrollToTopBottom() {
    const {data, error, pending} = useFetch(
        "https://dummyjson.com/products?limit=100",
        {}
      );

      const bottomRef = useRef(null);

      function handleScrollToTop(){
        window.scrollTo({
            top: 0, left:0, behavior:'smooth',
        })
      }

      function handleScrollToBottom(){
       bottomRef.current.scrollIntoView({ behavior:'smooth'});


      }

      if(error) {
        return <h1>Error Occurred! Try Again?</h1>
      }

      if(pending){
        return <h1>loading!! please wait</h1>
      }


  return (
    <div>
          <h1>Scroll to top and bottom feature</h1>
          <h3>This is a top <section></section></h3>
          <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
          <ul>
            {
                data && data.products && data.products.length ? data.products.map(item => <li style={{
                    listStyle: 'none',
                }}>{item.title}</li>) : null
            }
          </ul>
          <button onClick={handleScrollToTop}>Scroll to Top</button>
          <div ref={bottomRef}></div>
          <h3>This Is The Bottom Of the Page.</h3>
    </div>
  )
}
