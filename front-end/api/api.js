import axios from "axios";

const url = "http://localhost:3001";

const responseArtists = await axios.get(`${url}/artists`);
const responseSongs = await axios.get(`${url}/songs`);

const artistArray = responseArtists.data;
const songsArray = responseSongs.data;

export { artistArray, songsArray };