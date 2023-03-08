import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {

	params: {
		url: BASE_URL,
		maxResults: 50,
	},
	
	headers: {
		'X-RapidAPI-Key': '7d0a7af718mshb4848ad4cc38a6bp193bf1jsn2d18b9bf67f7',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	}
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data
}