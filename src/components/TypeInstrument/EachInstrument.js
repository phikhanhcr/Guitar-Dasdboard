import React from 'react';
import UpdateIcon from '../assets/icon-edit.svg'
import DeleteIcon from '../assets/icon-trash-black.svg'
function EachInstrument({ ele , index}) {
  return (
    <tr>
      <td data-label="STT">{index + 1}</td>
      <td data-label="Tiêu đề">{ele.name}</td>
      <td data-label="Mô tả">{ele.catalog.name}</td>
      <td data-label="Mô tả">{ele.createAt}</td>
      <td data-label="Sửa" className="right__iconTable"><a href><img src={UpdateIcon} alt="" /></a></td>
      <td data-label="Xoá" className="right__iconTable"><a href><img src={DeleteIcon} alt="" /></a></td>
    </tr>
  );
}

export default EachInstrument;