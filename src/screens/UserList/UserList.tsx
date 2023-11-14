import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";

import { useGetUsersQuery } from "../../store/api/usersApi";

const UserList = ({ navigation }) => {
  const { data, isLoading } = useGetUsersQuery({});

  const handleEditPress = (user) => {
    // Navigate to the edit screen or implement your edit logic here
    navigation.navigate("EditUserInfoStack", { user });
  };

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handleEditPress(item)}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              <Text>{`${item.firstName} ${item.lastName}`}</Text>
              <Text>Edit</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default UserList;
