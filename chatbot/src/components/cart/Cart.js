import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "./DataProvider";
import Sizes from "./Sizes";
import GooglePayButton from "@google-pay/button-react";

export default function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

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
    if (window.confirm("Do you want to delete this product?")) {
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
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
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
            <h3>${product.price}</h3>
            <Sizes sizes={product.sizes} />
            <p>{product.description}</p>
            <p>{product.content}</p>

            <div className="amount">
              <button className="count" onClick={() => reduction(product._id)}>
                {" "}
                -{" "}
              </button>
              <span>{product.count}</span>
              <button className="count" onClick={() => increase(product._id)}>
                {" "}
                +{" "}
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
