exports.toUpperText = function(str){
    return str.toUpperCase();
};


exports.setNow = function(date){
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    return year + "-" + month + "-" +day ;
};
console.log("Exports 객체");
console.dir(exports);
console.log("========================");