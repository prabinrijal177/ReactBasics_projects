import useWindowResize from "./index";

export default function UseWindowResizeTest() {


    const windowSize = useWindowResize();
    const { height, width } = windowSize;


  return (
    <div>
      <h1>use window resize Hooks</h1>
      <p>
        width is {width};
      </p>
      <p>
        height is {height};
      </p>
    </div>
  );
}
