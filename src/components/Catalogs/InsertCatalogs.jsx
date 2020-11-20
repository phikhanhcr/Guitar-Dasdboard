import Axios from 'axios';
import React, { useContext, useState } from 'react';
import { store } from 'react-notifications-component';
import Left from '../Left';


function InsertCatalogs(props) {
  const [input, setInput] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    await Axios.post('http://localhost:3000/api/catalogs', {
      name: input
    }).then(res => res.data)
      .then(data => {
        console.log(data)
        if (data.catalogExist) {
          store.addNotification({
            title: "Warming",
            message: "Already exist catalogs",
            type: "warning",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 1500,
              onScreen: true
            }
          })
          return;
        }
        store.addNotification({
          title: "Successfully!",
          message: "Create new product",
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
        setInput('');
      }).catch(err => {
        console.log(err);
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
              <p className="right__desc">Chèn danh mục</p>
              <div className="right__formWrapper">
                <form action method="post">
                  <div className="right__inputWrapper">
                    <label htmlFor="title">Tiêu đề</label>
                    <input
                      value={input}
                      onChange={e => setInput(e.target.value)}
                      type="text"
                      placeholder="Tiêu đề"
                      required
                    />
                  </div>
                  <button className="btn btn-dark" onClick={handleClick} type="submit">Thêm danh mục</button>
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