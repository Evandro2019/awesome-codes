class Retangulo {
    constructor(altura, largura) {
      this.altura = altura; this.largura = largura;
    }
  //Getter
    get area() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}

const quadrado = new Retangulo(10, 10);
const quadrado2 = new Retangulo(15, 15);
const quadrado3 = new Retangulo(20, 20);
console.log(quadrado.area,'m²');
console.log(quadrado2.area,'m²');
console.log(quadrado3.area,'m²');

