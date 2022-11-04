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
      return this.actionProvider.handleWelcome();
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
      message.includes("beaches")
    ) {
      return this.actionProvider.handleBeaches();
    }
    else if (
      message.includes("núi") ||
      message.includes("mount") ||
      message.includes("mountain")
    ) {
      return this.actionProvider.handleMountain();
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
    else {
      return this.actionProvider.handleJoke();
    }
  }
}

export default MessageParser;
