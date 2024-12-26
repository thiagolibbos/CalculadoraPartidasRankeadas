//declarar nome completo do Herói
let heroName = getFirstHeroName("Thiago Nome Composto"); 

//declarar vitórias e derrotas
let declareVictories = 120
let declareDefeats = 30

//calcular vitórias
let heroVictories = getHeroVictories(declareVictories,declareDefeats)

//calcular rank
let heroRank = getHeroRank(heroVictories)

//mensagem do console
console.log("O Herói " + heroName + " tem de saldo de "+ heroVictories +" vitórias e está no nível de "+heroRank); 

//função capturar primeiro nome
function getFirstHeroName(fullName) {
    let firstName = fullName.split(" ")[0]; 
    return firstName; 

} 

//função calcular vitórias
function getHeroVictories(numVictories,numDefeats){
    let totalVictories = numVictories - numDefeats
    return totalVictories

}

//função calcular rank
function getHeroRank(heroVictories){

    let calcHeroRank = ""
    
    if (heroVictories >= 101) { 
        calcHeroRank = "Imortal"; 
    } 
    
    else if (heroVictories >= 91 && heroVictories <= 100) { 
        calcHeroRank = "Lendário"; 
    } 
    
    else if (heroVictories >= 81 && heroVictories <= 90) {
        calcHeroRank = "Diamante"; 
    } 
    
    else if (heroVictories >= 51 && heroVictories <= 80) { 
        calcHeroRank = "Ouro"; 
    } 
    
    else if (heroVictories >= 21 && heroVictories <= 50) { 
        calcHeroRank = "Prata"; 
    } 
    else if (heroVictories >= 11 && heroVictories <= 20) { 
        calcHeroRank = "Bronze"; 
    } 
    else if (heroVictories <= 10) { 
        calcHeroRank = "Ferro"; 
    }

    return calcHeroRank
}