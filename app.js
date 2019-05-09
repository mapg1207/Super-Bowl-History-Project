var sbdata = data.reverse();
let cities = [];
let dates = [];
let sbs = [];
let winners = [];
let losers = [];

sbdata.forEach(function(sbGame){
    cities.push(sbGame["City"]);
    dates.push(sbGame["Date"]);
    sbs.push(sbGame["SB"]);
});

console.log(cities);
console.log(dates);
console.log(sbs);

console.log(cities[4] + " " + dates[4] + " " + sbs[4]);

sb1 = sbdata[0];

city = sb1["City"];
date = sb1["Date"];



//console.log(data);

console.log("The first Superbowl was played in " + city + " on " + date);


function outputGameCards(sbdata){
    var html = ``;
    sbdata.forEach(function(sbGame){
    
        html += `
        <ul id="superbowl-${sbGame["SB"]}">
            <li>Super Bowl: ${sbGame["SB"]}</li>
            <li>Date: ${sbGame["Date"]}</li>
            <li>City: ${sbGame["City"]}</li>
        </ul>
        `;
    });
    return html;
}

var superbowl = outputGameCards(sbdata);

var div = document.getElementById("games");
div.innerHTML = superbowl;
