// import { ENV } from "@config/index";

// const sendSmsVerification = async (phoneNumber) => {
//   try {
//     const data = JSON.stringify({
//       to: phoneNumber,
//       channel: "sms",
//     });

//     const response = await fetch(`${ENV.phone_base_api}/start-verify`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: data,
//     });

//     const json = await response.json();
//     return json.success;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// };

// const checkVerification = async (phoneNumber, code) => {
//   try {
//     const data = JSON.stringify({
//       to: phoneNumber,
//       verification_code: code,
//     });

//     const response = await fetch(`${ENV.phone_base_api}/check-verify`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: data,
//     });

//     const json = await response.json();
//     return json.success;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// };

// export { sendSmsVerification, checkVerification };
