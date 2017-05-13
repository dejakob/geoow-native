import React from 'react';

/**
 * <PublicBakground />
 * @constructor
 */
function PublicBackground(props) {
    return (
        <View>
            <Image
                resizeMode="cover"
            >
                
            </Image>
            <View>
                {props.children}
            </View>
        </View>
    )
}

export default PublicBackground;
