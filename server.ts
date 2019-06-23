/**
 * The backend has an API created with Express.js.
 * Source: https://expressjs.com/
 * 
 * I created APIService with a flexible function to get a JSON object from an API call.
 * I also created AssetFactory which creates instances of Asset types and returns an array of Assets.
 */
import express from 'express';
import cors from 'cors';
import * as APIService from './services/APIService';
import * as AssetFactory from './services/AssetFactory';

const app: express.Application = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * The URL of the API we want to fetch data from and the limit of assets we want to receive.
 * OpenSea has put the limit at 300 assets/API call.
 */
const limit = 300;
const baseUrl: string = `https://api.opensea.io/api/v1/assets?limit=${limit}`;

/**
 * If the server is running on Heroku it will use the provided port.
 * If the server is running locally it will use port 3200.
 */
const port: string = process.env.PORT || '3200';

app.listen(port, () => {
    console.log('Server started on port', port);
    console.log("Press CTRL-C to stop");
});

app.get('/', (req, res) => {
    APIService.getJSON(baseUrl, (result: any) => {
        let assets = AssetFactory.createAssets(result);
        res.send(assets);
    });  
});