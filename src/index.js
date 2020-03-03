function generateRandomString() {
  function randStr() {
    return Math.random()
      .toString(36)
      .substring(2, 15);
  }

  return randStr() + randStr();
}
document.addEventListener("DOMContentLoaded", function() {
  var randomString = `Random String: <span>${generateRandomString()}</span>`;
  window.setTimeout(function() {
    document.getElementsByTagName("h1")[0].innerHTML = randomString;
  }, 1000);
});
