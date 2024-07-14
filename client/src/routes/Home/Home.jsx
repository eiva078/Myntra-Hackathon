import homeImg from "../../assets/homeImg.png";
import HomeItem from "../../components/HomeItem/HomeItem";

const Home = () => {
  return (
    <div>
      <img src={homeImg} alt="Home" className="homeImg" />
      <main>
        <HomeItem />
      </main>
    </div>
  );
};

export default Home;
