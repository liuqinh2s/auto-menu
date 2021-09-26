let xhr = new XMLHttpRequest();
document.cookie = "name=cherry"; // cookie不能跨域
xhr.withCredentials = true; // 前端设置是否带cookie
xhr.open("PUT", "http://localhost:4000/getData", true);
xhr.setRequestHeader("name", "cherry");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.response);
      //得到响应头，后台需设置Access-Control-Expose-Headers
      console.log(xhr.getResponseHeader("name"));
    }
  }
};
xhr.send();
