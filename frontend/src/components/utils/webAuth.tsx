import auth0 from "auth0-js";
export const webAuth = new auth0.WebAuth({
  domain: process.env.DOMAIN || "",
  clientID: process.env.CLIENTID || "",
});
