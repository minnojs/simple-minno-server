const fs = require('fs');
const express = require('express');
const shortid = require('shortid');

const dataFolder = __dirname + '/data';
const studyFolder = __dirname + '/study';
const app = express();


if (!fs.existsSync(dataFolder)) fs.mkdirSync(dataFolder);
if (!fs.existsSync(studyFolder)) fs.mkdirSync(studyFolder);

app.set('port', (process.env.PORT || 5000));

// serve static files
// serve only index.html from root
app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'));
app.use('/study', express.static(studyFolder));

app.post('/csv', (req, res) => {
    const fileStream = fs.createWriteStream(uniqueFilename());
    req.pipe(fileStream);
    req.on('end', () => res.sendStatus(1));

    function uniqueFilename(){ return `${dataFolder}/${shortid.generate()}.csv`; }
});

app.listen(app.get('port'), function() {
    console.log('MinnoJS is running on port', app.get('port'));
});

