import axios from "axios";

const url = "https://projeto-spotify-9slh.onrender.com/api";

const responseArtists = await axios.get(`${url}/artists`);
const responseSongs = await axios.get(`${url}/songs`);

const artistArray = responseArtists.data;
const songsArray = responseSongs.data;

export { artistArray, songsArray };