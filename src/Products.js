let products = [
    {
        id: 1,
        name: 'African Spear Plant + Pot',
        price: '₹120.00',
        url: 'assets/african-spear-plant-pot.jpg',
        alt: 'african-spear-plant-pot',
        desc: 'African Spear is tough, easy to grow succulent houseplant native to Africa.  It has a dramatic form with subcylindrical spiky leaves.',
    },
    {
        id: 2,
        name: 'Zamioculcas zamiifolia "ZZ Plant" + Pot (1 Pc)',
        price: '₹259.00',
        url: 'assets/gardening-concept-with-plants.jpg',
        alt: 'gardening-concept-with-plants',
        desc: 'Often called "ZZ Plant", this plant thrives on neglect. It prefers a bright indirect light but can tolerate low light. This plant prefers dry soil, so watering about twice a month or whenever soil dries completely is best.',

    },
    {
        id: 3,
        name: 'Flaming Red Living Desert Jewel Cactus + Pot',
        price: '₹1,258.64',
        url: 'assets/arrangement-with-red-cactus-flower-pot.jpg',
        alt: 'arrangement-with-red-cactus-flower-pot',
        desc: "Desert Gems cacti are small indoor plants perfect for decorating desks and tabletops. We love mixing these colorful cacti houseplants together in fun arrangements. They're fun houseplants for older children to care for and nurture."
    },
    {
        id: 4,
        name: 'Pansy - Flowers for wall Decoration',
        price: '₹299.00',
        url: 'assets/beautiful-little-flowers-wall.jpg',
        alt: 'beautiful-little-flowers-wall',
        desc: 'The garden pansy is a type of polychromatic large-flowered hybrid plant cultivated as a garden flower.',
    },
    {
        id: 5,
        name: 'Dwarf Umbrella Tree + Terra Cotta Pot',
        price: '₹200.00',
        url: 'assets/beautiful-modern-plants-deco.jpg',
        alt: 'beautiful-modern-plants-deco',
        desc: 'Enhance your indoor space with the elegant Schefflera Arboricola, also known as the Dwarf Umbrella Tree. This variety is perfectly suited for indoor environments, featuring smaller, compact leaves compared to its larger relatives. When housed in a smaller pot, it conveniently remains under 2 feet in height, making it an ideal choice for limited spaces.',
    },
    {
        id: 6,
        name: 'Birds Nest Fern Plant + Beige Pot',
        price: '₹730.00',
        url: 'assets/birds-nest-fern-plant-beige-pot.jpg',
        alt: 'birds-nest-fern-plant-beige-pot',
        desc: "The Bird’s Nest Victoria is a lower-maintenance fern that does great as a houseplant. Rippled, bright green leaves grow from the center of a nest-like crown. Natural air detoxifier, perfect for a healthier home environment. Low light and maintenance, ideal for busy individuals or dim spaces. Pet-friendly and symbolic, safe for furry friends and rich in cultural meaning.",
    },
    {
        id: 7,
        name: 'Birds Nest Fern Plant + Black Pot',
        price: '₹620.00',
        url: 'assets/birds-nest-fern-plant-black-pot.jpg',
        alt: 'birds-nest-fern-plant-black-pot',
        desc: "The Bird’s Nest Victoria is a lower-maintenance fern that does great as a houseplant. Rippled, bright green leaves grow from the center of a nest-like crown. Natural air detoxifier, perfect for a healthier home environment. Low light and maintenance, ideal for busy individuals or dim spaces. Pet-friendly and symbolic, safe for furry friends and rich in cultural meaning.",
    },
    {
        id: 8,
        name: 'houseleek + Pot',
        price: '₹120.00',
        url: 'assets/close-up-woman-holding-small-flowerpot.jpg',
        alt: 'close-up-woman-holding-small-flowerpot',
        desc: "Sempervivum Green Wheel Succulent Plant also called ‘Hens and Chicks’. Sempervivum ‘Green Wheel’ has tight fleshy leaves with multiple green rosettes. Easy to grow house plant. Like the other Succulent it requires bright indirect Sun Light, but only needs to be watered when dry.",
    },
    {
        id: 9,
        name: 'Foxtail Agave',
        price: '₹887.00',
        url: 'assets/decorative-plant-inside-minimal-vase.jpg',
        alt: 'decorative-plant-inside-minimal-vase',
        desc: "The Fox Tail Agave is a gentle species with a graceful appearance that is popular for its easy nature and smooth, pliable, pale green leaves free from menacing teeth or claws. The smooth, light grey, bare stem is distinctive and varies in length from 1.5 to 5 ft. from the base. This low-maintenance agave is easy to grow and drought-tolerant, making it an ideal choice for frost-free gardens of all sizes. With its large, soft rosettes resembling green flowers, the Fox Tail Agave adds beauty and lushness to the landscape. Order your Fox Tail Agave today for delivery to your home.",
    },
    {
        id: 10,
        name: 'Faux Watermelon Peperomia Plant + Gray Pot',
        price: '₹659.00',
        url: 'assets/faux-watermelon-peperomia-plant-gray-pot.jpg',
        alt: 'faux-watermelon-peperomia-plant-gray-pot',
        desc: "Watermelon peperomia (Peperomia argyreia) is a stunning and super-trendy houseplant. It shows off beautiful tear-drop shaped green leaves with dramatic silver stripes. Red leaf stems (petioles) offer an attractive complement. This small houseplant is perfect for well-lit desks and tabletops. It only grows about 8 to 12 inches tall, so it's also easy to feature on shelves and in large terrariums. Place watermelon peperomia in a spot where you can view it up close: in bright light, the silver variegation sparkles.",
    },
    {
        id: 11,
        name: 'Zamioculcas zamiifolia "ZZ Plant" + Pot (3 Pcs)',
        price: '₹259.00/pc',
        url: 'assets/gardening-concept-with-plants (1).jpg',
        alt: 'gardening-concept-with-plants',
        desc: 'Often called "ZZ Plant", this plant thrives on neglect. It prefers a bright indirect light but can tolerate low light. This plant prefers dry soil, so watering about twice a month or whenever soil dries completely is best.',
    },
    {
        id: 12,
        name: 'Ficus Benjamina + Pot',
        price: '₹194.00',
        url: 'assets/gardening-concept-with-plants (2).jpg',
        alt: 'gardening-concept-with-plants',
        desc: "Weeping fig (Ficus benjamina's common name is known as the ficus tree) grows as a large broadleaf evergreen tree in tropical and subtropical climates, but it is more often grown as a houseplant in homes and offices and featured in interior commercial landscaping. Weeping figs are toxic to pets.",
    },
    {
        id: 13,
        name: 'Fairy Washboard',
        price: '₹380.00',
        url: 'assets/green-leaf-bokeh-with-beautiful-soft-sunlight.jpg',
        alt: 'green-leaf-bokeh-with-beautiful-soft-sunlight',
        desc: "Fairy Washboard (Haworthiopsis / Haworthia limifolia) (Marloth): An easy houseplant with funky, textured foliage! Raised ridges on the dark green foliage give this a washboard-like texture. It tolerates neglect and low indoor light well. Haworthia are able to tolerate low, indoor light, making them excellent houseplants, even for beginners. They are particularly easy to grow and rarely affected by common succulent pests and diseases.",
    },
    {
        id: 14,
        name: 'Strelitzia Nicolai',
        price: '₹348.00',
        url: 'assets/indoor-plants.jpg',
        alt: 'indoor-plants',
        desc: "Strelitzia nicolai, commonly known as the wild banana or giant white bird of paradise, is a species of banana-like plants with erect woody stems reaching a height of 7–8 m (23–26 ft), and the clumps formed can spread as far as 3.5 m (11 ft). Strelitzia nicolai is commonly grown both indoors and outdoors as well, in the case of warmer climates, and where frost does not occur regularly.",
    },
    {
        id: 15,
        name: 'Florist Kalanchoe',
        price: '₹189.00',
        url: 'assets/pink-flowers-table.jpg',
        alt: 'pink-flowers-table',
        desc: "It is one of the most popular varieties of Kalanchoe grown in home gardens, both indoors and outdoors. Kalanchoe  is most widely known and beloved for its plentiful, colorful blooms and ease of care. This wonderful succulent requires little else of its owner aside from occasional water and a sunny window. Its blooming habit has long made it a popular holiday gift, and it brings loads of colorful cheer in the colder winter months."
    },
    {
        id: 16,
        name: 'Fairy Washboard + Pot',
        price: '₹380.00',
        url: 'assets/small-aloe-vera-plant-cute-pot.jpg',
        alt: 'small-aloe-vera-plant-cute-pot',
        desc: "Fairy Washboard (Haworthiopsis / Haworthia limifolia) (Marloth): An easy houseplant with funky, textured foliage! Raised ridges on the dark green foliage give this a washboard-like texture. It tolerates neglect and low indoor light well. Haworthia are able to tolerate low, indoor light, making them excellent houseplants, even for beginners. They are particularly easy to grow and rarely affected by common succulent pests and diseases.",
    },
    {
        id: 17,
        name: 'Snake Plant + Colourful Pot',
        price: '₹320.00',
        url: 'assets/snake-plant-colorful-pot.jpg',
        alt: 'snake-plant-colorful-pot',
        desc: "Sansevieria (Snake Plant) is an amazing plant. Its sword-like leaves have striking sculptural beauty and the care is very simple. I have snake plants in nearly every room of my home and they bring lots of visual interest to the environment! Sansevieria removes harmful chemicals from the environment and releases oxygen, resulting in it having air purifying qualities. The plant will grow better in bright light (indirect light near a window in your home), but it can handle a darker corner in your home with less light exposure as well.",
    },
    {
        id: 18,
        name: 'Dwarf Umbrella Tree',
        price: '₹250.00',
        url: 'assets/still-life-with-indoor-plants (1).jpg',
        alt: 'still-life-with-indoor-plants (1)',
        desc: 'Enhance your indoor space with the elegant Schefflera Arboricola, also known as the Dwarf Umbrella Tree. This variety is perfectly suited for indoor environments, featuring smaller, compact leaves compared to its larger relatives. When housed in a smaller pot, it conveniently remains under 2 feet in height, making it an ideal choice for limited spaces.',
    },
    {
        id: 19,
        name: 'Snake Plant + Philodendron Xanadu plant + Dwarf Umbrella Tree + Pot (3 Pcs)',
        price: '₹785.00',
        url: 'assets/still-life-with-indoor-plants (2).jpg',
        alt: 'still-life-with-indoor-plants (2)',
        desc: "Sansevieria (Snake Plant) is an amazing plant. Its sword-like leaves have striking sculptural beauty and the care is very simple. I have snake plants in nearly every room of my home and they bring lots of visual interest to the environment! Sansevieria removes harmful chemicals from the environment and releases oxygen, resulting in it having air purifying qualities. The plant will grow better in bright light (indirect light near a window in your home), but it can handle a darker corner in your home with less light exposure as well. <br> Dwarf Umbrella Tree Enhance your indoor space with the elegant Schefflera Arboricola, also known as the Dwarf Umbrella Tree. This variety is perfectly suited for indoor environments, featuring smaller, compact leaves compared to its larger relatives. When housed in a smaller pot, it conveniently remains under 2 feet in height, making it an ideal choice for limited spaces <br> Philodendron are versatile and popular indoor plants known for their lush foliage and ease of care. They come in various shapes, sizes, and colors, ranging from deep green to variegated patterns.",
    },
    {
        id: 20,
        name: 'Chamaedorea Elegans (Bamboo Palm)',
        price: '₹350.00',
        url: 'assets/still-life-with-indoor-plants.jpg',
        alt: 'still-life-with-indoor-plants',
        desc: "Bamboo Palm is a subtropical palm, upright, spreading, and multi-stemmed growing up to 7' in indoor environments. It is one of the most sought-after indoor palms because it thrives in interior conditions that other plants cannot tolerate.  The leaves spread out attractively and have a drooping form. When grown outdoors in a temperate zone, it can reach 6-7 feet tall and 2-3 feet wide; as a houseplant, it grows only between 2-7 feet tall.",
    },
]
export {products}