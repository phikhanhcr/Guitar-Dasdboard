import React from 'react';
import Left from '../Left';


function InsertCatalogs(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="dashboard">
          <Left />
          <div className="right">
            <div className="right__content">
              <div className="right__title">Bảng điều khiển</div>
              <p className="right__desc">Chèn danh mục</p>
              <div className="right__formWrapper">
                <form action method="post">
                  <div className="right__inputWrapper">
                    <label htmlFor="title">Tiêu đề</label>
                    <input type="text" placeholder="Tiêu đề" />
                  </div>
                  <div className="right__inputWrapper">
                    <label htmlFor="desc">Mô tả</label>
                    <textarea name id cols={30} rows={10} placeholder="Mô tả" defaultValue={""} />
                  </div>
                  <button className="btn btn-dark" type="submit">Chèn</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsertCatalogs;