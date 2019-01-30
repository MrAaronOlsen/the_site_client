const get = function(address, callback) {
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');

  var request = new Request('http://localhost:8080/api/v1/' + address, {
    method: 'GET',
    mode: 'cors',
    headers: headers
  });

  fetch(request)
    .then(response => response.json())
    .then(jsonData => {
      callback(jsonData);
    })
    .catch(err => { console.log(err) })
}

export default { get }