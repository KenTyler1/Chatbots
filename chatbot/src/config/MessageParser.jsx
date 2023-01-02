// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    console.log(message);

    if (
      message.includes("nói chuyện") ||
      message.includes("nói trực tiếp") ||
      message.includes("quản lý") ||
      message.includes("người thật") ||
      message.includes("gọi") ||
      message.includes("khẩn cấp") ||
      message.includes("liên hệ") ||
      message.includes("hỗ trợ trực tiếp") ||
      message.includes("tư vấn qua cuộc gọi") ||
      message.includes("gọi quản lý")

    ) {
      return this.actionProvider.handleContact();
    }
    else if (
      message.includes("xin chào") ||
      message.includes("a nhon xe o") ||
      message.includes("hi") ||
      message.includes("hello") ||
      message.includes("ní hạo ma") ||
      message.includes("chào") ||
      message.includes("bonjour") 
    ) {
      return this.actionProvider.handleWelcome1();
    }    
    else if (
      message.includes("không") ||
      message.includes("hông") ||
      message.includes("hông bé ơi") ||
      message.includes("không có") ||
      message.includes("hông có") ||
      message.includes("chưa có") ||
      message.includes("hông có") ||
      message.includes("ko có") ||
      message.includes("ko") ||
      message.includes("no") ||
      message.includes("nope") ||
      message.includes("not yet")  
    ) {
      return this.actionProvider.handleSayNo();
    }
    else if (
      message.includes("biển") ||
      message.includes("sea") ||
      message.includes("beaches") ||
      message.includes("tắm biển") ||
      message.includes("gợi ý đi tắm biển") 
    ) {
      return this.actionProvider.handleBeaches();
    }
    else if (
      message.includes("núi") ||
      message.includes("mount") ||
      message.includes("mountain") ||
      message.includes("gợi ý đi leo núi") ||
      message.includes("leo núi")
    ) {
      return this.actionProvider.handleMountain();
    }
    else if (
      message.includes("nghĩ dưỡng") ||
      message.includes("nghỉ dưỡng") ||
      message.includes("resort") 
    ) {
      return this.actionProvider.handlerResort();
    }
    else if (
      message.includes("tour khác") ||
      message.includes("du lịch khác") ||
      message.includes("danh sách khác") 
    ) {
      return this.actionProvider.handleOrder();
    }   
    else if (
      message.includes("có hồ bơi") ||
      message.includes("view đẹp") ||
      message.includes("ngắm bình minh") ||
      message.includes("ngắm hoàng hôn") 
    ) {
      return this.actionProvider.handleIntroduce5();
    }   
    else if (
      message.includes("tạm biệt") ||
      message.includes("bye bye") ||
      message.includes("bái bai") ||
      message.includes("cya") ||
      message.includes("good bye") ||
      message.includes("cám ơn") ||
      message.includes("thank you") ||
      message.includes("bye") ||
      message.includes("ty")
    ) {
      return this.actionProvider.handleRating();
    }
    else if (
      message.includes("đặt") ||
      message.includes("order")
    ) {
      return this.actionProvider.handleOrderTours();
    }
    else {
      return this.actionProvider.handleJoke();
    }
  }
}

export default MessageParser;
