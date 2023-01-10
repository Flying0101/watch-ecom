import { atom } from 'recoil';


// Watch pictures
import AUD1 from '../watches/audemars1.png';
import AUD2 from '../watches/audemars2.png';
import AUD3 from '../watches/audemars3.png';
import AUD4 from '../watches/audemars4.png';

import OMEGA1 from '../watches/omega1.jpg';
import OMEGA2 from '../watches/omega2.jpg';
import OMEGA3 from '../watches/omega3.jpg';

import PATEK1 from '../watches/patek1.jpg';
import PATEK2 from '../watches/patek2.jpg';
import PATEK3 from '../watches/patek3.jpg';
import PATEK4 from '../watches/patek4.jpg';
import PATEK5 from '../watches/patek5.jpg';

import ROLEX1 from '../watches/rolex1.jpg';
import ROLEX2 from '../watches/rolex2.jpg';
import ROLEX3 from '../watches/rolex3.jpg';
import ROLEX4 from '../watches/rolex4.jpg';

import TAG1 from '../watches/tag1.jpg';
import TAG2 from '../watches/tag2.png';
 


export const data = atom({
    key: "data",
    default: [{ id: 0, name: 'Audemars Piguet', sort: 'Royal Oak', price: 4230000, info: '123', material: 'gold', image: AUD1 },
    { id: 1, name: 'Audemars Piguet', sort: 'Royal Oak', price: 850000, info: '123', material: 'gold', image: AUD2 },
    { id: 2, name: 'Audemars Piguet', sort: 'Royal Oak', price: 350000, info: '123', material: 'steel', image: AUD3 },
    { id: 3, name: 'Audemars Piguet', sort: 'Royal Oak', price: 234000, info: '123', material: 'steel', image: AUD4 },
    { id: 4, name: 'Omega', sort: 'Constellation', price: 230000, info: '123', material: 'gold', image: OMEGA1 },
    { id: 5, name: 'Omega', sort: 'SeaMaster', price: 57000, info: '123', material: 'diver', image: OMEGA2 },
    { id: 6, name: 'Omega', sort: 'SeaMaster', price: 63000, info: '123', material: 'diver', image: OMEGA3 },
    { id: 7, name: 'Patek philippe', sort: 'Aquanaut', price: 340000, info: '123', material: 'steel', image: PATEK1 },
    { id: 8, name: 'Patek philippe', sort: 'Aquanaut', price: 270000, info: '123', material: 'steel', image: PATEK2 },
    { id: 9, name: 'Patek philippe', sort: 'Nautilus', price: 1100000, info: '123', material: 'steel', image: PATEK3 },
    { id: 10, name: 'Patek philippe', sort: 'Nautilus', price: 1530000, info: '123', material: 'gold', image: PATEK4 },
    { id: 11, name: 'Patek philippe', sort: 'Nautilus', price: 980000, info: '123', material: 'steel', image: PATEK5 },
    { id: 12, name: 'Rolex', sort: 'Submariner', price: 270000, info: '123', material: 'diver', image: ROLEX1 },
    { id: 13, name: 'Rolex', sort: 'Submariner', price: 193000, info: '123', material: 'diver', image: ROLEX2 },
    { id: 14, name: 'Rolex', sort: 'Submariner', price: 540000, info: '123', material: 'gold', image: ROLEX3 },
    { id: 15, name: 'Rolex', sort: 'Submariner', price: 145000, info: '123', material: 'diver', image: ROLEX4 },
    { id: 16, name: 'Tag heuer', sort: 'Aquaracer', price: 61000, info: '123', material: 'diver', image: TAG1 },
    { id: 17, name: 'Tag heuer', sort: 'Monaco', price: 87000, info: '123', material: 'steel', image: TAG2 }]
});




