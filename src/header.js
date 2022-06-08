import React from "react"
import { useState } from "react"

function Header () {
    
    const [col, setCol] = useState(4)
    const displayHandler = () => {
        const colum = document.getElementById('displayCol')
        
          if (colum.value() === 1) {
            setCol(col = 12)
          } else if (colum.value() === 2) {
            setCol(col = 6)
          } else if (colum.value() === 3) {
            setCol(col = 4)
          } else {
            setCol(col = 3)
          }
      }
    return <React.Fragment>
        <div className="header">
            <div>
                <h1 className="title">Ứng dụng quản lý nhân sự v1.0</h1>
            </div>
            <div className="setting-btn">
                <ul>
                    <li><p className="hide">settings</p>
                    <ul className="setting-list">
                        
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
                    </li>
                </ul>
                    
            </div>
        </div>

        {/* <div className="setting-btn show">
            <ul>
                <li>
                    <h5>Hiển thị:</h5>
                    <select id="displayCol" onChange={displayHandeler}>
                        <option value="1">1 cột</option>
                        <option value="2">2 cột</option>
                        <option value="3">3 cột</option>
                        <option value="4">4 cột</option>
                    </select>
                </li>
            </ul>
        </div> */}

        </React.Fragment>
    
}

export default Header