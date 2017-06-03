import React from 'react';
import { ListView } from 'react-native';

function DiaryList(props) {
    const diaryListItems = props.diary.get('myDiary').toArray();

    return (
        <FlatList
            data={}
            renderItem={({item}) => <Text>{item.key}</Text>}
        />
    )
}

export default DiaryList;
