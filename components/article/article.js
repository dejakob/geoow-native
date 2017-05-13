import React from 'react';
import { View } from 'react-native';
import { getStyle } from 'react-native-styler';
import './article.style';

/**
* <Article />
 * @constructor
 */
function Article(props) {
    return (
        <View
            style={getStyle('article')}
        >
            {props.children}
        </View>
    )
}

export default Article;
