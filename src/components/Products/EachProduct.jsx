import Axios from 'axios';
import React, { useContext, useState } from 'react';
import { store } from 'react-notifications-component';
import { ProductContext } from '../../ContextApi/ProductContext';
import UpdateIcon from '../assets/icon-edit.svg'
import DeleteIcon from '../assets/icon-trash-black.svg'
import Popup from '../Popup/PopupRemoveItem'
function EachProduct({ ele }) {
  const { allProducts, setAllProducts } = useContext(ProductContext)
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleRemove = () => {
    removeItem();
  }
  const handleOpenPopup = () => {
    setShow(true)
  }
  async function getProducts() {
    await Axios.get('http://localhost:3000/api/all-product')
      .then(res => res.data)
      .then(data => {
        console.log(data)
        setAllProducts(data)
      }).catch(err => {
        console.log(err)
      })
  }
  async function removeItem() {
    console.log(ele)
    await Axios.delete(`http://localhost:3000/api/all-product/${ele._id}`, {
    }).then(res => res.data)
      .then(data => {
        console.log(data)
        store.addNotification({
          title: "Successfully!",
          message: "Remove a product",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 1500,
            onScreen: true
          }
        })
        getProducts()
        setShow(false)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <tr>
      <Popup
        handleRemove={handleRemove}
        handleClose={handleClose}
        show={show}
      />
      <td data-label="STT">{1}</td>
      <td data-label="Tên sản phẩm">{ele.name}</td>
      <td data-label="Hình ảnh"><img src={ele.img} alt="" /></td>
      <td data-label="Giá SP">{ele.price}</td>
      <td data-label="Đã bán">1</td>
      <td>{ele.numberInStock}</td>
      <td data-label="Thời gian">{ele.createAt}</td>
      <td data-label="Sửa" className="right__iconTable"><a href><img src={UpdateIcon} alt="" /></a></td>
      <td data-label="Xoá" className="right__iconTable">
        <p className="m-0">
          <img src={DeleteIcon} onClick={handleOpenPopup} alt="" />
        </p>
      </td>
    </tr>
  );
}

export default EachProduct;