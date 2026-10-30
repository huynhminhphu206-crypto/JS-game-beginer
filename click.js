let coins = 0
let click_power = +1
let rank = "Bronve I"
function updateRank(){
    if(coins < 400){
        rank = "Bronze I"
    }
    else if(coins < 1000){
        rank = "Bronze II"
    }
    else if(coins < 2000){
        rank = "Bronze III"
    }
    else if(coins < 5000){
        rank = "Bronze IV"
    }
    else if(coins < 11000){
        rank = "Silver I"
    }
    document.getElementById("rank").textContent = "RANK: " + rank
}

function updateUI(){
    document.getElementById("context").textContent = coins + " coins"
    if (coins >=50){
        document.getElementById("upgrade").style.display = "inline-block"
    }
    else{
        document.getElementById("upgrade").style.display = "none"
    }
    if (coins >=200){
        document.getElementById("upgrade2").style.display = "inline-block"
    }
    else{
        document.getElementById("upgrade2").style.display = "none"
    }
    if (coins >=600){
        document.getElementById("upgrade3").style.display = "inline-block"
    }
    else{
        document.getElementById("upgrade3").style.display = "none"
    }
    if (coins >=1500){
        document.getElementById("upgrade4").style.display = "inline-block"
    }
    else{
        document.getElementById("upgrade4").style.display = "none"
    }
     if (coins >=5000){
        document.getElementById("upgrade5").style.display = "inline-block"
    }
    else{
        document.getElementById("upgrade5").style.display = "none"
    }
    updateRank()
}
document.getElementById("click").onclick = function(){
    coins += click_power
    document.getElementById("context").textContent = coins + " coins"
    document.getElementById("power").textContent = 'power: ' + click_power + " coins/click"
    updateUI()
}
document.getElementById("upgrade").onclick = function(){
    if(coins >= 50){
        coins -= 50
        click_power +=1
        document.getElementById("context").textContent = coins + " coins"
        document.getElementById("power").textContent = 'power: ' + click_power + " coins/click"
        updateUI()
    }

    }
document.getElementById("upgrade2").onclick = function(){
    if (coins >=200){
        coins -= 200
        click_power += 3
        document.getElementById("context").textContent = coins + " coins"
        document.getElementById("power").textContent = 'power: ' + click_power + " coins/click"
        updateUI()
    }
    
}
document.getElementById("upgrade3").onclick = function(){
    if (coins >=600){
        coins -= 600
        click_power += 8
        document.getElementById("context").textContent = coins + " coins"
        document.getElementById("power").textContent = 'power: ' + click_power + " coins/click"
        updateUI()
    }
}
document.getElementById("upgrade4").onclick = function(){
    if (coins >=1500){
        coins -= 1500
        click_power += 18
        document.getElementById("context").textContent = coins + " coins"
        document.getElementById("power").textContent = 'power: ' + click_power + " coins/click"
        updateUI()
    }
}
document.getElementById("upgrade5").onclick = function(){
    if (coins >=5000){
        coins -= 5000
        click_power += 34
        document.getElementById("context").textContent = coins + " coins"
        document.getElementById("power").textContent = 'power: ' + click_power + " coins/click"
        updateUI()
    }
}
