let submitbtn = document.querySelector("form");
submitbtn.addEventListener("submit", submitdata);

function submitdata() {
  event.preventDefault();

  let phone = document.getElementById("phone").value;
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let service = document.querySelector("#service-drop").value;
  let msg = document.querySelector("#message").value;

  console.log(phone, name, email, service, msg);

  postdataapi(name, phone, email, msg, service);
  window.location.href = "./thankyou.html";
}



function postdataapi(n, p, e, m, s) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    crossDomain: true,
    headers: {
      Accept: "*/*",
    },
  };

  fetch(
    `https://lms.xcelmarketing.in/API/SaveLeads?Name=${n}&Email=${e}&Phno=${p}&SourceId=4&CategoryId=${s}&CityID=1&Remarks=${m}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
