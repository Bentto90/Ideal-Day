var websites = {
	"seattle": "https://visitseattle.org/",
	"newport beache": "https://www.visitnewportbeach.com/things-to-do/?gclid=CjwKCAiA_6yfBhBNEiwAkmXy56ETJmirB5EdTtTpV6s7Kl3nkUsAvytSvN1__z1br_0UpEcx_wlBIhoCUGEQAvD_BwE",
	"new york": "https://www.iloveny.com/",
	"LA": "https://www.discoverlosangeles.com/",
	"Los Angeles": "https://www.discoverlosangeles.com/",
	"washington DC": "https://washington.org/",
	"cancun": "https://www.mexicancaribbean.travel/cancun/",
	"sandiego": "https://www.sandiego.org/explore/things-to-do.aspx?gclid=CjwKCAiA_6yfBhBNEiwAkmXy50TVArt31cXIjBgP8HT0HMfaQnDoo1Rln2h4KDi9Puw16OGYgRwLgBoCfroQAvD_BwE",
	"San Francisco": "https://www.thesanfranciscopeninsula.com/blog/home/?gclid=CjwKCAiA_6yfBhBNEiwAkmXy56SCvlZMrIahMaoGPCevARzSxVpJwUQl6xUu34JGnsmDufKQOTsktRoCuoUQAvD_BwE",
	"sequoia": "https://www.visitsequoia.com/?gclid=CjwKCAiA_6yfBhBNEiwAkmXy51ZsgLQoGuiLucwqgfKFfwI7D2CvKJ__H4InuJQVxSGHyK1ZuAyRTRoCOeQQAvD_BwE",
	"florida": "https://www.visitflorida.com/?1046905575_565840850549_54200801427=&cid=PS_M8_GPS_&gclid=CjwKCAiA_6yfBhBNEiwAkmXy55UxX--gNJZkkB-neuYkSEZPGgocGaW2ddkXmjZLlF4-RtXbD77AxRoCeGEQAvD_BwE&gclsrc=aw.ds",
	"beijing": "https://english.visitbeijing.com.cn/",
	"seoul": "https://english.visitseoul.net/index",
	"paris": "https://en.parisinfo.com/",
	"portland": "https://www.travelportland.com/?utm_source=google&utm_medium=adwords&utm_campaign=summer&utm_term=Travel%20Portland&utm_content=General%20Portland&gclid=CjwKCAiA_6yfBhBNEiwAkmXy5y6rjH2H4t8qlClukt86Nvq2mbDK_Sy9O2c6OzzEPHH1bOvoW3JARBoCpzsQAvD_BwE",
	"cebu": "https://guidetothephilippines.ph/articles/what-to-experience/cebu-tourist-spots-1",
	"denver": "https://www.denver.org/",
	"boston": "https://www.meetboston.com/",
	"miami": "https://www.miamiandbeaches.com/miami-meetings?gclsrc=aw.ds&&gclid=CjwKCAiA_6yfBhBNEiwAkmXy5yK2cqJyIHWus20bzjHwCBfsxZwuD4g4qRhgdnTRAFX2InLpcj8IyRoCk48QAvD_BwE&mkwid=s%7Cpcrid%7C456308241245%7Cpkw%7Cconvention+center+in+miami%7Cpmt%7Cb%7Cpdv%7Cc%7C",
	"london": "https://www.visitlondon.com/"
  };

  function searchWebsite() {
	var keyword = document.getElementById("search").value;
	if (keyword in websites) {
	  document.getElementById("result").innerHTML = "<a href='" + websites[keyword] + "'>Click here to visit " + keyword + " and find things to do</a>";
	} else {
	  document.getElementById("result").innerHTML = "City not found search youtube instead!";
	}
  }


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c847c94837msh769cdaeccd7bcbdp1df16ajsn03d64a2f2860',
// 		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
// 	}
// };

// const userInput = document.querySelector('#search-input');
// const btn = document.querySelector('#search-btn');


// let params = ''
// const callParams = () => {
// 	params = userInput.value
// 	fetch(`https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${params}&lang=en_US&units=km`, options)
// 	.then(response => response.json())
// 	.then(data => {
// 		const arrays = data.data.Typeahead_autocomplete.results;
// 		const category = data.data.Typeahead_autocomplete.results.buCategory;
// 		const name = data.data.Typeahead_autocomplete.results.text;
// 		console.log(arrays);
// 		console.log(category);
// 		console.log(name);
// 	})
// 	.then(json => console.log(json))
// 	.then(response => console.log(JSON.stringify(response)))
// 	.catch(err => console.error(err));

// userInput.value = '';
// }


// btn.addEventListener('click', callParams)



