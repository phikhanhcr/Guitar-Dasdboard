import React from 'react';

function EachCustomer(props) {
  return (
    <tr>
      <td data-label="STT">1</td>
      <td data-label="Hình ảnh" style={{ textAlign: 'center' }}><img style={{ width: '50px', height: '50px', borderRadius: '100%', objectFit: 'cover' }} src="assets/profile1.jpg" alt="" /></td>
      <td data-label="Tên">dangthimydung</td>
      <td data-label="Email">dangthimydung@gmail.com</td>
      <td data-label="Phone">0836730193</td>
      <td data-label="Địa chỉ">Cà Mau</td>

    </tr>
  );
}

export default EachCustomer;