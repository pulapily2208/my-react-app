import React, { useState } from "react";
import { updateCustomer } from "../../services/Api";
import { useDispatch, useSelector } from "react-redux";
import { updatedCustomer } from "../../redux-setup/reducers/auth";
const UpdateCustomer = () => {

  
  const currentCustomer = useSelector(({ Auth }) => Auth.login.currentCustomer);
  const [alert, setAlert] = useState(null);
  const [status, setStatus] = useState(false);
  console.log("Current Customer:", currentCustomer);
  const [customer, setCustomer] = useState(currentCustomer.customer);

  const dispatch = useDispatch();
  const changeInput = (e) => {
    const { name, value } = e.target;
    return setCustomer({
      ...customer,
      [name]: value,
    });
  };
  const clickUpdate = (e) => {
    e.preventDefault();

    console.log("Customer ID:", customer._id);
    updateCustomer(customer._id, customer)
      .then(() => {
        setAlert("Cập nhật thông tin khách hàng thành công !");
        setStatus(true);
        return dispatch(updatedCustomer(customer));
      })
      .catch((error) => {
        if (error.response?.data === "phone exists")
          return setAlert("Số điện thoại đã tồn tại!");
        
        return console.log(error);
      });
  };

  return (
    <>
      {/*	Register Form	*/}
      <div id="customer">
        {alert && (
          <div
            className={`alert ${
              status ? "alert-success" : "alert-danger"
            } text-center`}
          >
            {alert}
          </div>
        )}

        <h3 className="text-center">Thông tin tài khoản</h3>
        <form method="post">
          <div className="row">
            <div id="customer-name" className="col-lg-6 col-md-6 col-sm-12">
              <input
                onChange={changeInput}
                placeholder="Họ và tên (bắt buộc)"
                type="text"
                name={customer?.fullName}
                className="form-control"
                required
              />
            </div>
            <div id="customer-pass" className="col-lg-6 col-md-6 col-sm-12">
              <input
                onChange={changeInput}
                disabled
                placeholder="Mật khẩu (bắt buộc)"
                type="password"
                name={customer.password}
                className="form-control"
                required
              />
            </div>
            <div id="customer-mail" className="col-lg-6 col-md-6 col-sm-12">
              <input
                onChange={changeInput}
                disabled
                placeholder="Email (bắt buộc)"
                type="text"
                name="email"
                className="form-control"
                required
              />
            </div>
            <div id="customer-phone" className="col-lg-6 col-md-6 col-sm-12">
              <input
                onChange={changeInput}
                placeholder="Số điện thoại (bắt buộc)"
                type="text"
                name="phone"
                className="form-control"
                required
              />
            </div>
            <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
              <input
                onChange={changeInput}
                placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)"
                type="text"
                name={customer?.address}
                className="form-control"
                required
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="by-now col-lg-6 col-md-6 col-sm-12">
            <a onClick={clickUpdate} href="#">
              <b>Cập nhật ngay</b>
            </a>
          </div>
          <div className="by-now col-lg-6 col-md-6 col-sm-12">
            <a href="#">
              <b>Quay về trang chủ</b>
            </a>
          </div>
        </div>
      </div>
      {/*	End Register Form	*/}
    </>
  );
};

export default UpdateCustomer;
