export function extractAndEnterUserPassword() {
  let encryptedPass = Cypress.config("cred").split(",");
  let decreptedPass = "";
  encryptedPass.map((eachValue) => {
    decreptedPass += String.fromCharCode(eachValue);
  });
  return decreptedPass;
}
