import React from 'react';
import Left from '../Left';


function InsertAdmin(props) {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="dashboard">
          <Left />

          <div className="right">
            <div className="right__content">
              <div className="right__title">Bảng điều khiển</div>
              <p className="right__desc">Chèn admin</p>
              <div className="right__formWrapper">
                <form action method="post">
                  <div className="right__inputWrapper">
                    <label htmlFor="name">Tên admin</label>
                    <input type="text" placeholder="Tên admin" />
                  </div>
                  <div className="right__inputWrapper">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="right__inputWrapper">
                    <label htmlFor="password">Mật khẩu</label>
                    <input type="text" placeholder="Mật khẩu" />
                  </div>
                  <div className="p-2 align-items-center justify-content-center right__inputWrapper d-flex flex-column">
                    <label htmlFor="image">Hình ảnh</label>
                    <input type="file" />
                  </div>
                  <button className="btn btn-dark" type="submit">Chèn</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsertAdmin;