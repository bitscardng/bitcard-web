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

const url = `https://api.bitscard.app/api/v1/crypto-transactions/bitscard-rates`;

const Hero = () => {
  const [modal, setModal] = useContext(ModalContext);
  const [crypto, setCrypto] = useState(null);
  const [cryptoErr, setCryptoErr] = useState(null);
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
  const [data, setData] = useState({});
  const [btcPrice, setBtcPrice] = useState(0);
  const [nairaPrice, setNairaPrice] = useState(0);
  const [currentRate, setCurrentRate] = useState();
  useEffect(() => {
    axios
      .get("https://api.bitscard.app/api/v1/crypto-transactions/bitscard-rates")
      .then((res) => {
        setData(res?.data?.data);
        setCurrentRate(res?.data?.data?.btc?.buy);
      })
      .catch((err) => {
        // console.log(err);
      });
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
              <ul
                class="nav nav-pills mb-3 mt-2 m-auto w-full d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    onClick={() => {
                      setCurrentRate(data?.btc?.buy);
                      setBtcPrice(0);
                      setNairaPrice(0);
                    }}
                  >
                    Buy
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    onClick={() => {
                      setCurrentRate(data?.btc?.sell);
                      setBtcPrice(0);
                      setNairaPrice(0);
                    }}
                  >
                    Sell
                  </button>
                </li>
              </ul>

              <div className="xchange-input-box mt-1">
                <div>
                  <img width="30px" src={Bit} alt="Bitcoin logo" />
                  <span className="ms-2">BTC</span>
                </div>

                <div>
                  <input
                    onChange={(e) => {
                      setBtcPrice(e.target.value);
                      setNairaPrice(e.target.value * currentRate);
                    }}
                    value={btcPrice}
                    className="crypto-input-box"
                    type="number"
                  />
                </div>
              </div>

              <div className="ms-5 my-1">Rate {currentRate}/$</div>

              <div className="xchange-input-box mt-1">
                <div>
                  <img width="30px" src={nig} alt="Bitcoin logo" />
                  <span className="ms-2">NGN</span>
                </div>

                <div>
                  <input
                    onChange={(e) => {
                      setNairaPrice(e.target.value);
                      setBtcPrice(e.target.value / currentRate);
                    }}
                    value={nairaPrice}
                    className="crypto-input-box"
                    type="number"
                  />
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
