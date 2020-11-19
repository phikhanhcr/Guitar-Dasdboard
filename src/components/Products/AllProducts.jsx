import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Left from '../Left';
import UpdateIcon from '../assets/icon-edit.svg'
import DeleteIcon from '../assets/icon-trash-black.svg'

function AllProducts(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {

    getData()
  }, [])
  async function getData() {
    await Axios.get('http://localhost:3000/api/all-product')
      .then(res => res.data)
      .then(data => {
        console.log(data)
        setProducts(data)
      }).catch(err => {
        console.log(err)
      })
  }
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
                        products.length && products.map((ele, index) => (
                          <tr key={index}>
                            <td data-label="STT">{index + 1}</td>
                            <td data-label="Tên sản phẩm">{ele.name}</td>
                            <td data-label="Hình ảnh"><img src={ele.img} alt="" /></td>
                            <td data-label="Giá SP">{ele.price}</td>
                            <td data-label="Đã bán">1</td>
                            <td>{ele.numberInStock}</td>
                            <td data-label="Thời gian">{ele.createAt}</td>
                            <td data-label="Sửa" className="right__iconTable"><a href><img src={UpdateIcon} alt="" /></a></td>
                            <td data-label="Xoá" className="right__iconTable"><a href><img src={DeleteIcon} alt="" /></a></td>
                          </tr>
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