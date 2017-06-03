import React from 'react';
import { ListView } from 'react-native';
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
        />
    );

    function renderDiaryListItem({ item, index }) {
        return (
            <DiaryListItem
                key={index}
                diaryItem={item}
            />
        )
    }
}

export default DiaryList;
