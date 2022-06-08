import './App.css';
import { DEPARTMENTS, ROLE, STAFFS } from './staffs'
import { useState } from 'react'
import dateFormat from 'dateformat';



function App() {
    
  const [staffs, setStaffs] = useState(STAFFS)
  const [detail, setDetail] = useState([])
  // const [col, setCol] = useState(4)

  const handlerDetail = (staffId, e) => {
    setDetail(STAFFS.filter(f => f.id === staffId))
    console.log(detail);
  }

  // const displayHandler = () => {
  //   const colum = document.getElementById('displayCol')
    
  //     if (colum.value() == 1) {
  //       setCol(col = 12)
  //     } else if (colum.value() == 2) {
  //       setCol(col = 6)
  //     } else if (colum.value() == 3) {
  //       setCol(col = 4)
  //     } else {
  //       setCol(col = 3)
  //     }
  // }
    
    
  return (
    <div className="App">
      {/* <div className="setting-list">
            <ul>
                <li>
                    <h5>Hiển thị:</h5>
                    <select id="displayCol" onChange={displayHandler}>
                        <option value="1">1 cột</option>
                        <option value="2">2 cột</option>
                        <option value="3">3 cột</option>
                        <option value="4">4 cột</option>
                    </select>
                </li>
            </ul>
        </div> */}
      <div className="staff-name-container">
        <ul className="staff-list col-md-10 offset-md-1 row">
          {staffs.map(staff => {
            return (
              <li key={staff.id} className='staff-name col-md-3' onClick={() => handlerDetail(staff.id)}>
                 Họ và tên: {staff.name}
              </li>
            )
          })}
        </ul>
        <div>
          <button className="toogle-add-btn">Thêm</button>
        </div>
      </div>
      
      <div className="staff-detail-container">
        <ul>
        {detail.map(infor => {
          return (
            <li key={infor.id} className="staff-detail">
              <h4>Họ và tên: {infor.name}</h4>
              <p>Ngày sinh: {dateFormat(infor.doB, "dd/mm/yyyy")}</p>
              <p>Ngày vào công ty: {dateFormat(infor.startDate, "dd/mm/yyyy")}</p>
              <p>Phòng ban: {infor.department.name}</p>
              <p>Số ngày nghỉ còn lại: {infor.annualLeave}</p>
              <p>Số ngày đã làm thêm: {infor.overTime}</p>
              <button className="toogle-edit-btn">Sửa</button>
              <button className="toogle-delete-btn">Xóa</button>
            </li>
          )
        })}

        </ul>
        
      </div>
        
    </div>
  );
}

export default App;