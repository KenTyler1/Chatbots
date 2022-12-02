
const Options = (props) => {
  return (
    <div className="options">
      <div className="stats">
        <p>
          Vào tháng 2 năm 2020, công ty đổi tên thành BEACHES.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Vào ngày 28 tháng 4 năm 2020, BEACHES đã thông báo cho nhân viên rằng công ty sẽ cắt
          giảm 600 việc làm ở Việt Nam và 300 việc làm khác ở các quốc gia khác
          như một phần trong kế hoạch cắt giảm 25% lực lượng lao động của họ
          trên toàn thế giới.Công ty cũng cho biết họ sẽ đóng cửa các văn phòng
          ở trung tâm thành phố Boston và San Francisco (mặc dù trụ sở chính ở
          Việt Nam). Việc giảm là do đại dịch COVID-19. 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Vào ngày 8 tháng 12 năm 2020, Trung Quốc đã chặn 105 trang web, bao gồm cả BEACHES, khỏi các
          trang web. Cục Quản lý Không gian mạng Trung Quốc tuyên bố rằng các
          trang web này là "bất hợp pháp" và công chúng lo ngại về "thông tin
          tục tĩu, khiêu dâm và bạo lực hoặc lừa đảo, cờ bạc và mại dâm". 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Vào tháng 11 năm 2021, Kaufer thông báo rằng ông sẽ nghỉ hưu vào năm 2022.
          Anh ấy vẫn ở vị trí của mình cho đến khi Giám đốc điều hành mới được
          bổ nhiệm. 
          &nbsp;
          Vào tháng 3 năm 2022, do đại dịch COVID-19, BEACHES đã tuyên
          bố hợp tác với công ty Walgreens của Mỹ để hỗ trợ việc đi lại an toàn
          trong kỳ nghỉ xuân và kỳ nghỉ học ở Hoa Kỳ. 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Vào tháng 5 năm 2022, Matt
          Goldberg được công bố là Giám đốc điều hành mới của BEACHES.
        </p>
      </div>
      {/* <img src={logo} width={250} style={{ borderRadius: 20 }} alt={Image} /> */}
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
