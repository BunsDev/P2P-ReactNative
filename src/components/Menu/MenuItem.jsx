import React from "react";
import { HStack, Pressable, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MenuItem = (props) => {
  const { item } = props;
  return (
    <Pressable onPress={() => console.log("click item")}>
      {({ isPressed }) => {
        return (
          <HStack
            alignItems="center"
            justifyContent="space-between"
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
          >
            <Text>{item.label}</Text>
            <MaterialCommunityIcons
              name={item.icon}
              size={30}
              color="#a3a3a3"
            />
          </HStack>
        );
      }}
    </Pressable>
  );
};

export default MenuItem;
