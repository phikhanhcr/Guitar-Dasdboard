import React from 'react';
import Left from '../Left';
import deleteIcon from '../assets/icon-trash-black.svg'
import checkIcon from '../assets/icon-check.svg'
function Order(props) {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="dashboard">
          <Left />
          <div className="right">
            <div className="right__content">
              <div className="right__title">Bảng điều khiển</div>
              <p className="right__desc">Xem đơn hàng</p>
              <div className="right__table">
                <div className="right__tableWrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Email</th>
                        <th>Số hoá đơn</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Kích cở</th>
                        <th>Ngày</th>
                        <th>Tổng</th>
                        <th>Trạng thái</th>
                        <th>Xoá</th>
                        <th>Thanh toán</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="STT">1</td>
                        <td data-label="Email">chibaosinger@gmail.com</td>
                        <td data-label="Số hoá đơn">337203544</td>
                        <td data-label="Tên sản phẩm">Bata Dress</td>
                        <td data-label="Số lượng">2</td>
                        <td data-label="Kích cở">Nhỏ</td>
                        <td data-label="Ngày">2020-07-13</td>
                        <td data-label="Tổng">1.180.000 ₫</td>
                        <td data-label="Trạng thái">
                          <select>
                            <option>Chờ xác nhận</option>
                            <option>Đang giao</option>
                            <option>Đã giao</option>
                            <option>Đã Hủy</option>
                          </select>
                        </td>
                        <td data-label="Xoá" className="right__iconTable"><a href><img src={deleteIcon} alt="" /></a></td>
                        <td data-label="Thanh toán" className="right__confirm">
                          <a href className="right__iconTable">
                            <img src={checkIcon} alt="" /></a>
                        </td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;