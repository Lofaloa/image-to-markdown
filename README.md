# image-to-markdown
Tool that converts an image of a document to a markdown file.

## Dependencies
- [@google-cloud/vision](https://www.npmjs.com/package/@google-cloud/vision)

## Setup
[Google's tutorial](https://cloud.google.com/vision/docs/ocr#vision_text_detection-nodejs)

- You need to create a [Google Cloud account](https://console.cloud.google.com/freetrial?_ga=2.120725192.1739508555.1617802461-1265849604.1617802461).
- Billing needs to be enabled

## Optical character recognition
### Options
- The Google Vision API has an optical character recognition (OCR) that makes it possible to [read text from images](https://cloud.google.com/vision/docs/ocr).
- [Microsoft OCR APIs](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/overview-ocr).
- [Amazon Rekognition](https://docs.aws.amazon.com/rekognition/latest/dg/text-detection.html).

I might go with the Google service. This seems super straight forward.

## Resources
- [Google Vision APIs, text detection sample](https://github.com/googleapis/nodejs-vision/blob/master/samples/textDetection.js)