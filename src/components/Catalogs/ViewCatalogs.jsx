import React, { useContext, useState } from 'react';
import { CatalogsContext } from '../../ContextApi/CatalogsContext';
import Left from '../Left';
import EachCatalogs from './EachCatalogs';

function ViewCatalogs(props) {
  const { allCatalogs } = useContext(CatalogsContext)
  
  return (
    <div className="wrapper">
      <div className="container">
        <div className="dashboard">
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
                        <th>Ngày tạo</th>
                        <th>Sửa</th>
                        <th>Xoá</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        allCatalogs.length && allCatalogs.map((ele, index) => (
                          <EachCatalogs 
                            ele={ele}
                            key={index}
                          />
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

export default ViewCatalogs;