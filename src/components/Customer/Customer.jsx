import React from 'react';
import Left from '../Left';

function Customer(props) {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="dashboard">
          <Left />
          <div className="right">
            <div className="right__content">
              <div className="right__title">Bảng điều khiển</div>
              <p className="right__desc">Xem sản phẩm</p>
              <div className="right__table">
                <div className="right__tableWrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th style={{ textAlign: 'center' }}>Hình ảnh</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Địa chỉ</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="STT">1</td>
                        <td data-label="Hình ảnh" style={{ textAlign: 'center' }}><img style={{ width: '50px', height: '50px', borderRadius: '100%', objectFit: 'cover' }} src="assets/profile1.jpg" alt="" /></td>
                        <td data-label="Tên">dangthimydung</td>
                        <td data-label="Email">dangthimydung@gmail.com</td>
                        <td data-label="Phone">0836730193</td>
                        <td data-label="Địa chỉ">Cà Mau</td>

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

export default Customer;