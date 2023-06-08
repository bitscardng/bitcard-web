import { useContext } from "react";
import "../assets/scss/downloadModal.scss";
import QrCode from "../assets/images/qrcode.png";
import AppDownloadBtn from "./AppDownloadBtn";
import X from "../assets/images/x.svg";
import { ModalContext } from "../App";

const DownloadModal = () => {
  const [modal, setModal] = useContext(ModalContext);
  return (
    <div className={`qr-code-section ${!modal && "d-none"}`}>
      <div className="qr-code-modal">
        <div className="text-end">
          <img onClick={() => setModal(false)} src={X} alt="x-icon" />
        </div>
        <div className="row align-items-center">
          <div className="col">
            <div style={{ backgroundImage: `url(${QrCode})` }} className="qr-code-box"></div>
          </div>
          <div className="col">
            <div className="qr-code-text">
              Scan the QR code to download the
              <span> Bitscard app</span>
            </div>
            <AppDownloadBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
