function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('name').value

    console.log("::: Form Submitted :::" + formText)

    if(Client.isValidUrl(formText)) {
        fetch('http://localhost:8081/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: formText})
        })
        .then(res => res.json())
        .then( resJson =>  {
            document.getElementById('results').innerHTML = JSON.stringify(resJson)
        })
    } else {
        alert("URL is Invalid. Please correct the form.")
    }
}

function onBlur(event) {
    // check what text was put into the form field
    const formText = document.getElementById('name').value
    console.log("::: Leaving Text Input :::", formText)
    if(Client.isValidUrl(formText)){

    }
    else {

    }
}

export { handleSubmit, onBlur }
