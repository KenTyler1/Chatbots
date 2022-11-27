import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>VỊ TRÍ SANG TRỌNG BAO GỒM CHO HAI NGƯỜI</h2>
                    <p>Hãy đến trải nghiệm đỉnh cao của những kỳ nghỉ trọn gói sang trọng ở vùng Caribê dành cho các cặp đôi tại Sandals Resorts. Các khu nghỉ dưỡng bãi biển sang trọng của chúng tôi, nằm dọc theo khung cảnh nhiệt đới tuyệt đẹp nhất và những bãi biển tinh tế ở Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados và Curaçao, có dịch vụ ăn uống dành cho người sành ăn không giới hạn, các quán bar độc đáo phục vụ rượu và rượu hảo hạng, mọi vùng đất và nước thể thao, bao gồm phí đánh gôn miễn phí tại các khu nghỉ dưỡng chơi gôn của chúng tôi và lặn biển có bình dưỡng khí được PADI® chứng nhận tại hầu hết các khu nghỉ dưỡng. Nếu bạn đang lên kế hoạch cho một đám cưới, Sandals là nhà cung cấp hàng đầu trong các gói tiệc cưới và tuần trăng mật tại các điểm đến ở Caribê.</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>HÀNG ĐẦU THẾ GIỚI</h3>
                                <p>CÔNG TY ĐỘC QUYỀN TRONG 20 NĂM IN-A-ROW</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>KHÔNG CÓ CÔNG TY NÀO CÓ</h3>
                                <p>CÔNG TY ĐỘC QUYỀN TRONG 20 NĂM LIÊN TIẾP</p>
                                <button>View Packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">ĐƯỢC GIẢM THÊM 7%</h4>
                        <p className="timer">12 TIẾNG SAU</p>
                        <p className="offers">XEM TẤT CẢ CÁC ƯU ĐÃI HIỆN TẠI</p>
                    </div>
                    <form>
                        <div className="input-wrap">
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
                        </div>
                        <button>Rates & Availabilities </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
