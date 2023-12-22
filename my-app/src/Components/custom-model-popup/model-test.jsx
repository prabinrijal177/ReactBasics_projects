import React, { useState } from 'react'

export default function ModelTest() {
    const [showModelPopup, setShowModelPopup] = useState(false);

    function handleToggleModel(){
        setShowModelPopup(!showModelPopup);
    }
  return (
    <div>
         <button onClick={handleToggleModel}>Open Model Popup</button>
    </div>
  );
}
