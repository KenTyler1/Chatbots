const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>
          Thương hiệu đáng chú ý nhất của công ty, BEACHES.com, đã đạt 463 triệu
          lượt khách truy cập trung bình hàng tháng vào năm
          2019.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vào
          tháng 12 năm 2020, trang web đã thu hút 90,2 triệu lượt truy cập và
          ứng dụng BEACHES nằm trong số 10 ứng dụng du lịch hàng đầu tại 26 quốc
          gia tính đến tháng 1 năm 2021.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Trang web có phiên bản tại 49 thị trường và 28 ngôn ngữ trên toàn thế
          giới.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Nó có khoảng 859 triệu đánh giá và ý kiến về khoảng 8,6 triệu cơ
          sở—bao gồm 1,4 triệu khách sạn, nhà trọ, nhà nghỉ chỉ phục vụ bữa sáng
          và nhà nghỉ đặc biệt, 842.000 tài sản cho thuê, 5,2 triệu nhà hàng và
          1,2 triệu trải nghiệm du lịch trên toàn thế giới.
        </p>
      </div>
      <h1 className="options-header">{props.title}</h1>
      <div className="options-container">
        {props.options.map((option) => {
          return (
            <div
              className="option-item"
              onClick={option.handler}
              key={option.id}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
