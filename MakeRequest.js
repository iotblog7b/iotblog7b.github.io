const Http = new XMLHttpRequest();
const url='https://data.stemi.education/api/v1/streams/clianzyam2985bkxzt12zshfh/events/dimensions';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText);
  const obj = JSON.parse(Http.responseText);
};

