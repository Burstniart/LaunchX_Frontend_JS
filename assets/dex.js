const fetchPokemon = () => {
    const pokeName = document.getElementById('pokeName');
    let pokeInput = pokeName.value.toLowerCase();
    const url = ` https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != 200) {
            console.log(res);
            pokeImage('./assets/images/pikachuWat.jpg')
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
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById('pokeImg');
    pokeImg.src = url;
}

const showTypes = (pokeTypes) => {
    const pokeType = document.getElementById("types");
    let type = "";
    let types = pokeTypes.length;
    console.log(`This pokemon has ${types} types`);
    console.log(types);
    for (x in pokeTypes) {
        console.log(pokeTypes[x].type.name);
        type += pokeTypes[x].type.name + " ";
    }
    console.log(type);
    console.log(typeof type);
    pokeType.innerHTML = type;
}

const pokeStat = (pokeStats) => {
    console.log(pokeStats);
    console.log(typeof pokeStats);
    const theStats = document.getElementById("stats");
    let theStat = "";
    let allStats = "";
    for (x in pokeStats) {
        let baseStat = pokeStats[x].base_stat;
        let aStat = pokeStats[x].stat.name;
        let mayus = aStat[0].toUpperCase();
        theStat = aStat.replace(aStat[0], mayus);
        // br can be removed once styled is added
        allStats += theStat + ": "+ baseStat + "<br>";
        console.log(allStats);
    }
    theStats.innerHTML = allStats;
}

// const pokeTypes = (type) => {
//     const pokeType = document.getElementById('types');
//     console.log(type);
//     console.log(typeof type);
//     pokeType.innerHTML = type;
// }

// const thisMany = (many) => {
//     console.log(`This pokemon has ${many} types`);
// }


// pokeImage('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png');

// const print = () => {
//     const pokeName = document.getElementById('pokeName');
//     let pokeInput = pokeName.value;
//     console.log(`What's up ${pokeInput}!`);
// }