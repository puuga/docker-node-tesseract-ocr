const tesseract = require("node-tesseract-ocr")

const config = {
  lang: "tha+eng",
  oem: 1,
  psm: 3,
}

const img = "https://d2djcanq21z3xp.cloudfront.net/custom-landing-page/cdn-v2/39303935-6530-3862-2d32-3562352d3131.jpg"
tesseract.recognize(img, config)
  .then(text => {
    console.log("Result:", text)
  })
  .catch(error => {
    console.log(error.message)
  })