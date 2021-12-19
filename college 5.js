const request = require("request");
const cheerio = required("cheerio");
const url = "https://collegedunia.com/college/14088-latha-mathavan-engineering-college-lmec-madurai"
console.log("before");
request(url,cb);
function cb(err,response,html)
{
  if(err){
    console.log(err);
  }else {
    extractHTML(html);
  }
}
function rxtractHTML(html){
  let $ = cheerio.load(html);
 let elemsArr = $("jsk-2675951502 card-heading text-tittle font-weight-bold p-4 text-capitalize mb-0")
let text= $(elemsArr[0]).text();
let htmldata= $(elemsArr[0]).html();
console.log("text data",text);
console.log("html data",htmldata);

function rxtractHTML(html){
  let $ = cheerio.load(html);
 let elemsArr = $(".jsk-2675951502 card-heading text-tittle font-weight-bold p-4 text-capitalize mb-0.jsk-2675951502")
let text= $(elemsArr[0]).text();
let htmldata= $(elemsArr[0]).html();
console.log("text data",text);
console.log("html data",htmldata);

}
