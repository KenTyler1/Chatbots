// ActionProvider starter code
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  handleWelcome = () => {
    var hi = [
          "Xin chào, tôi là Crazy Bot. Tôi có thể giúp gì cho bạn ?",
          "Chắc hẳng bạn phải tuyệt vọng lắm mới tìm đến chúng tôi để hỗ trợ. Tôi có thể hỗ trợ gì được cho bạn nè =))",
          "Hello bạn nha, bạn cần được chúng tôi hỗ trợ gì nè hihi ",
          "Hi bạn, mọi thắc mắc của bạn sẽ được tôi giải đáp hết tất cả cho bạn. Bạn có câu hỏi gì nè ?",
          "Hí bạn nhen, hôm nay là một ngày đẹp chời ha. Hông biết bạn có muốn đi chơi vào hôm nay hông ?",
          "Chào mừng bạn đến với bình nguyên vô tận =)), tôi là CrazyBot rất zui đc hỗ trợ cho bạn. Bạn cần gì ở chúng tôi ?",
        ];
    
        var randomHi = hi[Math.floor(Math.random() * hi.length)];
    
        const message = this.createChatBotMessage(randomHi);
    
        this.addMessageToState(message);
  }

  handleConfirm = () => {
    const message = this.createChatBotMessage(
      "Thật tuyệt vời! Chúc bạn có một chuyến đi đầy thú vị. BEACHES xin gửi bản tham khảo thêm một vài địa điểm nha",
      {
        widget: "confirm",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleBeaches = () => {
    const message = this.createChatBotMessage(
      "BEACHES xin gửi bạn tham khảo một địa điểm nha",
      {
        widget: "beaches",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleSayNo = () => {
    var no = [
      "Oh zậy nào bạn có thì hú cho tôi nha hihi",
      "Hmmm, khi nào bạn có cần gì ở chúng tôi thì hãy ib cho tôi nha. Cám ơn bạn nhiều nhen <3",
      "Cám ơn bạn, chúng tôi sẽ luôn hỗ trợ bạn 24/7, bất cứ khi nào bạn cần chúng tôi sẽ có mặt =))",
      "Hông sao, khi nào cần hãy ib cho tôi nha. Tôi sẽ giúp hết sức có thể <3",
      "Khi nào có hãy nói cho chúng tôi để được hỗ trợ hết mình nha, tôi là CrazyBot thân mến hihi ",
      "Cũng hông sao, tôi là CrazyBot. Hãy gọi tên tôi khi cần sự giúp đỡ nha. Mãi iu bạn hihi",
    ];

    var randomNo = no[Math.floor(Math.random() * no.length)];

    const message = this.createChatBotMessage(randomNo);

    this.addMessageToState(message);
  };

  handleNotyet = () => {
    const message = this.createChatBotMessage(
      "Tuyệt vời! Quý khách có muốn BEACHES thiết kế cho bạn một chuyến đi phù hợp không?",
      {
        widget: "notyet",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };
  handleContact = () => {
    const message = this.createChatBotMessage(
      "Gọi đến số 0328 688 481 để được chúng tôi hỗ trợ trực tiếp nha",
      {
        widget: "contact",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };

  handleJoke = () => {
    var jokes = [
      "Xin lỗi, tôi vẫn chưa hiểu ý của bạn lắm !",
      "Hình như bạn gõ nhầm gì đó, vui lòng gõ lại để tôi hiểu được bạn cần gì nào !",
      "Vui lòng rep lại đi ạ !",
      "Có sai sót ở đâu đó òi, rep lại nha bạn :)))",
      "Tôi chưa hiểu bạn đang cần hỗ trợ gì ạ ?",
      "Sr fen, tôi chưa hiểu lắm !",
    ];

    var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    const message = this.createChatBotMessage(randomJoke);

    this.addMessageToState(message);
  };

  handleExplore = () => {
    const message = this.createChatBotMessage(
      "Hãy ghi dấu cuộc đời bạn bằng những chuyến đi",
      {
        widget: "explore",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    );
    this.addMessageToState(message);
  };

  handleResort = () => {
    const message = this.createChatBotMessage(
      "Hãy ghi dấu cuộc đời bạn bằng những chuyến đi",
      {
        widget: "resort",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    );
    this.addMessageToState(message);
  };

  handleBack = () => {
    const message = this.createChatBotMessage(
      "Hãy trả lời một số câu hỏi dưới đây để BEACHES tìm hiểu thêm về bạn nhé!",
      {
        widget: "back",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    );
    this.addMessageToState(message);
  };

  handleFamily = () => {
    const message = this.createChatBotMessage(
      "Gia đình luôn là điểm tựa cho mỗi khi mình mệt mỏi! Hãy cùng gia đình tận hưởng một kỳ nghỉ thật tuyệt vời nha",
      {
        widget: "family",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    );
    this.addMessageToState(message);
  };

  handleFriend = () => {
    const message = this.createChatBotMessage(
      "Với hội bạn thân lâu năm sẽ chẳng có chuyện gì khiến bạn cảm thấy gò bó , du lịch với bạn bè không chỉ để thụ hưởng mà còn là để tình bạn thêm khăng khít",
      {
        widget: "family",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    );
    this.addMessageToState(message);
  };

  handleAlone = () => {
    const message = this.createChatBotMessage(
      "Đi du lịch một mình luôn là một trải nghiệm khó quên. Hãy tự mình trải nghiệm những khoảnh khắc thú vị này nhé",
      {
        widget: "alone",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    );
    this.addMessageToState(message);
  };

  handleRecommend = () => {
    const message = this.createChatBotMessage(
      "Tuyệt vời bạn đang muốn đi du lich theo phong cách nào?",
      {
        widget: "recommend",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    );
    this.addMessageToState(message);
  };

  handleNo = () => {
    const message = this.createChatBotMessage(
      "Cảm ơn Quý khách ! Khi nào cần sự hỗ trợ từ BEACHES thì liên hệ với chúng mình nha. Yêu thương !",
      {
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      },
    );
    this.addMessageToState(message);
  };

  handleMountain= () => {
    const message = this.createChatBotMessage(
      "BEACHES xin gửi bạn tham khảo một địa điểm nha",
      {
        widget: "mountain",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  }
  // handleBye = () => {
  //   var bye = [
  //     "Hẹn gặp lại bạn sau nha.",
  //     "Rất hân hạnh được hỗ trợ bạn.",
  //     "Cảm ơn bạn ! Khi nào cần sự hỗ trợ từ BEACHES thì liên hệ với chúng mình nha. Yêu thương !",
  //     "Hy vọng bạn lựa chọn được chuyến đi phù hợp cho bản thân mình nha hihi",
  //     "Oh bye bạn nha, rất vui khi BEACHES đã giúp giải đáp các thắc mắc cho bạn nha",
  //     "Hy vọng những gì BEACHES đã tư vấn ở trên có thể hỗ trợ cho sự lựa chọn chuyển đi của bạn trở nên thuận lợi hơn nha",
  //   ];

  //   var randomBye = bye[Math.floor(Math.random() * bye.length)];

  //   const message = this.createChatBotMessage(randomBye);

  //   this.addMessageToState(message);
  // };
  handleRating = () => {
    const message = this.createChatBotMessage(
      "Cám ơn bạn vì đã tin tưởng chúng tôi, chúng tôi có thể lấy ý kiến của bạn được không ạ",
      {
        widget: "rating",
        loading: true,
        terminateLoading: true,
        withAvatar: true,
      }
    );

    this.addMessageToState(message);
  };
  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
