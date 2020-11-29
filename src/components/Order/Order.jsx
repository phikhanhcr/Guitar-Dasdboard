import React, { useContext } from 'react';
import Left from '../Left';

import { OrderListContext } from '../../ContextApi/OrderContext';
import EachOrder from './EachOrder';
function Order(props) {
  var { allOrder } = useContext(OrderListContext)
  console.log(allOrder)
 
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
                        allOrder.length && allOrder.map((ele, index) => (
                          <EachOrder ele={ele} key={index} index={index}/>
                        ))
                      }

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