
let min = 0;
let max = 5;

// var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;
// let player_x = Math.floor()


let player_x = Math.floor( Math.random() * (max + 1 - min)) + min;

let player_y = Math.floor( Math.random() * (max + 1 - min)) + min;

let suika_x = Math.floor( Math.random() * (max + 1 - min)) + min;

let suika_y = Math.floor( Math.random() * (max + 1 - min)) + min;

function cal_distance(x1, y1, x2, y2) {
   let diff_x = x1 - x2;
   let diff_y = y1 - y2;
   return Math.sqrt(diff_x ** 2 + diff_y ** 2); 
}

console.log(cal_distance(player_x, player_y, suika_x, suika_y));
