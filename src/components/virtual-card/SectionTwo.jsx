import { useContext } from "react";
import Phone from "../../assets/images/iPhone 13 Pro (2).png";
import Netflix from "../../assets/images/netflix.png";
import Alibaba from "../../assets/images/alibaba.png";
import Spotify from "../../assets/images/spotify.png";
import Music from "../../assets/images/music.png";
import Map from "../../assets/images/map.png";
import { ModalContext } from "../../App";

const SectionTwo = () => {
  const [modal, setModal] = useContext(ModalContext);
  const showModal = () => {
    setModal(true);
  };
  return (
    <section className="container section-two">
      <div className="row">
        <div className="col d-flex flex-column justify-content-between">
          <div>
            <header>Spend safely online, in-store and abroad</header>
            <div>Use your Bitscard virtual Card for online purchases anywhere it are accepted</div>
          </div>

          <div className="my-3">
            <button onClick={showModal} style={{ background: "#FCB721" }} className="btn-without-shadow">
              Create Card
            </button>
          </div>
        </div>
        <div className="col img-area">
          <img width="250" className="float-end" src={Phone} alt="iphone" />
          <img width="50" src={Spotify} alt="spotify" />
          <img width="50" src={Music} alt="spotify" />
          <img width="50" src={Netflix} alt="spotify" />
          <img width="50" src={Alibaba} alt="spotify" />
          <img src={Map} alt="a map" />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
