import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Left from '../Left';
import EachCustomer from './EachCustomer';

function Customer(props) {
  const [customer, setCustomer] = useState([]);
  useEffect(() => {

  }, [])
  async function fetchData() {
    await fetch('')
  }
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
                     <EachCustomer />

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