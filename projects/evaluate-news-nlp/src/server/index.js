const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
const https = require('follow-redirects').https;

dotenv.config();
const port = 8081;

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const server = app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

// test endpoint
app.get('/test', function (req, res) {
    res.send({
        'title': 'test json response',
        'message': 'this is a message',
        'time': 'now'
    })
})

// post endpoint
app.post('/sentiment', function (req, res) {

    // using MeaningCloud
    const options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': `/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&url=${req.body.url}`,
        'headers': {
        },
        'maxRedirects': 20
    };

    const request = https.request(options, (response) => {
        const chunks = [];
    
        response.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        response.on("end", function (chunk) {
            const body = Buffer.concat(chunks);
            const retJson = JSON.parse(body.toString())

            // removing detailed information 
            // According to Aylien API document, we need only high level info.
            // {
            //     "polarity":"positive",
            //     "subjectivity":"subjective",
            //     "text":"John is a very good football player",
            //     "polarity_confidence":0.9999936601153382,
            //     "subjectivity_confidence":0.9963778207617525
            // }
            if(retJson.status.code === '0'){
                delete retJson.status
                delete retJson.sentence_list
                delete retJson.sentimented_entity_list
                delete retJson.sentimented_concept_list
            }
            else {
                console.error('API call error: '+retJson.status.code)
            }
            res.json(retJson);
        });
    
        response.on("error", function (error) {
            console.error(error);
            res.send(error);
        });
    });

    request.end();
})

module.exports = { app, server }