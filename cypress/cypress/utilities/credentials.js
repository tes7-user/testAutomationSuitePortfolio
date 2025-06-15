export function extractAndEnterUserPassword() {
  let encryptedPass = Cypress.config("cred").split(",");
  let decreptedPass = "";
  encryptedPass.map((eachValue) => {
    decreptedPass += String.fromCharCode(eachValue);
  });
  return decreptedPass;
}
export const generateRandomString = (len) =>
  Array.from({ length: len }, () =>
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
      Math.floor(Math.random() * 62)
    )
  ).join("");
