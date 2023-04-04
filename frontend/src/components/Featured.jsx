import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaIcons } from "react-icons/fa";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Transactions</h1>
        <FaIcons fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={2} text={"2%"} strokeWidth={5} />
        </div>
        <p className="title">Total Books Issued today</p>
        <p className="amount">220</p>
        <p className="desc">
          Previous transactions processing. Last transaction may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <FaArrowAltCircleDown fontSize="small"/>
              <div className="resultAmount">12%</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <FaArrowAltCircleUp fontSize="small"/>
              <div className="resultAmount">1%</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <FaArrowAltCircleUp fontSize="small"/>
              <div className="resultAmount">3%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
