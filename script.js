let met = document.getElementById('mtr');
        let cent = document.getElementById('cen');
        let yar = document.getElementById('yard');
        let kilo = document.getElementById('km');

        
cent.addEventListener('input',function(){
            let mete = this.value;
            let km = this.value;
            let yr = this.value;
            let yrd = yr*0.010936;
            let kem = km/100000;
            let m = mete/100;
            met.value = m;
            yar.value = yrd;
            kilo.value = kem;
});
met.addEventListener('input',function(){

    //console.log("lpuyt")
        let cen = this.value;
        let km = this.value;
        let yr = this.value;
        let kem = km/1000;
        let yrd = yr*1.0936;
        let c = cen*100;
       cent.value = c;
       kilo.value = kem;
       yar.value = yrd;
    });
yar.addEventListener('input',function(){
//console.log("lpuyt")
    let mtr = this.value;
    let cmm = this.value;
    let kmi = this.value;
    let c = cmm/0.010936;
    let mt = mtr/1.0936;
    let km = kmi/1093.6;
    met.value = mt;
    kilo.value = km;
    cent.value = c;
});
 kilo.addEventListener('input',function(){
//console.log("lpuyt")
    let mtr = this.value;
    let cmm = this.value;
    let yr = this.value;
    let c = cmm*100000
    let mt = mtr*1000
    let yrd = yr*1093.6
    cent.value = c;
    met.value = mt;
    yar.value = yrd;

});