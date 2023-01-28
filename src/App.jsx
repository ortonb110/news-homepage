import "../src/styles.css";
import NAVBAR from "./Components/NAVBAR";
import NEWS from "./Components/NEWS";
import NEWSLINK from "./Components/NEWSLINK";

function App() {
  return (
    <div className="  lg:pt-[50px] lg:w-[1110px]  lg:mx-auto h-screen">
      <NAVBAR />
      <NEWS />
      <NEWSLINK />
      <p className="absolute md:bottom-0 md:w-full  left-0 text-center px-[15px] mt-[40px] md:mt-0 text-grayishBlue">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw"
          className="capitalize text-darkGrayishBlue hover:text-veryDarkBlue font-bold"
        >
          Frontend mentor.
        </a>
        Coded by{" "}
        <a
          href="https://github.com/ortonb110"
          className="capitalize text-darkGrayishBlue font-bold hover:text-veryDarkBlue"
        >
          Orton Bright
        </a>
      </p>
    </div>
  );
}

export default App;
