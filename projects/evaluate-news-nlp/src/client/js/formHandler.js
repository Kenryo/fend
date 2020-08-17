const Client = require('./validateUrl')

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('name').value

    console.log("::: Form Submitted :::" + formText)

    if(Client.isValidUrl(formText)) {
        fetch('http://localhost:8081/sentiment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: formText})
        })
        .then(res => res.json())
        .then( resJson =>  {
            document.getElementById('results').innerHTML = '<pre><code>' + JSON.stringify(resJson, null, 4) + '</code></pre>'
        }).catch(() => {
            document.getElementById('results').innerHTML = 'Error Occured!!'
        });
    } else {
        alert("URL is Invalid. Please correct the form.")
    }
}

function onBlur(event) {
    // check what text was put into the form field
    const formText = document.getElementById('name').value
    console.log("::: Leaving Text Input :::", formText)
    if(Client.isValidUrl(formText)){
        document.getElementById('name').style.backgroundColor = 'white';
    }
    else {
        document.getElementById('name').style.backgroundColor = 'pink';
    }
}

export { handleSubmit, onBlur }
