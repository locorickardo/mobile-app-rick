/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import EditUserInfo from '../EditUserInfo/EditUserInfo';
import UserList from '../UserList/UserList';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="EditUserInfo" component={EditUserInfo} />
      </Stack.Navigator>
  );
};

export default MainNavigator;
