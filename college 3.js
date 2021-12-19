const request = require("request");
const cheerio = required("cheerio");
const url = "https://collegedunia.com/college/19147-velammal-college-of-engineering-and-technology-vcet-madurai"
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
 let elemsArr = $(".jsk-2675951502 card-headi ng text-tittle font-weight-bold p4 text-captalize mb-0")
let text= $(elemsArr[0]).text();
let htmldata= $(elemsArr[0]).html();
console.log("text data",text);
console.log("html data",htmldata);

function rxtractHTML(html){
  let $ = cheerio.load(html);
 let elemsArr = $(".jsk-2675951502 card-body p-8 pd-4 .jsk-2675951502 table table-striped text-center")
let text= $(elemsArr[0]).text();
let htmldata= $(elemsArr[0]).html();
console.log("text data",text);
console.log("html data",htmldata);

}
