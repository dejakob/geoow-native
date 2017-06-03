import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { getStyle } from 'react-native-styler';
import store from '../services/store';
import HeaderTitle from '../components/header/header-title';
import HeaderCredits from '../components/header/header-credits';
import PublicBackground from '../components/public-background/public-background';
import DashboardPrimaryAction from '../components/dashboard-primary-action/dashboard-primary-action';
import DiaryList from '../components/diary-list/diary-list';
import DiaryAddModal from '../components/diary-add-modal/diary-add-modal';
import FlatIcon from '../components/flat-icon/flat-icon';
import '../components/header/header.style.js';
import '../components/tab-bar/tab-bar.style.js';

/**
 * <Diary />
 */
class Diary extends Component
{
    static navigationOptions = (props) => ({
        headerStyle: getStyle('header'),
        headerLeft: <HeaderTitle>Diary</HeaderTitle>,
        headerRight: (
            <HeaderCredits
                score={store.getState().user.getIn(['me', 'score'])}
                onPress={() => props.navigation.navigate('Scan')}
            />
        ),
        gesturesEnabled: false,

        tabBarIcon: ({ tintColor }) => <FlatIcon name="notebook" style={[getStyle('tabBar__icon'), { color: tintColor }]} />
    });

    componentWillMount() {

    }

    render() {
        return (
            <PublicBackground>
                <DiaryList
                    diary={this.props.diary}
                />
                <DashboardPrimaryAction
                    onPress={() => {}}
                >
                    Write into diary
                </DashboardPrimaryAction>
                <DiaryAddModal />
            </PublicBackground>
        );
    }
}

export default Diary;
