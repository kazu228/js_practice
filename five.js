let area = {
    teihen : 10,
    takasa : 5,
    menseki : function () {
        let result = this.teihen * this.takasa * 0.5;
        console.log(result);
    }
}

let circle = {
    r : 10,
    pi : 3.14,
    menseki : function () {
        let result = this.r * this.r * this.pi;
        console.log(result);    
    }
}

// BMIを計算する

area.menseki();
circle.menseki();


