const request = require("request");
const cheerio = required("cheerio");
const url = "https://collegedunia.com/university/25866-anna-university-of-technology-madurai"
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
 let elemsArr = $(".cdcms_college_highlights")
let text= $(elemsArr[0]).text();
let htmldata= $(elemsArr[0]).html();
console.log("text data",text);
console.log("html data",htmldata);

function rxtractHTML(html){
  let $ = cheerio.load(html);
 let elemsArr = $(".jsx-2675951502 fees-info table-data bg-white mt-4 .jsk-2675951502 table table-striped text-center")
let text= $(elemsArr[0]).text();
let htmldata= $(elemsArr[0]).html();
console.log("text data",text);
console.log("html data",htmldata);

}
