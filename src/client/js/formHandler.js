function handleSubmit(event) {
    // prevents website from reloading when user clicks 'submit'
    event.preventDefault();

    // save entered URL into a variable
    const formURL = document.getElementById('url').value;
    Client.checkURL(formURL);

    fetch("http://localhost:8081/test", {
            method: "POST",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({formURL}),
        })
        .then((res) => res.json())
        .then((res) => {
            updateUI(res);
        })
}

const updateUI = async (res) => {
  console.log(res);
  document.getElementById('results').insertAdjacentHTML('beforeend', "Website: " + res.sentimented_entity_list[0].form);
  document.getElementById('results').insertAdjacentHTML('beforeend', "<br> Polarity: " + res.score_tag.toLowerCase());
  document.getElementById('results').insertAdjacentHTML('beforeend', "<br> Agreement: " + res.agreement.toLowerCase());
  document.getElementById('results').insertAdjacentHTML('beforeend', "<br> Subjectivity: " + res.subjectivity.toLowerCase());
  document.getElementById('results').insertAdjacentHTML('beforeend', "<br> Confidence: " + res.confidence.toLowerCase());
  document.getElementById('results').insertAdjacentHTML('beforeend', "<br> Irony: " + res.irony.toLowerCase());
  document.getElementById('results').insertAdjacentHTML('beforeend', "<br><br>");
}

export { handleSubmit }
