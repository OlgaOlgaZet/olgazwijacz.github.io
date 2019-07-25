function poleKola (x){
    let pole = Math.PI * Math.pow(x, 2);
    return `Pole koła to : ${pole}`;
}
console.log(poleKola(76));

const poleKolaShort = x => `Pole kola to: ${Math.PI * Math.pow(x, 2)}`;
console.log(poleKolaShort(100));