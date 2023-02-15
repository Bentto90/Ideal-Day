const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '04a7b63742mshe31a0e0ebbb49f8p1cd7ebjsn812e3735989f',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};
// linking btns and keywords from HTML input to javascript function
const searchKeyword = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');


// creating functions to display youtube search result into the website.
let keyword = ''
function callkeyword () {
    keyword = searchKeyword.value
    fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q="things to do in "${keyword}`, options)
        .then(response => response.json())
        .then(data => {
            let output = '';
            // selecting only title and url so get rid of unwanted information
            data.items.map(item => {
                output += `
                    <h4>${item.title}</h4>
                    <ol>
                    <a href="${item.url}">${item.url}</a>
                    </ol>
                    `;
                  
            })
            document.querySelector('.results').innerHTML = output;
        })
        .catch(err => console.error(err));

    searchKeyword.value = '';
}


searchBtn.addEventListener('click', callkeyword)
