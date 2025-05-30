
import React, { useState, useEffect } from "react";
import { registerCustomer } from "../../services/Api";
const Register = () => {
  const [formInputs, setFormInputs] = useState({});
  const [alertRegister, setAlertRegister] = useState(false);
  const [statusRegister, setStatusRegister] = useState(false);
  const changeFormInputs = (e) => {
    const { name, value } = e.target;
    return setFormInputs({ ...formInputs, [name]: value });
  };
  const clickRegister = (e) => {
    e.preventDefault();
    registerCustomer(formInputs)
      .then(({ data }) => {
        setAlertRegister("Đăng ký tài khoản thành công!");
        setStatusRegister(true);
        return setFormInputs({});
      })
      .catch((error) => {
        if (error.response.data === "email exists")
          return setAlertRegister("Email đã tồn tại!");
        if (error.response.data === "phone exists")
          return setAlertRegister("Số điện thoại đã tồn tại!");
        return console.log(error);
      });
  };
  return (
    <>
      {/*	Register Form	*/}
      <div id="customer">
        {alertRegister && (
          <div
            className={`alert ${
              statusRegister ? "alert-success" : "alert-danger"
            } text-center`}
          >
            {alertRegister}
          </div>
        )}
        <h3 className="text-center">Đăng ký</h3>
        <form method="post">
          <div className="row">
            <div id="customer-name" className="col-lg-6 col-md-6 col-sm-12">
              <input
                onChange={changeFormInputs}
                placeholder="Họ và tên (bắt buộc)"
                type="text"
                name="fullName"
                className="form-control"
                required
                value={formInputs.fullName || ""}
              />
            </div>
            <div id="customer-pass" className="col-lg-6 col-md-6 col-sm-12">
              <input
                onChange={changeFormInputs}
                placeholder="Mật khẩu (bắt buộc)"
                type="text"
                name="password"
                className="form-control"
                required
                value={formInputs.password || ""}
              />
            </div>
            <div id="customer-mail" className="col-lg-6 col-md-6 col-sm-12">
              <input
                onChange={changeFormInputs}
                placeholder="Email (bắt buộc)"
                type="text"
                name="email"
                className="form-control"
                required
                value={formInputs.email || ""}
              />
            </div>
            <div id="customer-phone" className="col-lg-6 col-md-6 col-sm-12">
              <input
                onChange={changeFormInputs}
                placeholder="Số điện thoại (bắt buộc)"
                type="text"
                name="phone"
                className="form-control"
                required
                value={formInputs.phone || ""}
              />
            </div>
            <div id="customer-add" className="col-lg-12 col-md-12 col-sm-12">
              <input
                onChange={changeFormInputs}
                placeholder="Địa chỉ nhà riêng hoặc cơ quan (bắt buộc)"
                type="text"
                name="address"
                className="form-control"
                required
                value={formInputs.address || ""}
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="by-now col-lg-6 col-md-6 col-sm-12">
            <a onClick={clickRegister} href="#">
              <b>Đăng ký ngay</b>
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
export default Register;
