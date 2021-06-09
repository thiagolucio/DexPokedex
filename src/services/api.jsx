
export async function ApiPokemon(limit, offset) {

    let api = ` https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    // promessa tratada de forma assíncrona com await
    return await (await fetch(api).then()).json();
}

export async function MatchPokemon(name) {

    let api = `https://pokeapi.co/api/v2/pokemon/${name}`;
    
    // promessa tratada de forma assíncrona com await
    return await (await fetch(api).then()).json();
}