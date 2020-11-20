import React, { useState } from 'react';
import UpdateIcon from '../assets/icon-edit.svg'
import DeleteIcon from '../assets/icon-trash-black.svg'
import Popup from '../Popup/PopupRemoveItem'
function EachCatalogs({ ele }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleRemove = () => {
    removeItem();
  }
  const handleOpenPopup = () => {
    console.log(ele)
    setShow(true)
  }
  async function removeItem() {
    // check relationship in mongodb ( n- n )
  }
  return (
    <tr >
      <Popup
        handleRemove={handleRemove}
        handleClose={handleClose}
        show={show}
      />
      <td data-label="STT">{1}</td>
      <td data-label="Tiêu đề">{ele.name}</td>
      <td>{ele.createAt}</td>
      <td data-label="Sửa" className="right__iconTable"><a href><img src={UpdateIcon} alt="" /></a></td>
      <td data-label="Xoá" className="right__iconTable">
        <p className="m-0 cursor-pointer" onClick={handleOpenPopup}><img src={DeleteIcon} alt="" />
        </p>
      </td>
    </tr>
  );
}

export default EachCatalogs;