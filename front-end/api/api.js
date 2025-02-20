import axios from "axios";
import "dotenv/config";

const NODE_ENV = process.env.NODE_ENV;
const url = NODE_ENV === "development" ? "http://localhost:3001/api" : "/api";

const responseArtists = await axios.get(`${url}/artists`);
const responseSongs = await axios.get(`${url}/songs`);

const artistArray = responseArtists.data;
const songsArray = responseSongs.data;

export { artistArray, songsArray };