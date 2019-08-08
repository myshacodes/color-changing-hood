function updateHood(e) {
  var buttonColor = e.target.value.trim();
  console.log(buttonColor);
  document.querySelector("#hood").style.backgroundColor = buttonColor;
}
