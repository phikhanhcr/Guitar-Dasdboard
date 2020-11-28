import React, { useContext, useState } from 'react';
import deleteIcon from '../assets/icon-trash-black.svg'
import checkIcon from '../assets/icon-check.svg'
import Axios from 'axios';
import { UserContext } from '../../ContextApi/UserContext';


function EachOrder({ ele, index }) {
  const [valueSelected, setValueSelected] = useState(ele.condition)
  const { userData } = useContext(UserContext)

  const handleChangeValue = async e => {
    console.log(ele)
    console.log(e.target.value)
    setValueSelected(e.target.value)
    UpdateCondition(valueSelected)
  }
  async function UpdateCondition(update) {
    await Axios.put(`http://localhost:3000/api/admin-donhang/${ele.ownId}`, {
      condition: update
    }, {
      headers: { 'x-auth-token-admin': userData.tokenAdmin }
    })
      .then(res => res.data)
      .then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <tr>
      <td data-label="STT">{index + 1}</td>
      <td data-label="Email" style={{ textAlign: 'left' }}>{ele.email}</td>
      <td>{ele.name}</td>
      <td data-label="Số Hoá Đơn">{ele.address}</td>
      <td>{ele.address}</td>
      <td data-label="Số Lượng">{ele.cart.idProduct.name}</td>
      <td data-label="Kích thước">{ele.cart.amount}</td>
      <td data-label="Trạng Thái">
        <select onChange={handleChangeValue} value={valueSelected}>
          <option value="dang-cho-xac-nhan">Chờ xác nhận</option>
          <option value="dang-giao">Đang giao</option>
          <option value="da-giao">Đã giao</option>
          <option value="da-huy">Đã Hủy</option>
        </select>
      </td>
    </tr>
  );
}

export default EachOrder;