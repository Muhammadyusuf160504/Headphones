import "./Home.css";
// image
import Homexx99Headphone from "../../assets/XX99-headphones.png";
function Home() {
  return (
    <div className="section__container container">
      <div className="chiziqcha"></div>
      <div className="section1__container">
        <div className="section1__text">
          <h3>NEW PRODUCT</h3>
          <h1 className="section1__title">XX99 Mark II Headphones</h1>
          <p className="section1__p">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="section__btn section1__btn">See Product</button>
        </div>
        <div className="section1__img">
          <img
            className="section1__img-img"
            src={Homexx99Headphone}
            alt="xx99 rusumli headphones"
            width=""
            height=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
