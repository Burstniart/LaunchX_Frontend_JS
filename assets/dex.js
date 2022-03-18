const fetchPokemon = () => {
    const pokeName = document.getElementById('pokeName');
    let pokeInput = pokeName.value.toLowerCase();
    const url = ` https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != 200) {
            console.log(res);
            pokeImage('./assets/images/pikachuWat.jpg');
            teamRocket();
        } else {
            return res.json();        
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        let pokeTypes = data.types;
        showTypes(pokeTypes);
        let pokeStats = data.stats;
        pokeStat(pokeStats);
        let pokeMoves = data.moves;
        pokeMove(pokeMoves);
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById('pokeImg');
    pokeImg.src = url;
}

const showTypes = (pokeTypes) => {
    const pokeType = document.getElementById("types");
    let type = "";
    let theType = "";
    for (x in pokeTypes) {
        let aType = pokeTypes[x].type.name;
        let mayus = aType[0].toUpperCase();
        theType = aType.replace(aType[0], mayus);
        type += theType + " ";
    }
    pokeType.innerHTML = type;
    console.log(type);
}

const pokeStat = (pokeStats) => {
    const theStats = document.getElementById("stats");
    let theStat = "";
    let allStats = "";
    for (x in pokeStats) {
        let baseStat = pokeStats[x].base_stat;
        let aStat = pokeStats[x].stat.name;
        let mayus = aStat[0].toUpperCase();
        theStat = aStat.replace(aStat[0], mayus);
        allStats += theStat + ": "+ baseStat + "<br>";
    }
    console.log(allStats);
    theStats.innerHTML = allStats;
}

const pokeMove = (pokeMoves) => {
    const theMoves = document.getElementById("moves");
    let theMove = "";
    let allMoves = "";
    for ( x in pokeMoves) {
        let aMove = pokeMoves[x].move.name;
        let mayus = aMove[0].toUpperCase();
        theMove = aMove.replace(aMove[0], mayus);
        allMoves += theMove + " / ";
    }
    allMoves = allMoves.replace(/-/g, " ");
    allMoves = allMoves.slice(0, -2); 
    console.log(allMoves);
    theMoves.innerHTML = allMoves;
}

const teamRocket = () => {
    document.getElementById("moves").innerHTML = "Team Rocket took this information!";
} 
