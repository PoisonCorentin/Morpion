let firstPlayer = document.querySelector(".firstPlayer");
let button = document.querySelector("#clic");
let effacer = document.querySelector("#btn");
let morpion = document.querySelector(".jeu")
let laMain = ["Player 1", "Player 2"];
let random = Math.floor(Math.random()*2);
let players = true;
let nbtour = 1;
let grille = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let gridIa = ['zone0','zone1','zone2','zone3','zone4','zone5','zone6','zone7','zone8'];
let victoire =[[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
let player = laMain[random];
let partieEnCours = false;
let zone0 = document.getElementById('z0');let zone1 = document.getElementById('z1');let zone2 = document.getElementById('z2');let zone3 = document.getElementById('z3');let zone4 = document.getElementById('z4');let zone5 = document.getElementById('z5');let zone6 = document.getElementById('z6');let zone7 = document.getElementById('z7');let zone8 = document.getElementById('z8');
let cpsRestant = document.getElementById('cpsRestant');
let nombrequireste = 9;
let valide = document.querySelector("#valider");
let suivant = document.querySelector("#suivant");
let mdj = ['1 vs 1', '1 vs Ordi']
let ndp = ['/1','/2','/3','/4','/5']
let partieGagner = 1;
let partieJouer = 1;
let tours = 0;
let VictoirePl1 = 1;
let VictoirePl2 = 1;


partieGagner = localStorage.getItem('gg')
partieJouer = localStorage.getItem('game')
tours = localStorage.getItem('nbtour')
VictoirePl1 = localStorage.getItem('pts')
VictoirePl2 = localStorage.getItem('scorepl2')
ndpActuel = 0;

valide.addEventListener("click",(e) =>{
    if (document.querySelector("#un:checked")) {
        ndpActuel = ndp[0]
        document.querySelector("#nbPartieP").innerHTML ="Nombre de partis prévus: " + nbtour + ndpActuel;
    }
    if (document.querySelector("#deux:checked")) {
        ndpActuel = ndp[1]
        document.querySelector("#nbPartieP").innerHTML ="Nombre de partis prévus: "+ nbtour + ndpActuel;
    }
    if (document.querySelector("#trois:checked")) {
        ndpActuel = ndp[2]
        document.querySelector("#nbPartieP").innerHTML ="Nombre de partis prévus: "+ nbtour + ndpActuel;
    }
    if (document.querySelector("#quatre:checked")) {
        ndpActuel = ndp[3]
        document.querySelector("#nbPartieP").innerHTML ="Nombre de partis prévus: "+ nbtour + ndpActuel;
    }
    if (document.querySelector("#cinq:checked")) {
        ndpActuel = ndp[4]
        document.querySelector("#nbPartieP").innerHTML ="Nombre de partis prévus: "+ nbtour + ndpActuel;
    }
    if (document.getElementById("1v1").checked == true) {
        document.querySelector("#montitre").textContent = "Morpion 1 vs 1";
    }
    if (document.getElementById("computer").checked == true) {
        document.querySelector("#montitre").textContent = "Morpion 1 vs Ordi";
    }
})

effacer.addEventListener("click", (e) =>{
    location.reload();
    partieJouer++
    jouer()
    
})



zone0.addEventListener("click", (e) =>{
    if (document.getElementById("1v1").checked == true) {
        if (players === true) {
            grille[0] = "1"
        }
        else{
            grille[0] = "10"
        }
    }
    else if (document.getElementById("computer").checked == true) {
        if (players === true) {
            grille[0] = "1"
        }
        else{
            grille[0] = "10"
        }
        
    }
    console.log(grille);
    Victory();
    coups();
})
zone1.addEventListener("click", (e) =>{
    if (players === true) {
        grille[1] = "1"
    }
    else{
        grille[1] = "10"
    }
    console.log(grille);
    Victory();
    coups();
})
zone2.addEventListener("click", (e) =>{
    if (players === true) {
        grille[2] = "1"
    }
    else{
        grille[2] = "10"
    }
    console.log(grille);
    Victory();
    coups();
})
zone3.addEventListener("click", (e) =>{
    if (players === true) {
        grille[3] = "1"
    }
    else{
        grille[3] = "10"
    }
    console.log(grille);
    Victory();
    coups();
})
zone4.addEventListener("click", (e) =>{
    if (players === true) {
        grille[4] = "1"
    }
    else{
        grille[4] = "10"
    }
    console.log(grille);
    Victory();
    coups();
})
zone5.addEventListener("click", (e) =>{
    if (players === true) {
        grille[5] = "1"
    }
    else{
        grille[5] = "10"
    }
    console.log(grille);
    Victory();
    coups();
})
zone6.addEventListener("click", (e) =>{
    if (players === true) {
        grille[6] = "1"
    }
    else{
        grille[6] = "10"
    }
    console.log(grille);
    Victory();
    coups();
})
zone7.addEventListener("click", (e) =>{
    if (players === true) {
        grille[7] = "1"
    }
    else{
        grille[7] = "10"
    }
    console.log(grille);
    Victory();
    coups();
})
zone8.addEventListener("click", (e) =>{
    if (players === true) {
        grille[8] = "1"
    }
    else{
        grille[8] = "10"
    }
    console.log(grille);
    Victory();
    coups();
})
function joueur(id) {
    switch (id) {
        case 'z0':
            document.getElementById(id).innerHTML= '<img src="img/ring.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z1':
            document.getElementById(id).innerHTML='<img src="img/ring.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z2':
            document.getElementById(id).innerHTML='<img src="img/ring.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;  
        case 'z3':
            document.getElementById(id).innerHTML='<img src="img/ring.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z4':
            document.getElementById(id).innerHTML='<img src="img/ring.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z5':
            document.getElementById(id).innerHTML='<img src="img/ring.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z6':
            document.getElementById(id).innerHTML='<img src="img/ring.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z7':
            document.getElementById(id).innerHTML='<img src="img/ring.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z8':
            document.getElementById(id).innerHTML='<img src="img/ring.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
 
        default:
    } 
    players = false;
    
}
function joueur2(id) {
    switch (id) {
        case 'z0':
            document.getElementById(id).innerHTML= '<img src="img/cross2.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z1':
            document.getElementById(id).innerHTML='<img src="img/cross2.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z2':
            document.getElementById(id).innerHTML='<img src="img/cross2.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;  
        case 'z3':
            document.getElementById(id).innerHTML='<img src="img/cross2.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z4':
            document.getElementById(id).innerHTML='<img src="img/cross2.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z5':
            document.getElementById(id).innerHTML='<img src="img/cross2.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z6':
            document.getElementById(id).innerHTML='<img src="img/cross2.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z7':
            document.getElementById(id).innerHTML='<img src="img/cross2.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
        case 'z8':
            document.getElementById(id).innerHTML='<img src="img/cross2.png" alt="" style="height:100px;" >';
            document.getElementById(id).style.pointerEvents = "none"
            break;
 
        default:
    } 

    players = true;
    console.log(players);
}

suivant.addEventListener("click", (e) =>{
    nbtour++;
    document.querySelector("#nbPartieP").innerHTML = "Nombre de partis prévus: " + nbtour + ndpActuel;
    suivant.style = 'display: none;'
    location.reload();
})

var afficheur = document.querySelector("#StatutJeu");
afficheur.innerHTML ="Le jeu peut commencer ! <br /> " + "<strong>" + laMain[0] + "</strong>" + " c'est votre tour.";
//document.querySelector('#partieG').innerHTML = "Nombre de partis gagner: " + partieGagner
document.querySelector('#partieJ').innerHTML = "Nombre de partis jouer: " + partieJouer
document.querySelector('#pl1').innerHTML = "Victoires Player 1: " + VictoirePl1
document.querySelector('#pl2').innerHTML = "Victoires Player 2: " + VictoirePl2


function partie(id) {

    if (document.getElementById("1v1").checked == true) {

        if (players === true) {
            joueur(id);
            afficheur.innerHTML = laMain[1] + " c'est votre tour.";
        }
        else if (players === false){
            joueur2(id);
            afficheur.innerHTML = laMain[0] + " c'est votre tour.";    
    
        }
        console.log("C'est du 1 vs 1") 
    } 
    else if (document.getElementById("computer").checked == true) {

        if (players === true) {
            joueur(id);
            afficheur.innerHTML = laMain[1] + " c'est votre tour.";
        }
        else if (players === false){
            ordinateur(id);
            afficheur.innerHTML = laMain[0] + " c'est votre tour.";    
    
        }
        console.log("C'est du 1 vs IA")
    } 
    
}

function Victory() {
        if (
          (grille[0] === grille[1] && grille[0] === grille[2]) ||
          (grille[3] === grille[4] && grille[3] === grille[5]) ||
          (grille[6] === grille[7] && grille[6] === grille[8]) ||
    
          (grille[0] === grille[3] && grille[0] === grille[6]) ||
          (grille[1] === grille[4] && grille[1] === grille[7]) ||
          (grille[2] === grille[5] && grille[2] === grille[8]) ||

          (grille[0] === grille[4] && grille[0] === grille[8]) ||
          (grille[2] === grille[4] && grille[2] === grille[6]) ) {
              
            if (grille[0] === grille[1] && grille[0] === grille[2]){
                zone0.style.backgroundColor = "#9ACD32";
                zone1.style.backgroundColor = "#9ACD32";
                zone2.style.backgroundColor = "#9ACD32";

                if (players === false) {
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 1" + "</strong>" 
                    zone3.style.pointerEvents = "none"
                    zone4.style.pointerEvents = "none"
                    zone5.style.pointerEvents = "none"
                    zone6.style.pointerEvents = "none"
                    zone7.style.pointerEvents = "none"
                    zone8.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl1').innerHTML = "Player 1 : " + VictoirePl1++
                    score1()
                    return
                } 
                else{
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 2! " + "</strong>"
                    zone3.style.pointerEvents = "none"
                    zone4.style.pointerEvents = "none"
                    zone5.style.pointerEvents = "none"
                    zone6.style.pointerEvents = "none"
                    zone7.style.pointerEvents = "none"
                    zone8.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl2').innerHTML = "Player 2 : " + VictoirePl2++
                    score2()
     
                } 
                 partieGagner++
                 gagner()
                 document.querySelector('#partieG').innerHTML = "Nombre de partis gagner:" + partieGagner
                 
              }
            if (grille[3] === grille[4] && grille[3] === grille[5]){
                zone3.style.backgroundColor = "#9ACD32";
                zone4.style.backgroundColor = "#9ACD32";
                zone5.style.backgroundColor = "#9ACD32";

                if (players === false) {
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 1" + "</strong>" 
                    zone0.style.pointerEvents = "none"
                    zone1.style.pointerEvents = "none"
                    zone2.style.pointerEvents = "none"
                    zone6.style.pointerEvents = "none"
                    zone7.style.pointerEvents = "none"
                    zone8.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl1').innerHTML = "Player 1 : " + VictoirePl1++
                    score1()
                    return
                } 
                else{
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 2" + "</strong>" 
                    zone0.style.pointerEvents = "none"
                    zone1.style.pointerEvents = "none"
                    zone2.style.pointerEvents = "none"
                    zone6.style.pointerEvents = "none"
                    zone7.style.pointerEvents = "none"
                    zone8.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl2').innerHTML = "Player 2 : " + VictoirePl2++
                    
                    score2()
                } 

                partieGagner++
                gagner()
                document.querySelector('#partieG').innerHTML = "Nombre de partis gagner:" + partieGagner
              }
            if (grille[6] === grille[7] && grille[6] === grille[8]){
                zone6.style.backgroundColor = "#9ACD32";
                zone7.style.backgroundColor = "#9ACD32";
                zone8.style.backgroundColor = "#9ACD32";

                if (players === false) {
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 1" + "</strong>" 
                    zone1.style.pointerEvents = "none"
                    zone0.style.pointerEvents = "none"
                    zone2.style.pointerEvents = "none"
                    zone3.style.pointerEvents = "none"
                    zone4.style.pointerEvents = "none"
                    zone5.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl1').innerHTML = "Player 1 : " + VictoirePl1++
                    score1()
                    
                    return
                } 
                else{
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 2" + "</strong>" 
                    zone1.style.pointerEvents = "none"
                    zone0.style.pointerEvents = "none"
                    zone2.style.pointerEvents = "none"
                    zone3.style.pointerEvents = "none"
                    zone4.style.pointerEvents = "none"
                    zone5.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl2').innerHTML = "Player 2 : " + VictoirePl2++
                    score2()
                } 

                partieGagner++
                gagner()
                document.querySelector('#partieG').innerHTML = "Nombre de partis gagner:" + partieGagner
              }
            if (grille[0] === grille[3] && grille[0] === grille[6]){
                zone0.style.backgroundColor = "#9ACD32";
                zone3.style.backgroundColor = "#9ACD32";
                zone6.style.backgroundColor = "#9ACD32";

                if (players === false) {
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 1" + "</strong>" 
                    zone1.style.pointerEvents = "none"
                    zone2.style.pointerEvents = "none"
                    zone4.style.pointerEvents = "none"
                    zone5.style.pointerEvents = "none"
                    zone7.style.pointerEvents = "none"
                    zone8.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl1').innerHTML = "Player 1 : " + VictoirePl1++
                    score1()
                    return
                } 
                else{
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 2" + "</strong>" 
                    zone1.style.pointerEvents = "none"
                    zone2.style.pointerEvents = "none"
                    zone4.style.pointerEvents = "none"
                    zone5.style.pointerEvents = "none"
                    zone7.style.pointerEvents = "none"
                    zone8.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl2').innerHTML = "Player 2 : " + VictoirePl2++
                    score2()
                } 

                partieGagner++
                 gagner()
                 document.querySelector('#partieG').innerHTML = "Nombre de partis gagner:" + partieGagner
              }
            if (grille[1] === grille[4] && grille[1] === grille[7]){
                zone1.style.backgroundColor = "#9ACD32";
                zone4.style.backgroundColor = "#9ACD32";
                zone7.style.backgroundColor = "#9ACD32";

                if (players === false) {
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 1" + "</strong>" 
                    zone2.style.pointerEvents = "none"
                    zone3.style.pointerEvents = "none"
                    zone5.style.pointerEvents = "none"
                    zone6.style.pointerEvents = "none"
                    zone0.style.pointerEvents = "none"
                    zone8.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl1').innerHTML = "Player 1 : " + VictoirePl1++
                    score1()
                    return
                } 
                else{
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 2" + "</strong>" 
                    zone2.style.pointerEvents = "none"
                    zone3.style.pointerEvents = "none"
                    zone5.style.pointerEvents = "none"
                    zone6.style.pointerEvents = "none"
                    zone0.style.pointerEvents = "none"
                    zone8.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl2').innerHTML = "Player 2 : " + VictoirePl2++
                    score2()
                } 

                partieGagner++
                 gagner()
                 document.querySelector('#partieG').innerHTML = "Nombre de partis gagner:" + partieGagner
              }
            if (grille[2] === grille[5] && grille[2] === grille[8]){
                zone2.style.backgroundColor = "#9ACD32";
                zone5.style.backgroundColor = "#9ACD32";
                zone8.style.backgroundColor = "#9ACD32";

                if (players === false) {
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 1" + "</strong>" 
                    zone0.style.pointerEvents = "none"
                    zone1.style.pointerEvents = "none"
                    zone3.style.pointerEvents = "none"
                    zone4.style.pointerEvents = "none"
                    zone6.style.pointerEvents = "none"
                    zone7.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl1').innerHTML = "Player 1 : " + VictoirePl1++
                    score1()
                    return
                } 
                else{
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 2" + "</strong>" 
                    zone0.style.pointerEvents = "none"
                    zone1.style.pointerEvents = "none"
                    zone3.style.pointerEvents = "none"
                    zone4.style.pointerEvents = "none"
                    zone6.style.pointerEvents = "none"
                    zone7.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl2').innerHTML = "Player 2 : " + VictoirePl2++
                    score2()
                } 

                partieGagner++
                gagner()
                document.querySelector('#partieG').innerHTML = "Nombre de partis gagner:" + partieGagner
              }
            if (grille[0] === grille[4] && grille[0] === grille[8]){
                zone0.style.backgroundColor = "#9ACD32";
                zone4.style.backgroundColor = "#9ACD32";
                zone8.style.backgroundColor = "#9ACD32";

                if (players === false) {
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 1" + "</strong>" 
                    zone1.style.pointerEvents = "none"
                    zone2.style.pointerEvents = "none"
                    zone3.style.pointerEvents = "none"
                    zone5.style.pointerEvents = "none"
                    zone6.style.pointerEvents = "none"
                    zone7.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl1').innerHTML = "Player 1 : " + VictoirePl1++
                    score1()
                    return
                } 
                else{
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 2" + "</strong>" 
                    zone1.style.pointerEvents = "none"
                    zone2.style.pointerEvents = "none"
                    zone3.style.pointerEvents = "none"
                    zone5.style.pointerEvents = "none"
                    zone6.style.pointerEvents = "none"
                    zone7.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl2').innerHTML = "Player 2 : " + VictoirePl2++
                    score2()
                } 

                partieGagner++
                gagner()
                document.querySelector('#partieG').innerHTML = "Nombre de partis gagner:" + partieGagner
              }
            if (grille[2] === grille[4] && grille[2] === grille[6]){
                zone2.style.backgroundColor = "#9ACD32";
                zone4.style.backgroundColor = "#9ACD32";
                zone6.style.backgroundColor = "#9ACD32";

                if (players === false) {
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 1" + "</strong>" 
                    zone0.style.pointerEvents = "none"
                    zone1.style.pointerEvents = "none"
                    zone3.style.pointerEvents = "none"
                    zone5.style.pointerEvents = "none"
                    zone7.style.pointerEvents = "none"
                    zone8.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl1').innerHTML = "Player 1 : " + VictoirePl1++
                    score1()
                    return
                } 
                else{
                    afficheur.innerHTML = "Bravo à vous" + "<strong>" + " Player 2" + "</strong>" 
                    zone0.style.pointerEvents = "none"
                    zone1.style.pointerEvents = "none"
                    zone3.style.pointerEvents = "none"
                    zone5.style.pointerEvents = "none"
                    zone7.style.pointerEvents = "none"
                    zone8.style.pointerEvents = "none"
                    suivant.style = 'display: block;'
                    document.querySelector('#pl2').innerHTML = "Player 2 : " + VictoirePl2++
                    score2()
                } 

                partieGagner++
                gagner()
                document.querySelector('#partieG').innerHTML = "Nombre de partis gagner:" + partieGagner
              }
        }
}

function coups() {
    nombrequireste--;
    cpsRestant.innerHTML = "Nombre de coups restant: " + nombrequireste + "/9";

}

function gagner() {
    localStorage.setItem('gg', partieGagner )
}
function jouer() {
    localStorage.setItem('game', partieJouer )
}

function tour() {
    localStorage.setItem('nbtour', tours )
}
function score1() {
    localStorage.setItem('pts', VictoirePl1 )
}
function score2() {
    localStorage.setItem('scorepl2', VictoirePl2 )
}

