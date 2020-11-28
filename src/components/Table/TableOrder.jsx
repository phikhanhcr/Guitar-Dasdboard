import React, { useEffect, useState } from 'react';

function TableOrder({ latestOrder }) {

  return (
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th style={{ textAlign: 'left' }}>Email</th>
          <th>Họ Tên Khách Hàng</th>
          <th>Số Điện THoại</th>
          <th>Địa Chỉ</th>
          <th>Tên Sản Phẩm</th>
          <th>Số Lượng</th>
          <th>Trạng Thái</th>
        </tr>
      </thead>
      <tbody>
        {
          latestOrder.length && latestOrder.map(ele => (
            <tr>
              <td data-label="STT">1</td>
              <td data-label="Email" style={{ textAlign: 'left' }}>{ele.email}</td>
              <td>{ele.name}</td>
              <td data-label="Số Hoá Đơn">{ele.address}</td>
              <td>{ele.address}</td>
              <td data-label="Số Lượng">{ele.cart.idProduct.name}</td>
              <td data-label="Kích thước">{ele.cart.amount}</td>
              <td data-label="Trạng Thái">
                <select>
                  <option>Chờ xác nhận</option>
                  <option>Đang giao</option>
                  <option>Đã giao</option>
                  <option>Đã Hủy</option>
                </select>
              </td>
            </tr>
          ))
        }


      </tbody>
    </table>
  );
}

export default TableOrder;