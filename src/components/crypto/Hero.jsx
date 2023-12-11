import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nig from "../../assets/images/nig.png";
import Bit from "../../assets/images/bit.png";
import ArrowDown from "../../assets/images/arrow down.png";
import Phone from "../../assets/images/another-phone.png";
import BTC from "../../assets/images/BTC 2.png";
import { ModalContext } from "../../App";
import nig from "../../assets/images/nig.png";
import axios from "axios";

const url = `https://devadmin.bitscard.app/api/v1/crypto-transactions/bitscard-rates`;

const Hero = () => {
  const [modal, setModal] = useContext(ModalContext);
  const [crypto, setCrypto] = useState(null);
  const [cryptoErr, setCryptoErr] = useState(null);
  const [currentRate, setCurrentRate] = useState(768);
  const [cryptoInput, setCryptoInput] = useState(0);
  const showModal = () => {
    setModal(true);
  };

  const getCryptoRate = async () => {
    try {
      const res = await axios.get(url);
      setCrypto(res.data.data);
    } catch (error) {
      setCryptoErr(error.message);
    }
  };

  useEffect(() => {
    getCryptoRate();
  }, []);

  return (
    <div className="py-4 hero">
      <div className="container">
        <div className="row gap-lg-0 gap-5 align-items-center">
          <div className="col">
            <h1>Crypto Trade</h1>
            <p>
              Buy , sell, receive and send crypto on our platform . You can now
              buy crypto with your local currency on the Bitscard network either
              from us or using our P2P feature.{" "}
            </p>
            <div className="hero-exchange-rate-box mt-3">
              <div
                style={{ background: "#767DFF" }}
                className="hero-exchange-header"
              >
                Crypto Rate
              </div>
              <div className="d-flex justify-content-center mt-2">
                <button className="buy-sell-btn buy-btn-bg">Buy</button>
                <button className="buy-sell-btn bgc-green">Sell</button>
              </div>

              <div className="mt-2">
                <div className="xchange-input-box">
                  <div className="d-flex align-items-center">
                    <img width="30px" src={Bit} alt="USA flag" />
                    <span className="ms-2">BTC</span>
                    <img className="ms-2" width="10" src={ArrowDown} alt="" />
                  </div>
                  <div>
                    <input
                      onChange={(e) => setCryptoInput(e.target.value)}
                      value={cryptoInput}
                      className="crypto-input-box"
                      type="text"
                    />
                  </div>
                </div>

                <div className="ms-5 my-1">Rate {currentRate}/$</div>

                <div className="xchange-input-box">
                  <div className="d-flex align-items-center">
                    <img width="30px" src={Nig} alt="nigeria flag" />
                    <span className="ms-2">NGN</span>
                    <img className="ms-2" width="10" src={ArrowDown} alt="" />
                  </div>
                  <div>{currentRate * cryptoInput}</div>
                </div>
              </div>

              <div className="my-4 text-center">
                <button
                  onClick={showModal}
                  style={{ background: "#F7931A" }}
                  className="btn-without-shadow"
                >
                  Trade now
                </button>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              style={{ background: "#885df5" }}
              className="hero-color-box mt-5"
            >
              <img src={Phone} alt="phone" />
              <img src={BTC} alt="bitcoin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
