import React from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import theme from "../../../theme";
import Text from "../../UI/Text";

const SortBySelector: React.FC<{
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}> = ({ selected, setSelected }) => {
  return (
    <View style={{ backgroundColor: theme.colors.white, flexDirection: "row" }}>
      <Text>Sort By:</Text>
      <View style={{ flexGrow: 1 }}>
        <Picker<string>
          selectedValue={selected}
          onValueChange={(itemValue) => {
            setSelected(itemValue);
          }}
        >
          <Picker.Item label="Latest" value={"latest"} />
          <Picker.Item label="Highest Rated" value={"highest"} />
          <Picker.Item label="Lowest Rated" value={"lowest"} />
        </Picker>
      </View>
    </View>
  );
};
export default SortBySelector;
