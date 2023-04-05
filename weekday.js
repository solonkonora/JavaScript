// DEFINE YOUR FUNCTION BELOW:
const weekDAY = new Array(7);
weekDAY[1] = 'Monday';
weekDAY[2] = 'Tuesday';
weekDAY[3] = 'Wednesday';
weekDAY[4] = 'Thursday';
weekDAY[5] = 'Friday';
weekDAY[6] = 'Saturday';
weekDAY[7] = 'Sunday' ;

function returnDay(x){
if(x < 1 || x > 7) {
return null;
}
else {
return weekDAY[x];
}
}