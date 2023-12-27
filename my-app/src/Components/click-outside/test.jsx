import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content</h1>
          <p>
           In order to close the box click outside of the content...
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}