import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Nig from "../../assets/images/nig.png";
import US from "../../assets/images/usa.png";
import { Link } from "react-router-dom";
import ArrowDown from "../../assets/images/arrow down.png";
import AppDownloadBtn from "../AppDownloadBtn";
import phone from "../../assets/images/iPhone13.png";
import World from "../../assets/images/world.png";
import country1 from "../../assets/images/kenya.png";
import country2 from "../../assets/images/nigeria.png";
import country3 from "../../assets/images/canada.png";
import country4 from "../../assets/images/democratic-republic-of-congo.png";
import country5 from "../../assets/images/united-states.png";
import country6 from "../../assets/images/ghana.png";
import country7 from "../../assets/images/united-kingdom.png";
import country8 from "../../assets/images/european-union.png";
import { ModalContext } from "../../App";
import { appConfig } from "../../config/app.config";

const Hero = () => {
  const [modal, setModal] = useContext(ModalContext);
  const showModal = () => {
    setModal(true);
  };
  const [data, setData] = useState({});
  const [currentRate, setCurrentRate] = useState();
  const [nairaValue, setNairaValue] = useState(0);
  const [dollarValue, setDollarValue] = useState(0);
  const [usdtValue, setUsdtValue] = useState(0);
  const [btcValue, setBtcValue] = useState(0);

  const { api_url } = appConfig

  useEffect(() => {
    axios
      .get(`${api_url}/v1/crypto-transactions/bitscard-rates`)
      .then((res) => {
        setData(res?.data?.data);
        setCurrentRate(res?.data?.data?.usd?.buy);
        setBtcValue(res?.data?.data?.btc?.buy);
        setUsdtValue(res?.data?.data?.usdt?.buy);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  return (
    <div className="py-3 hero">
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <h1>Global Bank Account</h1>
            <p>
              Open a US Dollar, Nigerian Naira, Canadian Dollar, United Kingdom
              Pounds account in less than 1 minutes.
            </p>

            <div className="mt-3 position-relative image-container">
              <img src={phone} alt="phone" />
              <img src={World} alt="world map" />
              <div className="text-box">
                <div className="flag-wrapper ">
                  <img src={country1} alt="a country's flag" />
                  <img src={country2} alt="a country's flag" />
                  <img src={country3} alt="a country's flag" />
                  <img src={country4} alt="a country's flag" />
                  <img src={country5} alt="a country's flag" />
                  <img src={country6} alt="a country's flag" />
                  <img src={country7} alt="a country's flag" />
                  <img src={country8} alt="a country's flag" />
                </div>
                <p> Request money in over 20+ currencies and counting...</p>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="hero-exchange-rate-box exchange-rate-box mt-3 mx-auto">
              <div
                style={{ background: "#219DFC" }}
                className="hero-exchange-header"
              >
                Exchange Rate
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
                      setCurrentRate(data?.usd?.buy);
                      setBtcValue(data?.btc?.buy);
                      setUsdtValue(data?.usdt?.buy);
                      setNairaValue(0);
                      setDollarValue(0);
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
                      setCurrentRate(data?.usd?.sell);
                      setBtcValue(data?.btc?.sell);
                      setUsdtValue(data?.usdt?.sell);
                      setNairaValue(0);
                      setDollarValue(0);
                    }}
                  >
                    Sell
                  </button>
                </li>
              </ul>
              <div className="input-box-wrapper align-items-center mt-3">
                <div>
                  <img width="30px" src={Nig} alt="nigeria flag" />
                  <span className="ms-2">NGN</span>
                  <img className="ms-2" width="10" src={ArrowDown} alt="" />
                </div>
                {/* <div>74,000</div> */}
                <input
                  value={nairaValue}
                  onChange={(e) => {
                    setNairaValue(e.target.value);
                    setDollarValue(e.target.value / currentRate);
                  }}
                  className="crypto-input-box"
                  type="number"
                />
              </div>
              <div className="ms-5 my-1">Rate {currentRate}/$</div>

              <div className="input-box-wrapper align-items-center">
                <div>
                  <img width="30px" src={US} alt="nigeria flag" />
                  <span className="ms-2">USD</span>
                  <img className="ms-2" width="10" src={ArrowDown} alt="" />
                </div>
                <input
                  value={dollarValue}
                  onChange={(e) => {
                    setDollarValue(e.target.value);
                    setNairaValue(e.target.value * currentRate);
                  }}
                  className="crypto-input-box"
                  type="number"
                />
              </div>
              <div className="my-4 text-center">
                <button
                  onClick={showModal}
                  className="btn-without-shadow bgc-green"
                >
                  Get started
                </button>
              </div>
            </div>

            <div className="app-btn-wrapper mx-auto">
              <AppDownloadBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
