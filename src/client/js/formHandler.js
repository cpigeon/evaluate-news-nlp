function handleSubmit(event) {
    // prevents website from reloading when user clicks 'submit'
    event.preventDefault()

    // save entered URL into a variable
    let formURL = document.getElementById('url').value
    Client.checkURL(formURL)

    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

export { handleSubmit }
