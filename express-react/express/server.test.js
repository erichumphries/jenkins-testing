const fs = require("fs")
const request = require("supertest")
const baseURL = "http://localhost:5000"
const caption = 'sample caption'
const image = "sampleimage.png"

describe("Post to Backend", () => {
    test("Successfully posted an image and caption", (done) => {
        const req = request(app)
            .post(`${baseURL}/api/posts`)
            .set('file', "application/octet-stream")
            .set('caption', caption)

        const imageStream = fs.createReadStraam(image);
        imageString.on('end', req.end(done))
        imageStream.pipe(req, {end: false})
    }) 
})