async function getContent(){

	try{
		const response = await fetch('http://localhost:2000/')

		const data = await response.json()
		show(data);

	}catch(error){
		console.log(error)
	}
}


getContent()

	function show(city){

		let results = city.results;
		let nextDay = results.forecast[1];

		document.querySelector(".cidade").innerHTML = results.city;
		document.querySelector(".temperatura").innerHTML = `${results.temp}°`;
		document.querySelector(".umidade").innerHTML = `${results.humidity}%`;
		document.querySelector(".vento").innerHTML = results.wind_speedy;
		document.querySelector(".condicao").innerHTML = results.description;
		document.querySelector(".temperaturaTomorrow").innerHTML = `${nextDay.max}°`;
	}