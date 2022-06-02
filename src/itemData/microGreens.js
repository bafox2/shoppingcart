import { Basil, Dill, Hyssop, HoneydewSage, LemonThyme, AfricanBlueBasil } from '../images/'
import Wheatgrass from './images/AfricanBlueBasil.jpg'

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));


//bullblood nasturtium
const microgreens = [
    {
        name: 'Wheatgrass',
        category: 'traditionalproduce',
        amount: '1 Oz',
        price: '$1.09',
        cartprice: '1.09',
        description: 'Seed from Mayan origin',
        imageurl: 'https://photos.app.goo.gl/jzV8PdVPzq6QEK7VA',
        imageref: Wheatgrass,
    },
    {
        name: "Bull's Blood",
        category: 'traditionalproduce',
        amount: '1 Oz',
        price: '$6.71',
        cartprice: '6.71',
        description: 'Seed from Mayan origin',
        imageurl: 'https://photos.app.goo.gl/6MZLDEZLPFFD4B8V7',
        imageref: '',
    },
    {
        name: "Basil",
        category: 'traditionalproduce',
        amount: '1 Oz',
        price: '$2.03',
        cartprice: '2.03',
        description: 'Seed from Mayan origin',
        imageurl: 'https://photos.app.goo.gl/W7gGHHYjM7CcpsTt7',
        imageref: Basil,
    },
    {
        name: "Nasturtium",
        category: 'traditionalproduce',
        amount: '1 Oz',
        price: '$4.94',
        cartprice: '4.94',
        description: 'Seed from Mayan origin',
        imageurl: 'https://photos.app.goo.gl/qAs4hnsZmp2KZ8AR8',
        imageref: '',
    },
    {
        name: "African Blue Basil",
        category: 'traditionalproduce',
        amount: '1 Oz',
        price: '$7.26',
        cartprice: '7.26',
        description: 'Seed from Mayan origin',
        imageurl: 'https://photos.app.goo.gl/oHaSkrrHYQaDxhMX9',
        imageref: '',
    },
    {
        name: "Dill",
        category: 'traditionalproduce',
        amount: '1 Oz',
        price: '$2.11',
        cartprice: '.71',
        description: 'Seed from Mayan origin',
        imageurl: 'https://photos.app.goo.gl/oA4KJEjf91dKnDhaA',
        imageref: '',
    },
    {
        name: "Lemon Thyme",
        category: 'traditionalproduce',
        amount: '1 Oz',
        price: '$3.30',
        cartprice: '6.71',
        description: 'Seed from Mayan origin',
        imageurl: 'https://photos.app.goo.gl/oA4KJEjf91dKnDhaA',
        imageref: '',
    },
    {
        name: "Honeydew Sage",
        category: 'traditionalproduce',
        amount: '1 Oz',
        price: '$1.57',
        cartprice: '6.71',
        description: 'Seed from Mayan origin',
        imageurl: 'https://photos.app.goo.gl/ecGfhGnMr2K7HnmG8',
        imageref: '',
    },
    {
        name: "Hyssop",
        category: 'traditionalproduce',
        amount: '1 Oz',
        price: '$4.98',
        cartprice: '6.71',
        description: 'Seed from Mayan origin',
        imageurl: 'https://photos.app.goo.gl/afJo1onDYqkMjNqn7',
    }
]
export default microgreens