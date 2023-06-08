import { useContext } from "react";
import Card1 from "../../assets/images/moneylion.png";
import Card2 from "../../assets/images/appleCard.png";
import { ModalContext } from "../../App";

const SectionTwo = () => {
  const [modal, setModal] = useContext(ModalContext);
  const showModal = () => {
    setModal(true);
  };
  return (
    <div className="section-two container my-4">
      <div className="row">
        <div className="col-5">
          <div className="text-header">Get the best deal for your gift cards with us.</div>
          <p>Over 14000+ international and local gift cards in various categories are available on Bitscard for instant purchase.</p>
          <div className="mb-3 mt-5">
            <button onClick={showModal} style={{ background: "#FCB721" }} className="btn-without-shadow">
              Buy gift card
            </button>
          </div>
        </div>
        <div className="col-7 img-column">
          <img width="200" src={Card1} alt="moneylion giftcard" />
          <img width="200" src={Card2} alt="apple giftcard" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
