import React from 'react';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function GameBoardCategoryIcon(props) {
    switch (props.type.toLowerCase()) {
        case 'sport':
            return <MaterialCommunityIcon {...props} name="run" />;

        case 'social':
            return <MaterialCommunityIcon {...props} name="message-outline" />;
            return <MaterialCommunityIcon {...props} name="run" />;

        case 'museums':
            return <FontAwesomeIcon {...props} name="flag" />;

        default:
            return null;
    }
}

export default GameBoardCategoryIcon;
