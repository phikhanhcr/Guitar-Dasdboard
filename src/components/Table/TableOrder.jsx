import React from 'react';

function TableOrder(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th style={{ textAlign: 'left' }}>Email</th>
          <th>Số Hoá Đơn</th>
          <th>ID Sản Phẩm</th>
          <th>Số Lượng</th>
          <th>Kích thước</th>
          <th>Trạng Thái</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="STT">1</td>
          <td data-label="Email" style={{ textAlign: 'left' }}>chibaosinger@gmail.com</td>
          <td data-label="Số Hoá Đơn">6577544</td>
          <td data-label="ID Sản Phẩm">2</td>
          <td data-label="Số Lượng">1</td>
          <td data-label="Kích thước">Trung Bình</td>
          <td data-label="Trạng Thái">
            Đã Thanh Toán
                            </td>
        </tr>
        <tr>
          <td data-label="STT">2</td>
          <td data-label="Email" style={{ textAlign: 'left' }}>midu@gmail.com</td>
          <td data-label="Số Hoá Đơn">4578644</td>
          <td data-label="ID Sản Phẩm">4</td>
          <td data-label="Số Lượng">2</td>
          <td data-label="Kích thước">Nhỏ</td>
          <td data-label="Trạng Thái">
            Đang Xử Lý
                            </td>
        </tr>
        <tr>
          <td data-label="STT">3</td>
          <td data-label="Email" style={{ textAlign: 'left' }}>miku@gmail.com</td>
          <td data-label="Số Hoá Đơn">2657544</td>
          <td data-label="ID Sản Phẩm">3</td>
          <td data-label="Số Lượng">5</td>
          <td data-label="Kích thước">Lớn</td>
          <td data-label="Trạng Thái">
            Đang Xử Lý
                            </td>
        </tr>
        <tr>
          <td data-label="STT">4</td>
          <td data-label="Email" style={{ textAlign: 'left' }}>dangthimydung@gmail.com
                            </td>
          <td data-label="Số Hoá Đơn">9659544</td>
          <td data-label="ID Sản Phẩm">8</td>
          <td data-label="Số Lượng">12</td>
          <td data-label="Kích thước">Trung Bình</td>
          <td data-label="Trạng Thái">
            Đang Xử Lý
                            </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableOrder;