const pass_here = document.getElementById("pass-here");
const pl = document.getElementById("len");
const uppercase_check = document.getElementById("upper");
const lowercase_check = document.getElementById("lower");
const number_check = document.getElementById("number");
const symbol_check = document.getElementById("symbol");
const btn = document.getElementById("Generate");

const Uppercase = "ABCDEFGHIJKLMNROPWYSQWUZ";
const Lowercase = "abcdefghijklmnopqrstuwyz";
const list_number = "1234567890";
const symbol = "~!@#$%^&*?|";

function gu() {
  return Uppercase[Math.floor(Math.random() * Uppercase.length)];
}
function gl() {
  return Lowercase[Math.floor(Math.random() * Lowercase.length)];
}
function gn() {
  return list_number[Math.floor(Math.random() * list_number.length)];
}
function gs() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}
function generate_X() {
  const list = [];
  if (uppercase_check.checked) {
    list.push(gu());
  }
  if (lowercase_check.checked) {
    list.push(gl());
  }
  if (number_check.checked) {
    list.push(gn());
  }
  if (symbol_check.checked) {
    list.push(gs());
  }
  if (list.length === 0) {
    return "";
  }
  return list[Math.floor(Math.random() * list.length)];
}
function generate_password() {
  const len = pl.value;
  let pass = "";
  for (let i = 0; i < len; i++) {
    let x = generate_X();
    pass += x;
  }
  pass_here.value = pass;
}

btn.addEventListener("click", generate_password);
