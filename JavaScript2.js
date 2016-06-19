var time = new Date();
console.log(
    time.getHours() + ":" + 
    ("0" + time.getMinutes()).slice(-2));