function loadImageOrPlaceholder(imageUrl, placeholderRequire) {
    if (typeof imageUrl === 'string') {
        if (process.env.NODE_ENV === 'production') {
            return { uri: imageUrl.replace('http://', 'https://') };
        }

        return { uri: imageUrl };
    }

    return placeholderRequire;
}

export {
    loadImageOrPlaceholder
}