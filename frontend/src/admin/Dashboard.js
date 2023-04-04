import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { getUserDetails } from "../actions/userActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Row } from "react-bootstrap";
import Sidebar from '../components/Sidebar'
import Navbar from "../components/Navbar";
import "./home.scss";
import Widget from "../components/Widget";
import Featured from "../components/Featured";
import Chart from "../components/Chart";
import Table from "../components/Table";
// import Widget from '../components/Widget'

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading, error } = userLogin;

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      navigate("/login");
    } else {
      dispatch(getUserDetails());
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row bg='light'
            className="bg-light container-fluid flex-1 home"
            style={{
              // height: "calc(
              // 100vh - 10rem)",
              marginLeft: "-8rem",
              width: "calc(100vw - 30px)",
            }}
          >
            {/* <Widget />  */}
            <Sidebar />
            <div className="homeContainer">
              <Navbar />
              <div className="widgets">
                <Widget type="user" />
                <Widget type="order" />
                <Widget type="earning" />
                <Widget type="balance" />
              </div>
              <div className="charts">
                <Featured />
                <Chart title="Last 6 Months Transactions" aspect={2 / 1} />
              </div>
              <div className="listContainer">
                <div className="listTitle">Latest Transactions</div>
                <Table />
              </div>
            </div>
          </Row>
        </>
      )}
    </>
  );
};

export default AdminDashboard;
