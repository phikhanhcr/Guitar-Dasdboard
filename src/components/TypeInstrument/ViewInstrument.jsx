import React, { useContext } from 'react';
import { MusicalInstrumentContext } from '../../ContextApi/MusicalInstrumentContext';
import Left from '../Left';
import EachInstrument from './EachInstrument';


function ViewInstrument(props) {
  const { allInstrument } = useContext(MusicalInstrumentContext);
  console.log(allInstrument)
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
                        <th>Danh mục</th>
                        <th>Ngày tạo</th>
                        <th>Sửa</th>
                        <th>Xoá</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allInstrument.length && allInstrument.map((ele, index) => (
                          <EachInstrument ele={ele} key={index} index={index}/>
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

export default ViewInstrument;