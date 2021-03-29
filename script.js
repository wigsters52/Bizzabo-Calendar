fetch('MOCK_DATA.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });



  function appendData(data) {
    var mainContainer = document.getElementById("events");
    for (let event of data) {
      var div = document.createElement("div");
      div.innerHTML = 'Company Name: ' + event.name + ' ' + event.websiteURL;
      mainContainer.appendChild(div);
    }
  }