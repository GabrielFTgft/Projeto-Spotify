import { MongoClient } from "mongodb";

const CONNECTION_STRING = "mongodb+srv://Furtado:FurtadoDBPassword@cluster0.ytqix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(CONNECTION_STRING);

const db = client.db("Spotify");

export default db;