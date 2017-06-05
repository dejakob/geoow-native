import React from 'react';
import { FlatList, View } from 'react-native';
import { getStyle } from 'react-native-styler';
import DiaryListItem from './diary-list-item';

/**
 * <DiaryList />
 * @param props
 * @returns {XML}
 * @constructor
 */
function DiaryList(props) {
    const diaryListItems = props.diary.get('myDiary').toArray();

    return (
        <FlatList
            data={diaryListItems}
            renderItem={renderDiaryListItem}
            horizontal={true}
            pagingEnabled={true}
            removeClippedSubviews={false}
        />
    );

    function renderDiaryListItem({ item, index }) {
        return (
            <View
                style={getStyle('diaryList__scene')}
            >
                <DiaryListItem
                    key={index}
                    diaryItem={item}
                />
            </View>
        )
    }
}

export default DiaryList;
