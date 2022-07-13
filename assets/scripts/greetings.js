$(document).ready(function () {
  const eventSelector = document.getElementById("eventSelector");

  const url = "https://picsum.photos/200";

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));

  $("#formButton").click(function (e) {
    e.preventDefault();

    if (eventSelector.value === "wedding") {
      $("#myForm").hide();
      document.getElementById("para").innerHTML =
        '<img src="https://images.squarespace-cdn.com/content/v1/5a6e635f268b96417e6213d0/1517770864977-T4886BU7E9XQMK93UO86/image-asset.jpeg?format=1000w" />';
      document.getElementById("message").innerHTML =
        document.getElementById("greeting").value +
        " " +
        document.getElementById("msg").value;
    } else if (eventSelector.value === "divorce") {
      $("#myForm").hide();
      document.getElementById("para").innerHTML =
        '<img src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2018/02/LifeAfterDivorce-1280359257-770x533-1.jpg" />';
      document.getElementById("message").innerHTML =
        document.getElementById("greeting").value +
        " " +
        document.getElementById("msg").value;
    } else if (eventSelector.value === "birthday") {
      $("#myForm").hide();
      document.getElementById("para").innerHTML =
        '<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-birthday-instagram-captions-1584723902.jpg" />';
      document.getElementById("message").innerHTML =
        document.getElementById("greeting").value +
        " " +
        document.getElementById("msg").value;
    } else {
      console.log("ERROR!!!");
    }
  });
});
