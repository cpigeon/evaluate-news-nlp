function handleSubmit(event) {
    // prevents website from reloading when user clicks 'submit'
    event.preventDefault()

    // save entered URL into a variable
    const formURL = document.getElementById('url').value
    Client.checkURL(formURL)

    // const postData = async (url = "", data = {}) => {
    //   const res = await fetch(url, {
    //     method: 'POST', // access the POST route setup in server side code
    //     credentials: 'same-origin',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     // Body data type must match "Content-Type" header
    //     body: JSON.stringify(data), // how we access data on the server side - data sent to a web server has to be a STRING and it is attached to the body of the request
    //   });
    //
    //   try {
    //     const newData = await res.json();
    //     console.log(newData)
    //     return newData;
    //   } catch(error) {
    //     console.log("error", error);
    //   }
    // }
    //
    // postData('/testpost', {url: formURL})


    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    //     console.log(res.message)
    // })

    fetch("http://localhost:8080/test", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formURL),
        })
        .then((res) => res.json())
        // .then((res) => {
        //     updateUI(res);
        // })

}

export { handleSubmit }
