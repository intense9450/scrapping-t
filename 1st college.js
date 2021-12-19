const request = require("request");
const cheerio = required("cheerio");
const url = "https://collegedunia.com/college/15475-thiagarajar-college-of-engineering-tce-madurai"
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
 let elemsArr = $(".cdcms_sectiom1")
let text= $(elemsArr[0]).text();
let htmldata= $(elemsArr[0]).html();
console.log("text data",text);
console.log("html data",htmldata);

function rxtractHTML(html){
  let $ = cheerio.load(html);
 let elemsArr = $(".jsx-2675951502 card-body p-8 pd-4 .jsk-2675951502 table table-striped text-center")
let text= $(elemsArr[0]).text();
let htmldata= $(elemsArr[0]).html();
console.log("text data",text);
console.log("html data",htmldata);

}
