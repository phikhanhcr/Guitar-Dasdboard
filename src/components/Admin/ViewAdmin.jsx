import React from 'react';

import Left from '../Left';


function ViewAdmin(props) {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="dashboard">
          <Left />
          <div className="right">
            <div className="right__content">
              <div className="right__title">Bảng điều khiển</div>
              <p className="right__desc">Xem admins</p>
              <div className="right__table">
                <div className="right__tableWrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Hình ảnh</th>
                        <th>Email</th>
                        <th>Sửa</th>
                        <th>Xoá</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="STT">1</td>
                        <td data-label="Tên">dangthimydung</td>
                        <td data-label="Hình ảnh" style={{ textAlign: 'center' }}><img style={{ width: '50px', height: '50px', borderRadius: '100%', objectFit: 'cover' }} src="assets/profile1.jpg" alt="" /></td>
                        <td data-label="Email">dangthimydung@gmail.com</td>
                        <td data-label="Sửa" className="right__iconTable"><a href="edit_admin.html"><img src="assets/icon-edit.svg" alt="" /></a></td>
                        <td data-label="Xoá" className="right__iconTable"><a href><img src="assets/icon-trash-black.svg" alt="" /></a></td>
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

export default ViewAdmin;