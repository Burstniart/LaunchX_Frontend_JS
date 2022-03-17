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
        // let pokeType = data.types[0].type.name;
        // pokeTypes(pokeType);
        let howMany = data.types.length;
        thisMany(howMany);
        let another = data.types;
        showTypes(another);
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById('pokeImg');
    pokeImg.src = url;
}

// const pokeTypes = (type) => {
//     const pokeType = document.getElementById('types');
//     pokeType.innerHTML = type;
// }

const thisMany = (many) => {
    console.log(`This pokemon has ${many} types`);
}

const showTypes = (anotherOne) => {
    const pokeType = document.getElementById("type");
    let types = anotherOne.length;
    console.log(types);
    for (x in anotherOne) {
        console.log(anotherOne[x].type.name);
    }


}
// pokeImage('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png');

// const print = () => {
//     const pokeName = document.getElementById('pokeName');
//     let pokeInput = pokeName.value;
//     console.log(`What's up ${pokeInput}!`);
// }