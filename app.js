//click event for user input and function call
$("#enter").on("click", function() {    
  let message = $("#userMessage").val();
  const msgArr = message.split("");
  console.log(msgArr);
  $("#messageDisplay").append("<br/>" + shift_by_13(msgArr));
});

//algorithm to encode user String
function shift_by_13(msgArr) {
  const charVal = msgArr.map(index => index.charCodeAt());
  console.log(charVal);
  for (let i = 0; i < charVal.length; i++) {
    if (
      (65 <= charVal[i] && charVal[i] <= 77) ||
      (97 <= charVal[i] && charVal[i] <= 109)
    ) {
      charVal[i] += 13;
    } else if (
      (78 <= charVal[i] && charVal[i] <= 90) ||
      (110 <= charVal[i] && charVal[i] <= 122)
    ) {
      charVal[i] -= 13;
    }
  }
  return String.fromCharCode.apply(String, charVal);
}
