const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c847c94837msh769cdaeccd7bcbdp1df16ajsn03d64a2f2860',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

const userInput = document.querySelector('#search-input');
const btn = document.querySelector('#search-btn');


let params = ''
const callParams = () => {
    fetch(`https://travel-advisor.p.rapidapi.com/locations/search?querry=${params}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`, options)
	    .then(response => response.json())
	    .then(response => console.log(response))
	    .catch(err => console.error(err));
    userInput.value = '';
}
btn.addEventListener('click', callParams)



