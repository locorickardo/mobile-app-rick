/* eslint-disable prettier/prettier */
// MainNavigator.tsx

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EditUserInfo from "./EditUserInfo/EditUserInfo";
import { UserForm } from "./UserForm/UserForm";
import { UserInfo } from "./UserInfo/UserInfo";
import UserList from "./UserList/UserList";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="UserInfo" component={UserInfo} />
      <Stack.Screen name="EditUserInfoStack" component={EditUserInfo} />
      <Stack.Screen name="UserForm" component={UserForm} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
