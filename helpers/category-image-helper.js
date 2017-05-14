/**
 * Get an image resource for a category
 * @param category
 */
function getImageForCategory(category : string) {
    switch (category.toLowerCase()) {
        case 'sport':
        case 'sports':
            return require('../assets/categories/sports.jpg');

        case 'pool':
        case 'swimming':
            return require('../assets/categories/pool.jpg');

        case 'market':
            return require('../assets/categories/market.jpg');

        case 'chill':
            return require('../assets/categories/chill.jpg');

        case 'open air':
            return require('../assets/categories/open-air.jpg');

        case 'chic':
            return require('../assets/categories/chic.jpg');

        case 'cosy':
            return require('../assets/categories/cosy.jpg');

        case 'design':
            return require('../assets/categories/design.jpg');

        case 'hipster':
            return require('../assets/categories/hipster.jpg');

        case 'loud':
            return require('../assets/categories/loud.jpg');

        case 'urban':
            return require('../assets/categories/urban.jpg');
    }

    return null;
}

export {
    getImageForCategory
};
