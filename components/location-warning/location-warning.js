import React from 'react';
import { Dimensions, View } from 'react-native';
import MainBackground from '../main-background/main-background';
import Animation from 'lottie-react-native';
import InfoText from '../info-text/info-text';

let animationRef = null;
let isPlaying = false;

function LocationWarning() {
    if (animationRef && !isPlaying) {
        animationRef.play();
        isPlaying = true;
    }

    return (
        <MainBackground>
            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
                <View>
                    <Animation
                        ref={animation => animationRef = animation}
                        style={{ height: Dimensions.get('window').width / 2, width: Dimensions.get('window').width / 2 }}
                        source={require('../../assets/animations/permission.json')}
                        loop={true}
                    />
                </View>
                <InfoText>
                    Geoow needs your location to function in any way.
                </InfoText>
                <InfoText>
                    Please make sure your location services are enabled and access is granted to the app.
                </InfoText>
            </View>
        </MainBackground>
    )
}

export default LocationWarning;
