import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "violet",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "indigo",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
  ];

  function handleScrollToSection() {
    if (ref.current) {
      let pos = ref.current.getBoundingClientRect().top;

      window.scrollTo({
        top: pos,
        behavior: "smooth",
      });
    }
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((dataItem, index) => (
        <div key={index} ref={index === 4 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
