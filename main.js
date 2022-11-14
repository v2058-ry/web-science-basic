var dom1 = document.getElementById('dom1');
dom1.textContent = "DOM操作の練習です";

var dom2 = document.getElementById('dom2');
var new_tag = document.createElement('h3');
new_tag.textContent = "DOMで挿入する見出し";
dom2.appendChild(new_tag);

var dom3 = document.getElementById('dom3');
dom3.currentTime=10;



