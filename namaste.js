// const cart = ["shoes", "pants", "kurtas"];

// const promise = createOrder(cart);
// // console.log(promise);

// promise
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   })

//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })

//   .then(function (message, amount) {
//     console.log(message, amount);
//     return orderSummary(message, amount);
//   })
//   .then(function (orderId) {
//     console.log("No matter what happens, This will be printed.");
//   });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }

//     // logic for createOrder
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Successful");
//   });
// }

// function orderSummary(paymentInfo, amount) {
//   return new Promise(function (resolve, reject) {
//     if (amount > 200) {
//       resolve({ message: `Your ordered items cost ${amount}` });
//     } else {
//       reject(new Error("Please buy for more discount"));
//     }
//   });
// }

// function validateCart(cart) {
//   return true;
// }
