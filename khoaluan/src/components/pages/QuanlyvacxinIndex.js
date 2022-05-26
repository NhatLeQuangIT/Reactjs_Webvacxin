import React, { useState } from "react";
import { FaUndo, FaPlusCircle, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import "./css/quanlyvacxin.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function QuanlyvacxinIndex() {
  const [myVacxin, setMyVacXin] = useState("Loại 1");

  const handleChange = (event) => {
    setMyVacXin(event.target.value);
  };
  return (
    <div className="container">
      <h2 className="header-name"> Quản lý vacxin </h2>
      <div className="form-input">
        <div className="infomation-input">
          <p>
            Mã vacxin <b className="important">(*):</b>
          </p>
          <input
            type="text"
            className="ma-input info-vacxin"
            placeholder="VC01"
          />
        </div>
        <div className="infomation-input">
          <p>
            Loại vacxin <b className="important">(*):</b>
          </p>
          <form className="category-vacxin">
            <select
              value={myVacxin}
              onChange={handleChange}
              className="info-vacxin"
            >
              <option value="Loại 1">Loại 1</option>
              <option value="Loại 2">Loại 2</option>
              <option value="Loại 3">Loại 3</option>
              <option value="Loại 4">Loại 4</option>
            </select>
          </form>
        </div>
        <div className="infomation-input">
          <p>
            Tên vacxin <b className="important">(*):</b>
          </p>
          <input type="text" className="ma-input info-vacxin" />
        </div>
      </div>

      <div className="form-input">
        <div className="infomation-input">
          <p>
            Ngày hết hạn <b className="important">(*):</b>
          </p>
          <form action="">
            <input
              type="datetime-local"
              id="birthdaytime"
              name="birthdaytime"
              className="info-vacxin"
            />
          </form>
        </div>

        <div className="infomation-input">
          <p>Nhà sản xuất :</p>
          <input type="text" className="ma-input info-vacxin" />
        </div>
        <div className="infomation-input">
          <p>Mô tả :</p>
          <textarea type="text" className="ma-input note-vacxin" />
        </div>
      </div>

      {/* Button */}
      <div className="btn-vacxin">
        <div className="reset-btn btn-format">
          <FaUndo />
          <i className="text-btn">Nhập lại</i>
        </div>
        <div className="update-btn btn-format">
          <FaPlusCircle />
          <i className="text-btn">Cập nhật</i>
        </div>
      </div>
      <div className="table-vacxin">
        <Table id="customer">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã Vacxin</th>
              <th>Tên Vacxin</th>
              <th>Ngày hết hạn</th>
              <th>Nhà sản xuất</th>
              <th>Mô tả</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link to="/quan-ly-vacxin-edit">
                  <button className="edit-btn">
                    <FaRegEdit />
                  </button>
                </Link>
                <button className="delete-btn">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
