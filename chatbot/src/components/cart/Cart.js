import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./DataProvider";
import Sizes from "./Sizes";
import GooglePayButton from "@google-pay/button-react";

export default function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);
  const [room, setRoom] = useState(1);
  const [audult, setAdult] = useState(2);
  const [children, setChildren] = useState(1);

  const [show, setShow] = useState(false);

  //HandlerRoom
  const handleIncreaseRoom = () => {
    setRoom(room => room + 1) 
  } 
  const handleDecreaseRoom = () => {
    setRoom(room => room - 1)
  }

  //Handler Audult
  const handleIncreaseAudult = () => {
    setAdult(audult => audult + 1) 
  }
  const handleDecreaseAdult = () => {
    setAdult(audult => audult- 1)
  }

  //Handler Children
  const handleIncreaseChildren = () => {
    setChildren(children => children + 1) 
  }
  const handleDecreaseChildren = () => {
    setChildren(children => children - 1)
  }
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res.toFixed(2));
    };
    getTotal();
  }, [cart]);

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };
  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Bạn có muốn xóa tour du lịch này ?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  if (cart.length === 0)
    return (
      <h5 style={{ textAlign: "center", fontSize: "5rem" }}>Giỏ hàng trống </h5>
    );

  return (
    <>
      {cart.map((product) => (
        <div className="details cart" key={product._id}>
          <div
            className="img-container"
            style={{ backgroundImage: `url(${product.images[0]})` }}
          />

          <div className="box-details">
            <h2 title={product.title}>{product.title}</h2>
            <h3>${product.price} một người</h3>
            <h4>Khoảng thời gian: {product.time}</h4>
            <h4>Tuổi: {product.age}</h4>
            <Sizes sizes={product.sizes} />
            <div
              className="date"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button onClick={() => setShow(!show)}>Optional</button>
            {show && (
              <div
                className="amount"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 0,
                  margin: "auto",
                }}
              >
                <div>
                  <h4 style={{ paddingTop: 5 }}>Phòng</h4>
                  <button className="count1" onClick={handleDecreaseRoom}>-</button>
                  <span style={{ paddingTop: 5 }}>{room}</span>
                  <button className="count1" onClick={handleIncreaseRoom}>+</button>
                </div>
                <div>
                  <h4 style={{ paddingTop: 5 }}>Người lớn</h4>
                  <button className="count1" onClick={handleDecreaseAdult}>-</button>
                  <span style={{ paddingTop: 5 }}>{audult}</span>
                  <button className="count1" onClick={handleIncreaseAudult}>+</button>
                </div>
                <div>
                  <h4 style={{ paddingTop: 5 }}>Trẻ em</h4>
                  <button className="count1" onClick={handleDecreaseChildren}>-</button>
                  <span style={{ paddingTop: 5 }}>{children}</span>
                  <button className="count1" onClick={handleIncreaseChildren}>+</button>
                </div>
              </div>
            )}
            <p>{product.description}</p>
            <u>
              <b>
                <p>{product.content}</p>
              </b>
            </u>
            <h4>Số điện thoại: {product.phone}</h4>
            <h4>Loại vé: {product.ticket}</h4>
            <h4>Ngôn ngữ: {product.tour}</h4>
            <div className="amount">
              <button className="count1" onClick={() => reduction(product._id)}>
                -
              </button>
              <span>{product.count}</span>
              <button className="count1" onClick={() => increase(product._id)}>
                +
              </button>
            </div>

            <div className="delete" onClick={() => removeProduct(product._id)}>
              X
            </div>
          </div>
        </div>
      ))}

      <div className="total">
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "1",
              currencyCode: "USD",
              countryCode: "US",
            },
            shippingAddressRequired: true,
            callbackIntents: ["SHIPPING_ADDRESS", "PAYMENT_AUTHORIZATION"],
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("Success", paymentRequest);
          }}
          onPaymentAuthorized={(paymentData) => {
            console.log("Payment Authorised Success", paymentData);
            return { transactionState: "SUCCESS" };
          }}
          onPaymentDataChanged={(paymentData) => {
            console.log("On Payment Data Changed", paymentData);
            return {};
          }}
          existingPaymentMethodRequired="false"
          buttonColor="black"
          buttonType="Buy"
        />
        <h3>Total: $ {total}</h3>
      </div>
    </>
  );
}
