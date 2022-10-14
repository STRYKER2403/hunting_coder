const fs = require('fs');

export default async function handler(req, res) {

    let data = await fs.promises.readdir("blogdata")
    data = data.slice(0,parseInt(req.query.count))
    let allBlogs = [];

    for (let index = 0; index < data.length; index++) {
        let element = data[index];
        // console.log(element)
        let myFile = await fs.promises.readFile(("blogdata/" + element),"utf-8");
        allBlogs.push(JSON.parse(myFile));
    }
    res.status(200).json(allBlogs)

  }