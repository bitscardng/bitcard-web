import { useContext } from "react";
import Human from "../../assets/images/human.png";
import { ModalContext } from "../../App";

const SectionTwo = () => {
  const [modal, setModal] = useContext(ModalContext);
  const showModal = () => {
    setModal(true);
  };
  return (
    <div className="container section-two my-5">
      <div className="row">
        <div className="col">
          <div className="text-header" style={{ fontSize: "30px" }}>
            Send and Receive funds from your international account without
            hassle
          </div>
          <p>
            Enjoy free transfers and the lowest cross-border rates. More money
            stays in your pocket, and more arrives in theirs.
          </p>

          <div className="mt-5">
            <button
              onClick={showModal}
              style={{ background: "#FCB721" }}
              className="btn-without-shadow py-2"
              to="#"
            >
              Get started
            </button>
          </div>
        </div>
        <div className="col">
          <img src={Human} alt="a person with a phone and cash" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
