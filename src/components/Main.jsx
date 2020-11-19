
import './Main.css';
import { dropDownMenuEvent } from '../middleware/openMenu'
import TableOrder from './Table/TableOrder';
import Left from './Left';
import ArrowIcon from './assets/arrow-right.svg'
import ViewIcon from './assets/arrow-right-black.svg'
function Main() {

  return (
    <div className="wrapper">
      <div className="container">
        <div className="dashboard">
          <Left />
          <div className="right">
            <div className="right__content">
              <div className="right__title">Bảng điều khiển</div>
              <p className="right__desc">Bảng điều khiển</p>
              <div className="right__cards">
                <a className="right__card" href="/product">
                  <div className="right__cardTitle">Sản Phẩm</div>
                  <div className="right__cardNumber">72</div>
                  <div className="right__cardDesc">Xem Chi Tiết <img src={ArrowIcon} alt="" />
                  </div>
                </a>
                <a className="right__card" href="/customer">
                  <div className="right__cardTitle">Khách Hàng</div>
                  <div className="right__cardNumber">12</div>
                  <div className="right__cardDesc">Xem Chi Tiết <img src={ArrowIcon} alt="" />
                  </div>
                </a>
                <a className="right__card" href="/catalogs">
                  <div className="right__cardTitle">Danh Mục</div>
                  <div className="right__cardNumber">4</div>
                  <div className="right__cardDesc">Xem Chi Tiết <img src={ArrowIcon} alt="" />
                  </div>
                </a>
                <a className="right__card" href="/order">
                  <div className="right__cardTitle">Đơn Hàng</div>
                  <div className="right__cardNumber">72</div>
                  <div className="right__cardDesc">Xem Chi Tiết <img src={ArrowIcon} alt="" />
                  </div>
                </a>
              </div>
              <d iv className="right__table">
                <p className="right__tableTitle">Đơn hàng mới</p>
                <div className="right__tableWrapper">
                  <TableOrder />
                </div>
                <a href="/order" className="right__tableMore">
                  <p className="">Xem tất cả các đơn đặt hàng</p> <img src={ViewIcon} alt="" />
                </a>
              </d>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
