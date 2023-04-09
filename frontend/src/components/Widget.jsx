import { FaArrowDown, FaShoppingBasket, FaUser, FaUsers,FaBookOpen } from 'react-icons/fa';
import "./widget.scss";
import { useEffect, useState } from 'react';

const Widget = ({ type }) => {
  let data;
  const [count, setCount] = useState(0)

 
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error(error);
        // Handle the error here, such as displaying an error message
      }
    };
    fetchCount();
  }, []);

  
  const diff = 2;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        link: "See all users",
        icon: (
          <FaUser
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "RESERVATIONS",
        link: "View all orders",
        icon: (
          <FaShoppingBasket
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "BOOKS COUNT",
        link: "View net earnings",
        icon: (
          <FaBookOpen
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "ISSUED BOOKS",
        link: "See details",
        icon: (
          <FaUsers
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter"> {count}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <FaArrowDown />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
