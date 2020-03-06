import generateRandomString from "./utils/random";

document.addEventListener("DOMContentLoaded", function() {
  var randomString = `Random String: <span>${generateRandomString()}</span>`;
  window.setTimeout(function() {
    document.getElementsByTagName("h1")[0].innerHTML = randomString;
  }, 1000);
});
