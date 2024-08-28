import React, { useContext, useEffect, useState } from "react";
import Coin3d from "../../assets/images/3d-plastilina-three-quarter-view-of-a-bitcoin-emblem 1.png";
import Mastercard from "../../assets/images/Group 5.png";
import Upwork from "../../assets/images/upwork.png";
import Freelancer from "../../assets/images/freelancer.png";
import AppleLogo from "../../assets/images/apple.png";
import playStoreLogo from "../../assets/images/Inner Plugin Iframe.png";
import Bit from "../../assets/images/bit.png";
import nig from "../../assets/images/nig.png";
import axios from "axios";
import { ModalContext } from "../../App";
import { appConfig } from "../../config/app.config";

const SectionThree = () => {
  const [data, setData] = useState({});
  const [btcPrice, setBtcPrice] = useState(0);
  const [nairaPrice, setNairaPrice] = useState(0);
  const [currentRate, setCurrentRate] = useState();

  const { api_url, playStoreUrl } = appConfig

  useEffect(() => {
    axios
      .get(`${api_url}/v1/crypto-transactions/bitscard-rates`)
      .then((res) => {
        setData(res?.data?.data);
        setCurrentRate(res?.data?.data?.btc?.buy);
      })
      .catch((err) => {
        // console.log(err);
      });
    // axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=full"
    //   )
    //   .then((res) => {
    //     setBtcPrice(res?.data?.bitcoin);
    //   })
    //   .catch((err) => {});
  }, []);
  const [modal, setModal] = useContext(ModalContext);
  const showModal = () => {
    setModal(true);
  };
  return (
    <>
      <section className="py-5 section-three">
        <div className="container">
          <div className="row gap-lg-0 gap-5">
            <div className="col-lg">
              <div className="card-one mx-lg-0 mx-auto">
                <img src={Mastercard} alt="" />
                <img src={Coin3d} alt="" />
                <div className="head">Virtual card funding</div>
                <div>
                  You can now create and fund your virtual mastercard with
                  crypto at zero cost.
                </div>
              </div>

              <div className="card-two mx-lg-0 mx-auto">
                <img src={Upwork} alt="upwork logo" />
                <img src={Freelancer} alt="freelancer logo" />
                <div className="head">
                  Receive payment from foreign employers
                </div>
                <div>
                  Freelancer, remote worker or corporate employee? Get paid fast
                  and securely!
                </div>
              </div>
            </div>
            <div className="col-lg">
              <div className="app-btn-wrapper mx-auto mt-0">
                <a
                  href={playStoreUrl}
                  className="app-btn"
                >
                  <img src={playStoreLogo} alt="google play logo" />
                  <span>Google play</span>
                </a>

                <div className="app-btn">
                  <img src={AppleLogo} alt="apple logo" />
                  <span>App store</span>
                </div>
              </div>

              <div id="id" className="section-three-xchange-box mt-3 mx-auto">
                <div className="header">
                  <div style={{ background: "#F7931A" }}>Exchange Rate</div>
                  <div style={{ background: "#767DFF" }}>Crypto Rate</div>
                </div>
                {/* <div className="d-flex justify-content-center mt-2">
                  <button
                    style={{ background: "#EB6A98" }}
                    className="buy-sell-btn"
                  >
                    Buy
                  </button>
                  <button
                    style={{ background: "#18BBFE" }}
                    className="buy-sell-btn"
                  >
                    Sell
                  </button>
                </div> */}
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

                <div className="mt-3 xchange-text-box mx-auto">
                  Exchange rates are volatile right now, so we can't guarantee
                  this rate. We'll use the rate that's live when we receive your
                  money.
                </div>

                <div className="my-4 text-center">
                  <button
                    onClick={showModal}
                    style={{ background: "#47A348" }}
                    to="#"
                    className="btn-without-shadow"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionThree;
