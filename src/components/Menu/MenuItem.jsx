import React from "react";
import { HStack, Pressable, Text } from "native-base";

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
            <HStack alignItems="center" space={2}>
              {item.leftCP}
              <Text>{item.leftname}</Text>
            </HStack>
            <HStack space={2} alignItems="center">
              <Text color="#a3a3a3">{item.rightname}</Text>
              {item.rightCP}
            </HStack>
          </HStack>
        );
      }}
    </Pressable>
  );
};

export default MenuItem;
