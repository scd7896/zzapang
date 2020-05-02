export const getRandomColor = (): string => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  console.log('test')
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export const setCookie = (name: string, value: string, day: number) => {

  // 변수를 선언한다.
  const date = new Date();
  date.setDate(date.getDate() + day);

  let willCookie = "";
  willCookie += name + "=" + encodeURIComponent(value) + ";";
  willCookie += "Expires=" + date.toUTCString() + "";

  // 쿠키에 넣습니다.
  document.cookie = willCookie;
}

export const getCookie = (name: string) => {

  // 변수를 선언한다.
  const cookies = document.cookie.split(";");

  // 쿠키를 추출한다.
  for(let i in cookies) {
      if(cookies[i].search(name) != -1) {
        return decodeURIComponent(cookies[i].replace(name + "=", ""));
      }
  }
}