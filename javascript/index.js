function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

function init_page_data () {
  console.log('22222222')
  // 清空挡板样式
  let hider = document.getElementById('hider');
  hider.id = 'hider-hidden';
  // 事务逻辑
  let name = getQueryVariable("name");
  let id = getQueryVariable("id");
  const date = new Date();
  name = name ? decodeURI(name) : "张三";
  id = id ? decodeURI(id) : "202012345678901";
  const getSubStr = (num, len) => {
    const s = "0000000" + num;
    return s.substr(s.length - len);
  };
  const date_str =
    [
      date.getFullYear(),
      getSubStr(date.getMonth() + 1, 2),
      getSubStr(date.getDate(), 2)
    ].join("-") +
    " " +
    getSubStr(date.getHours(), 2) +
    ":" +
    getSubStr(date.getMinutes(), 2);
  // console.log("id:", id);
  // console.log("name", name);
  document.getElementById("id").innerText = id;
  document.getElementById("name").innerText = name;
  document.getElementById("date").innerHTML = date_str;
}

window.onload = () => {
  let qr = getQueryVariable("qrresult");
  // 判断是否扫码完成
  if(!qr) {
    var a = document.getElementById('qr-scan');
    a.click();
  }
  console.log(111111);
  const timer = setTimeout(init_page_data, 2500);
  console.log(333333);
  console.log(timer)
};
