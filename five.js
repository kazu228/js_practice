let area = {
    teihen : 10,
    takasa : 5,
    menseki : function () {
        let result = this.teihen * this.takasa * 0.5;
        console.log(result);
    }
}

area.menseki();

