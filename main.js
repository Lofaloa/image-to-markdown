const fs = require('fs');
const vision = require('@google-cloud/vision');

const write = (fileName, data) => {
    const json = JSON.stringify(data, null, 3);
    fs.writeFile(fileName, json, 'utf8', (error) => {
        if (error) {
            console.error(error);
        } else {
            console.log(`Data written to ${fileName}.`);
        }
    });
};

const detectText = async () => {
    const client = new vision.ImageAnnotatorClient();
    const fileName = './samples/long.png';
    const [result] = await client.textDetection(fileName);
    write('result.json', result);
};

const start = async () => {
    console.log("Image to markdown...");
    try {
        await detectText();
    } catch (error) {
        console.error(error);
    }
};

start();