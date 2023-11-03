

import { getCharacters } from './api';
import { renderCharacters } from './view';

const HOUSES = [
    'gryffindor',
    'hufflepuff',
    'ravenclaw',
    'slytherin'
];


function loadCharacters(): void {
    HOUSES.forEach(house => {
        getCharacters(house)
            .then((data: {image?: string, name: string}[]) => {
                renderCharacters(house, data.filter( (i) => i.image).slice(0, 8) );
            });
    });
}

loadCharacters();
