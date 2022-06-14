import R6API from "r6api.js";

const { UBI_EMAIL: email = '', UBI_PASSWORD: password = '' } = process.env;
export const Client = new R6API({ email, password });