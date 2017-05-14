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
    }

    return null;
}

export {
    getImageForCategory
};
