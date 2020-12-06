import React, { useEffect } from 'react';
import iconDashBoard from './assets/icon-dashboard.svg'
import tagIcon from './assets/icon-tag.svg'
import arrowDown from './assets/arrow-down.svg'
import editIcon from './assets/icon-edit.svg'
import iconUsers from './assets/icon-users.svg'
import iconBook from './assets/icon-book.svg'
import iconLogout from './assets/icon-logout.svg'
import iconPencil from './assets/icon-pencil.svg'
import { dropDownMenuEvent } from '../middleware/openMenu';
function Left(props) {
  useEffect(() => {
    console.log("hello world")
    dropDownMenuEvent();
  }, [])


  return (
    <div className="left">
      <span className="left__icon">
        <span />
        <span />
        <span />
      </span>
      <div className="left__content">
        <div className="left__logo">LOGO</div>
        <div className="left__profile">
          <div className="left__image"><img src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/124453310_3374158829476432_5841940573436874260_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=oDyLjKzI7g0AX_yDKrO&_nc_ht=scontent.fhan2-1.fna&oh=122537b23f0ddfc963896277ca856fd0&oe=5FF33A17" alt="avatar" /></div>
          <p className="left__name">Phi Khanh Cr</p>
        </div>
        <ul className="left__menu">
          <li className="left__menuItem">
            <a className="left__title" href="http://localhost:3001/"><img src={iconDashBoard} alt="" />Dashboard</a>
          </li>
          <li className="left__menuItem">
            <div className="left__title"><img src={tagIcon} alt="" />Sản Phẩm
            <img className="left__iconDown" src={arrowDown} alt="" />
            </div>
            <div className="left__text">
              <a className="left__link" href="/product/insert">Chèn Sản Phẩm</a>
              <a className="left__link" href="/product">Xem Sản Phẩm</a>
            </div>
          </li>
          <li className="left__menuItem">
            <div className="left__title"><img src={editIcon} alt="" />Danh Mục SP
            <img className="left__iconDown" src={arrowDown} alt="" /></div>
            <div className="left__text">
              <a className="left__link" href="/catalogs/insert">Chèn Danh Mục</a>
              <a className="left__link" href="/catalogs">Xem Danh Mục</a>
            </div>
          </li>
          <li className="left__menuItem">
            <div className="left__title"><img src={iconBook} alt="" />Thể Loại<img className="left__iconDown" src={arrowDown} alt="" /></div>
            <div className="left__text">
              <a className="left__link" href="/type-instrument/insert">Chèn Thể Loại</a>
              <a className="left__link" href="/type-instrument">Xem Thể Loại</a>
            </div>
          </li>


          <li className="left__menuItem">
            <a href="/customer" className="left__title">
              <img src={iconUsers} alt="" />Khách Hàng
            </a>
          </li>
          <li className="left__menuItem">
            <a href="order" className="left__title"><img src={iconBook} alt="" />Đơn Đặt Hàng</a>
          </li>
          <li className="left__menuItem">
            <a href="edit_css.html" className="left__title"><img src={iconPencil} alt="" />Chỉnh CSS</a>
          </li>
          <li className="left__menuItem">
            <div className="left__title"><img src={iconUsers} alt="" />Admin<img className="left__iconDown" src={arrowDown} alt="" /></div>
            <div className="left__text">
              <a className="left__link" href="/admin/insert">Chèn Admin</a>
              <a className="left__link" href="/admin">Xem Admins</a>
            </div>
          </li>
          <li className="left__menuItem">
            <a href className="left__title"><img src={iconLogout} alt="" />Đăng Xuất</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Left;