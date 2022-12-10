import React, { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "./DataProvider";
import Sizes from "./Sizes";
import GooglePayButton from "@google-pay/button-react";
import emailjs from "@emailjs/browser";

export default function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);
  const [room, setRoom] = useState(1);
  const [audult, setAdult] = useState(2);
  const [children, setChildren] = useState(1);
  const [userData] = value.data;

  const [show, setShow] = useState(false);

  //HandlerRoom
  const handleIncreaseRoom = () => {
    setRoom((room) => room + 1);
  };
  const handleDecreaseRoom = () => {
    setRoom((room) => room - 1);
  };

  //Handler Audult
  const handleIncreaseAudult = () => {
    setAdult((audult) => audult + 1);
  };
  const handleDecreaseAdult = () => {
    setAdult((audult) => audult - 1);
  };

  //Handler Children
  const handleIncreaseChildren = () => {
    setChildren((children) => children + 1);
  };
  const handleDecreaseChildren = () => {
    setChildren((children) => children - 1);
  };
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res.toFixed(2));
    };
    getTotal();
  }, [cart]);

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

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [administrativeArea, setAdministrativeArea] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [locality, setLocality] = useState("");
  const [fullname, setName] = useState("");
  const [postalCode, setPostalCode] = useState("");

  console.log(
    address1,
    address2,
    administrativeArea,
    countryCode,
    locality,
    fullname,
    postalCode
  );

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6qaqh0d",
        "template_f4xsgln",
        form.current,
        "XfQOsZRtUv4aFTZr6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  if (cart.length === 0)
    return (
      <h5 style={{ textAlign: "center", fontSize: "5rem" }}>Giỏ hàng trống </h5>
    );

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
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
                  <input type="date" name="check_in" required />
                </div>
                <div className="input-wrap">
                  <label>Check-Out</label>
                  <input type="date" name="check_out" required />
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
                    <button className="count1" onClick={handleDecreaseRoom}>
                      -
                    </button>
                    <span style={{ paddingTop: 5 }}>{room}</span>
                    <button className="count1" onClick={handleIncreaseRoom}>
                      +
                    </button>
                  </div>
                  <div>
                    <h4 style={{ paddingTop: 5 }}>Người lớn</h4>
                    <button className="count1" onClick={handleDecreaseAdult}>
                      -
                    </button>
                    <span style={{ paddingTop: 5 }}>{audult}</span>
                    <button className="count1" onClick={handleIncreaseAudult}>
                      +
                    </button>
                  </div>
                  <div>
                    <h4 style={{ paddingTop: 5 }}>Trẻ em</h4>
                    <button className="count1" onClick={handleDecreaseChildren}>
                      -
                    </button>
                    <span style={{ paddingTop: 5 }}>{children}</span>
                    <button className="count1" onClick={handleIncreaseChildren}>
                      +
                    </button>
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

              <div
                className="delete"
                onClick={() => removeProduct(product._id)}
              >
                X
              </div>
            </div>
            <input type="hidden" name="title" value={product.title} />
            <input type="hidden" name="price" value={product.price$} />
            <input type="hidden" name="age" value={product.age} />
            <input type="hidden" name="time" value={product.time} />
            <input type="hidden" name="phone" value={product.phone} />
            <input type="hidden" name="content" value={product.content} />
            <input type="hidden" name="ticket" value={product.ticket} />
            <input type="hidden" name="tour" value={product.tour} />
            <input type="hidden" name="description" value={product.description} />
            <input type="hidden" name="room" value={room} />
            <input type="hidden" name="audult" value={audult} />
            <input type="hidden" name="children" value={children} />
            <input type="hidden" name="fname" value={userData.fname} />
            <input type="hidden" name="email" value={userData.email} />
            <input type="hidden" name="image" value={product.images[1]} />

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
                totalPrice: `${total}`,
                currencyCode: "USD",
                countryCode: "US",
              },
              shippingAddressRequired: true,
              callbackIntents: ["SHIPPING_ADDRESS", "PAYMENT_AUTHORIZATION"],
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log("Thành công", paymentRequest);
              console.warn(
                setAddress1(paymentRequest.shippingAddress.address1),
                setAddress2(paymentRequest.shippingAddress.address2),
                setAdministrativeArea(
                  paymentRequest.shippingAddress.administrativeArea
                ),
                setCountryCode(paymentRequest.shippingAddress.countryCode),
                setLocality(paymentRequest.shippingAddress.locality),
                setName(paymentRequest.shippingAddress.name),
                setPostalCode(paymentRequest.shippingAddress.postalCode)
              );
            }}
            onPaymentAuthorized={(paymentData) => {
              console.log("Ủy quyền thanh toán thành công", paymentData);
              return { transactionState: "SUCCESS" };
            }}
            onPaymentDataChanged={(paymentData) => {
              console.log("Dữ liệu thanh toán đã thay đổi", paymentData);
              // console.log(paymentData.Object.apiVersion)
              return {};
            }}
            existingPaymentMethodRequired="true"
            buttonColor="black"
            buttonType="Buy"
          />
          <button type="submit">Payment</button>
          <h3>Total: $ {total}</h3>
        </div>
      </form>
    </>
  );
}
