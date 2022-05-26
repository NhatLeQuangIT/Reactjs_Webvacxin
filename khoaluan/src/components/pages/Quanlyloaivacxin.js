import React from "react";
import { FaUndo, FaRegCheckCircle } from "react-icons/fa";
import "./css/quanlyloaivacxin.css";

export default function Quanlyloaivacxin() {
  return (
    <>
      <div className="container">
        <h2 className="header-name"> Sửa loại vacxin </h2>
        <div className="form-input-vacxin">
          <div className="vacxin-input">
            <p>
              Mã loại vacxin <b className="key-important">(*):</b>
            </p>
            <input
              type="text"
              className="ma-input info-loai-vacxin"
              placeholder="VC01"
            />
          </div>

          <div className="vacxin-input">
            <p>
              Tên loại vacxin <b className="key-important">(*):</b>
            </p>
            <input type="text" className="ma-input info-loai-vacxin" required />
          </div>
        </div>

        {/* Button */}
        <div className="btn-vacxin">
          <div className="reset-btn btn-format">
            <FaUndo />
            <i className="text-btn">Nhập lại</i>
          </div>
          <div className="update-btn btn-format">
            <FaRegCheckCircle />
            <i className="text-btn">Cập nhật</i>
          </div>
        </div>
      </div>
    </>
  );
}
