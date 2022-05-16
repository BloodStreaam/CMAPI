const express = require('express');

const BusInfo = require("../classes/busInfo");
const axios = require('axios');
const { json } = require('express/lib/response');
const app = express.Router()


app.get("/view/allAgencies", async (req, res) => {
    
    const config = {
        method: 'post',
        url: 'http://localhost:3000/api/v1/agencies',
        body: JSON.stringify({ 
            query: { agency_key: 'carris' } 
        })
    }

    let resposta = await axios(config)
    console.log(resposta)
    res.status(200).json( resposta.data );
}); 

app.get("/view/allCalendars", async (req, res) => {

    const config = {
        method: 'post',
        url: 'http://localhost:3000/api/v1/calendars',
    }

    let resposta = await axios(config)
    res.status(200).json( resposta.data );
}); 

app.get("/view/allFrequencies", async (req, res) => {
    
    const config = {
        method: 'post',
        url: 'http://localhost:3000/api/v1/frequencies',
    }

    let resposta = await axios(config)
    res.status(200).json( resposta.data );
}); 

app.get("/view/allRoutes", async (req, res) => {
    
    const config = {
        method: 'post',
        url: 'http://localhost:3000/api/v1/routes',
    }

    let resposta = await axios(config)
    res.status(200).json( resposta.data );
});

app.get("/view/allShapes", async (req, res) => {
    
    const config = {
        method: 'post',
        url: 'http://localhost:3000/api/v1/shapes',
    }

    let resposta = await axios(config)
    res.status(200).json( resposta.data );
}); 

app.get("/view/allShapes/geojson", async (req, res) => {
    
    const config = {
        method: 'post',
        url: 'http://localhost:3000/api/v1/shapes-geojson',
    }

    let resposta = await axios(config)
    res.status(200).json( resposta.data );
}); 

app.get("/view/allStops", async (req, res) => {
    
    const config = {
        method: 'post',
        url: 'http://localhost:3000/api/v1/stops',
    }

    let resposta = await axios(config)
    res.status(200).json( resposta.data );
}); 

app.get("/view/allStops/geojson", async (req, res) => {
    
    const config = {
        method: 'post',
        url: 'http://localhost:3000/api/v1/stops-geojson',
       
    }

    let resposta = await axios(config)
    res.status(200).json( resposta.data );
}); 


app.get("/view/allStopTimes", async (req, res) => {
    
    const config = {
        method: 'post',
        url: 'http://localhost:3000/api/v1/stop-times',
    }

    let resposta = await axios(config)
    res.status(200).json( resposta.data );
}); 

app.get("/view/allTrips", async (req, res) => {
    
    const config = {
        method: 'post',
        url: 'http://localhost:3000/api/v1/trips',
    }

    let resposta = await axios(config)
    res.status(200).json( resposta.data );
}); 

module.exports = app