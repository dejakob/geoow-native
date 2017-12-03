import React from 'react';
import { View, Text } from 'react-native';
import { createStyle, getStyle } from 'react-native-styler';
import Color from 'color';

createStyle({
    cards: {
        listItemCard: {
            backgroundColor: 'theme:sheet',
            marginRight: '12w4s',
            marginBottom: '6h4s',
            marginLeft: '12w4s',
            borderBottomWidth: '2h4s',
            borderRadius: '2h4s',

            title: {
                fontWeight: '600'
            }
        }
    }
})

function Card(props) {
    return (
        <View
            style={[getStyle('cards__listItemCard'), { borderBottomColor: Color(props.tintColor).darken(0.2) }, props.style]}
        >
            {props.content}
        </View>
    );
}

const ListItemCard = props => <Card {...props} />;

export {
    ListItemCard
}