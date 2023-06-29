import { useEffect, useState, useContext } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { ModalContext } from "../../App";

const CryptoGraph = ({ crypto }) => {
  const [options, setOptions] = useState(null);
  const [series, setSeries] = useState(null);
  const [coin, setCoin] = useState(null);
  const [modal, setModal] = useContext(ModalContext);

  const showModal = () => {
    setModal(true);
  };

  const fetchChartData = async () => {
    let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${crypto}/ohlc?vs_currency=usd&days=90`).catch(function (error) {
      console.log(error.toJSON());
    });

    setOptions({
      chart: {
        type: "candlestick",
        // height: 350,
      },
      title: {
        text: `${crypto.toUpperCase()} CandleStick Chart`,
        align: "center",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    });

    setSeries([{ data: response.data }]);
  };

  const fetchCoin = async () => {
    let response = await axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .catch(function (error) {
        console.log(error.toJSON());
      });
    setCoin(response.data[0]);
    console.log(response.data[0]);
  };

  useEffect(() => {
    fetchChartData();
    fetchCoin();
  }, []);

  return (
    <div className="graph-card mx-auto">
      {series === null ? (
        "loading..."
      ) : (
        <>
          <div className="d-flex align-items-center justify-content-between coin-details">
            <div className="d-flex align-items-center gap-3">
              <img width="50" src={coin?.image} alt="" />
              <div>
                <span>{coin?.id}</span> <br />
                <span>{coin?.symbol}</span>
              </div>
            </div>

            <div className="coin-price">{`${coin?.current_price?.toLocaleString() ?? "unavailable"} $`}</div>
          </div>
          <Chart options={options} series={series} type="candlestick" height="350" />
          <div className="d-flex justify-content-center mt-2">
            <button onClick={showModal} className="buy-sell-btn buy-btn-bg">
              Buy
            </button>
            <button onClick={showModal} className="buy-sell-btn bgc-green">
              Sell
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CryptoGraph;
