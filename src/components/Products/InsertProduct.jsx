import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { store } from 'react-notifications-component';
import Left from '../Left';

function InsertProduct(props) {
  const [catalogs, setCatalogs] = useState([]);
  const [selectPicked, setSelectPicked] = useState('Chọn Danh Mục');
  const [selectGroup, setSelectGroup] = useState('Chọn thể loại');
  const [linkRefGroup, setLinkRefGroup] = useState([]);
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [specificIdGroup, setSpecificIdGroup] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function fetchData() {
      await Axios.get('http://localhost:3000/api/catalogs')
        .then(res => res.data)
        .then(data => {
          setCatalogs(data);
        }).catch(err => {
          console.log(err)
        })
    }
    fetchData()
  }, []);

  useEffect(() => {
    async function fetchData() {
      await Axios.get(`http://localhost:3000/api/group/${selectPicked}`)
        .then(res => res.data)
        .then(data => {
          setLinkRefGroup(data)
        }).catch(err => {
          console.log(err)
        })
    }
    fetchData()
  }, [selectPicked])

  const handleNumberInput = (e) => {
    setAmount(e.target.value)
  }
  const handleTitleInput = (e) => {
    setTitle(e.target.value)
  }
  const handleCatalogsInput = (e) => {
    console.log(e.target.value)
    setSelectPicked(e.target.value)
  }
  const handleGroupInput = (e) => {
    console.log(e.target.value)
    const indexGroup = linkRefGroup.findIndex(ele => {
      return ele.linkRef === e.target.value
    })
    console.log(linkRefGroup[indexGroup]._id)
    setSpecificIdGroup(linkRefGroup[indexGroup]._id)
    setSelectGroup(e.target.value)
  }
  const handlePriceInput = (e) => {
    setPrice(e.target.value)
  }
  const handleImg = async e => {
    const files = e.target.files;
    console.log(files);
    if (files) {
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'Instagram')
      await fetch(
        'https://api.cloudinary.com/v1_1/pklevi/image/upload',
        {
          method: 'POST',
          body: data
        }
      ).then(res => res.json())
        .then(data => {
          console.log(data.url)
          setLoading(true)
          setImg(data.url)
        }).catch(err => {
          console.log(err)
        })
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await Axios.post('http://localhost:3000/api/all-product', {
      name: title,
      numberInStock: amount,
      price,
      img,
      groupId: specificIdGroup,
      description,
    }).then(res => res.data)
      .then(data => {
        console.log(data)
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
        setAmount('');
        setDescription('');
        setImg('')
        setLoading(false)
        setTitle('')
        setPrice('')
        setSelectPicked('Chọn danh mục')
        setSelectGroup('Chọn thể loại')
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
              <p className="right__desc">Thêm sản phẩm</p>
              <div className="right__formWrapper">
                <form enctype="multipart/form-data">
                  <div className="right__inputWrapper">
                    <label htmlFor="title">Tiêu đề</label>
                    <input
                      type="text"
                      placeholder="Tiêu đề"
                      onChange={handleTitleInput}
                      value={title}
                      required={true}

                    />
                  </div>
                  <div className="right__inputWrapper">
                    <label htmlFor="p_category">Danh mục</label>
                    <select onChange={handleCatalogsInput} value={selectPicked}>
                      <option selected>Chọn danh mục</option>
                      {
                        catalogs.map(ele => (
                          <option value={ele.linkRef}> {ele.name} </option>
                        )
                        )
                      }
                    </select>
                  </div>
                  <div className="right__inputWrapper">
                    <label htmlFor="category">Thể loại</label>
                    <select value={selectGroup} onChange={handleGroupInput}>
                      <option selected>Chọn thể loại</option>
                      {
                        linkRefGroup.map(ele => (
                          <option value={ele.linkRef}>{ele.name}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className="right__inputWrapper">
                    <label htmlFor="image">Hình ảnh </label>
                    <input type="file" name="avatar" onChange={handleImg} />
                    {
                      loading ? <div>
                        <img className="w-100 mt-3" src={img} alt="img-product" />
                      </div> : <div></div>
                    }
                  </div>

                  <div className="right__inputWrapper">
                    <label htmlFor="title">Giá sản phẩm</label>
                    <input
                      type="text"
                      placeholder="Giá sản phẩm"
                      onChange={handlePriceInput}
                      value={price}
                    />
                  </div>

                  <div className="right__inputWrapper">
                    <label htmlFor="title">Số Lượng</label>
                    <input
                      type="value"
                      placeholder="Số Lượng"
                      onChange={handleNumberInput}
                      value={amount}
                    />
                  </div>
                  <div className="right__inputWrapper">
                    <label htmlFor="desc">Mô tả</label>
                    <textarea
                      cols={30}
                      rows={10}
                      placeholder="Mô tả"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      defaultValue={""}
                    />
                  </div>
                  <button onClick={handleSubmit} className="btn btn-dark" type="submit">Thêm Sản Phẩm</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsertProduct;