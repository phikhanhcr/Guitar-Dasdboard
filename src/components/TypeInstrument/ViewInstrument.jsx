import React from 'react';
import Left from '../Left';


function ViewInstrument(props) {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="dashboard">
          <Left />
          <div className="right">
            <div className="right__content">
              <div className="right__title">Bảng điều khiển</div>
              <p className="right__desc">Xem danh mục</p>
              <div className="right__table">
                <div className="right__tableWrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Mô tả</th>
                        <th>Sửa</th>
                        <th>Xoá</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="STT">1</td>
                        <td data-label="Tiêu đề">Dress</td>
                        <td data-label="Mô tả">Thiết kế nhẹ nhàng, trẻ trung và lãng đãng!</td>
                        <td data-label="Sửa" className="right__iconTable"><a href><img src="assets/icon-edit.svg" alt="" /></a></td>
                        <td data-label="Xoá" className="right__iconTable"><a href><img src="assets/icon-trash-black.svg" alt="" /></a></td>
                      </tr>
                      <tr>
                        <td data-label="STT">2</td>
                        <td data-label="Tiêu đề">Top + Skirt</td>
                        <td data-label="Mô tả">Thiết kế nhẹ nhàng, trẻ trung và lãng đãng!</td>
                        <td data-label="Sửa" className="right__iconTable"><a href><img src="assets/icon-edit.svg" alt="" /></a></td>
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

export default ViewInstrument;