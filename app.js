let prices = [18300000, 12350000];
let qty = [1, 1];
let count = 0;
let total = 0;

function plus(i) {
  qty[i]++;
  document.getElementById("q" + i).innerText = qty[i];
}

function minus(i) {
  if (qty[i] > 1) {
    qty[i]--;
    document.getElementById("q" + i).innerText = qty[i];
  }
}

function add(i) {
  count += qty[i];
  total += prices[i] * qty[i];
  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = total.toLocaleString();
}


function clearCart() {
  count = 0;
  total = 0;
  document.getElementById("count").innerText = 0;
  document.getElementById("total").innerText = 0;
}