import React, { useState } from "react";
import { Input, VStack, Button } from "native-base";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
} from "react-native-confirmation-code-field";

const Verify = (props) => {
  // @props
  const { onHandleClick, CELL_COUNT } = props;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  return (
    <>
      <VStack space={10}>
        <CodeField
          ref={ref}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Input m={2} key={index} textAlign="center" variant="underlined">
              {symbol || (isFocused ? <Cursor /> : null)}
            </Input>
          )}
        />
        <Button onPress={() => onHandleClick && onHandleClick(value)}>
          {"Send Code"}
        </Button>
      </VStack>
    </>
  );
};

export default Verify;
