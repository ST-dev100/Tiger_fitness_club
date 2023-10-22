const day  = document.getElementById('day')
let a = new Date();
const year = a.getFullYear();
const month = a.getMonth() + 1;
const date = a.getDate();
if(month < 10) month = '0'+month;
if(date < 10) date = '0'+date;

const today = year + '-' + month + '-' + date;

day.defaultValue = today