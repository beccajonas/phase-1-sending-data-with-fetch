// Post Fetch Data
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        // The second argument of the fetch function is an object that contains the request options
        method: 'POST',
        // The headers option is an object that specifies the headers of the request
        headers: {
            'Content-Type': 'application/json', // Telling server what to send
            'Accept': 'application/json' // Telling server what we accept
            },
            // The body option contains the data that will be sent as the request payload
            // In this case, it's a JSON string that contains the name and email values
        body: JSON.stringify({'name' : name, 'email' : email})
        })

    .then((response) => {
        return response.json()
    })
    // The object that represents the parsed JSON data is logged to the console
    .then(data => {
       return renderElement(data)
    })
    .catch(error => {
        renderError(error)
    })
}

function renderElement(data) {
    let body = document.querySelector('body')
    let name = document.createElement('p')
    name.textContent = `${data.id}`


    body.appendChild(name)
}

function renderError(error) {
    let body = document.querySelector('body')
    let message = document.createElement('p')
    message.textContent = error.message


    body.appendChild(message)
}

submitData('becca', 'becca@email.com');



