import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { orderList, orderCanceled } from "../../services/Api";
import { Link } from "react-router-dom";
import moment from "moment";
const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState("");
  const login = useSelector(({ auth }) => auth.login);
  const customerId = login.currentCustomer?._id;
  useEffect(() => {
    orderList(customerId)
      .then(({ data }) => setOrders(data.data.docs))
      .catch((error) => console.log(error));
  }, [orderId]);
  const clickOrderCanceled = (id) => {
    orderCanceled(id)
      .then(() => setOrderId(id))
      .catch((error) => console.log(error));
  };
  return (
    <>
      {/*	Order List	*/}
      <div id="my-cart">
        <div className="row">
          <div className="cart-nav-item col-lg-7 col-md-7 col-sm-12">
            Đơn hàng của bạn
          </div>
          <div className="cart-nav-item col-lg-5 col-md-5 col-sm-12">
            Tổng tiền
          </div>
        </div>
        <form method="post">
          {orders?.map((item, index) => {
            // logic
            let alert = "";
            if (item.status === 0) alert = "alert-danger";
            else if (item.status === 2) alert = "alert-success";

            return (
              <div key={index} className={`cart-item row ${alert}`}>
                <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
                  <h4>
                    Đơn hàng đã mua vào ngày:{" "}
                    <span className="text-secondary">
                      {moment(item.createdAt).fromNow()}
                    </span>
                  </h4>
                  <p>Mã Đơn (MĐ): {item._id}</p>
                </div>
                <div className="cart-price col-lg-2 col-md-2 col-sm-12">
                  <b>{item.totalPrice}đ</b>
                </div>
                <div className="cart-quantity col-lg-3 col-md-3 col-sm-12">
                  <Link
                    to={`/OrderDetails-${item._id}`}
                    type="button"
                    className="btn btn-outline-dark mb-1"
                  >
                    Chi tiết đơn hàng
                  </Link>
                  {item.status === 2 ? (
                    <button type="button" className="btn btn-success mb-1">
                      Đơn đã giao
                    </button>
                  ) : null}
                  {item.status === 0 ? (
                    <button type="button" className="btn btn-danger mb-1">
                      Đơn đã huỷ
                    </button>
                  ) : null}
                  {item.status === 1 ? (
                    <>
                      <button
                        type="button"
                        className="btn btn-outline-success mb-1"
                      >
                        Đơn đang giao
                      </button>
                      <button
                        onClick={() => clickOrderCanceled(item._id)}
                        type="button"
                        className="btn btn-outline-danger mb-1"
                      >
                        Huỷ đơn
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            );
          })}

          <div className="row">
            <div className="cart-thumb col-lg-7 col-md-7 col-sm-12">
              <button
                id="update-cart"
                className="btn btn-success"
                type="submit"
                name="sbm"
              >
                Quay về trang chủ
              </button>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <ul className="pagination mt-4">
                <li className="page-item disabled">
                  <span className="page-link">Trang trước</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <span className="page-link">2</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Trang sau
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
      {/*	End Order List	*/}
    </>
  );
};
export default OrderList;
