import React from "react";
import "./SearchStyles.css";

import Gold from "../../assets/gold.png";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>TRẢI NGHIỆM TẤT CHUYẾN DU LỊCH CỦA BEACHES</h2>
          <p>
            Hãy đến trải nghiệm đỉnh cao của những kỳ nghỉ sang trọng của
            BEACHES dành cho các tất cả mọi người trong Việt Nam nói riêng và
            ngoài nước nói chung. Các khu nghỉ dưỡng bãi biển sang trọng của
            chúng tôi, nằm dọc theo khung cảnh nhiệt đới tuyệt đẹp nhất và những
            bãi biển tinh tế ở Saint Lucia, Jamaica, Antigua, The Bahamas,
            Grenada, Barbados và Curaçao, có dịch vụ ăn uống dành cho người sành
            ăn không giới hạn, các quán bar độc đáo phục vụ rượu và rượu hảo
            hạng, mọi vùng đất và nước thể thao, bao gồm phí đánh gôn miễn phí
            tại các khu nghỉ dưỡng chơi gôn của chúng tôi và lặn biển có bình
            dưỡng khí được PADI® chứng nhận tại hầu hết các khu nghỉ dưỡng. Nếu
            bạn đang lên kế hoạch cho một đám cưới, Sandals là nhà cung cấp hàng
            đầu trong các gói tiệc cưới và tuần trăng mật tại các điểm đến ở
            Việt Nam.
          </p>
          <div className="search-col-2">
            <div className="box">
              <div>
                <img src={Gold} alt="/" style={{ marginRight: "1rem" }} />
              </div>
              <div>
                <h3>HÀNG ĐẦU THẾ GIỚI</h3>
                <p>CÔNG TY ĐỘC QUYỀN TRONG 20 NĂM IN-A-ROW</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>BEACHES MỞ RỘNG TRÊN 7 QUỐC GIA</h3>
                <p>HOẠT ĐỘNG HƠN 20 NĂM TRONG NGÀNH DU LỊCH</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">CHUYẾN DU LỊCH ĐỘC ĐÁO</h4>
            <p className="timer">
              Song song là các dịch vụ tuyệt vời và giá cả hợp lý
            </p>
            <p className="offers">XEM DANH SÁCH TOUR DƯỚI ĐÂY</p>
          </div>
          <form>
            {/* <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">Grande Antigua</option>
                                <option value="1">Grenda</option>
                                <option value="1">Emerald Bay</option>
                                <option value="1">Bora Bora</option>
                                <option value="1">Key West</option>
                                <option value="1">Maldives</option>
                                <option value="1">Barbados</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div> */}
            <Link to="/products">
              <button>Danh sách tour</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
