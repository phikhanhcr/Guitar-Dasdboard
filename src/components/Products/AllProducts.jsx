import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Left from '../Left';

import { ProductContext } from '../../ContextApi/ProductContext';
import EachProduct from './EachProduct';

function AllProducts(props) {
  const { allProducts } = useContext(ProductContext)
  return (
    <div className="wrapper">
      <div className="container">
        <div className="dashboard">
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
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Giá SP</th>
                        <th>Đã bán</th>
                        <th>Số lượng còn lại</th>
                        <th>Thời gian</th>
                        <th>Sửa</th>
                        <th>Xoá</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allProducts.length && allProducts.map((ele, index) => (
                         <EachProduct ele={ele} key={index}/>
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

export default AllProducts;