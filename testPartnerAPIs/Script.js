// JavaScript source code

var xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        console.log(responseObject);

    }

};

console.log('opening URL')
xhr.open('GET', 'https://microsoft-apiapp7990763c55c84008a011aa8d388576e5.azurewebsites.net/api/Partners', true);
xhr.send(null);



