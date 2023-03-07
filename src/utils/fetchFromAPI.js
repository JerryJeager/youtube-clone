import axios from 'axios';


const BASE_URL = 'process.env.REACT_APP_RAPID_API_KEY'

const options = {
	
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


export const fetchFromAPI = () => {
    fetch('https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        return response})
	.catch(err => console.error(err));
}