
let player = { x : 10, y : 30 };

let suika = { x : 20, y : 20 };

function calDistance(x1, y1, x2, y2){
    let diff_x = x1 - x2;
    let diff_y = y1 - y2;

    return Math.sqrt(diff_x * diff_x + diff_y * diff_y);
}

let d = calDistance(player.x, player.y, suika.x, suika.y);

console.log(d);

