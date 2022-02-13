import { Picker } from "@react-native-picker/picker";
import React from "react";
import { View } from "react-native";

const OrderByRepositories = ({ orderBy, setOrderBy }) => {
  return (
    <View>
      <Picker
        selectedValue={orderBy}
        onValueChange={(itemValue, itemIndex) => setOrderBy(itemValue)}
      >
        <Picker.Item label="Latest repositories" value="Latest repositories" />
        <Picker.Item
          label="Highest rated repositories"
          value="Highest rated repositories"
        />
        <Picker.Item
          label="Lowest rated repositories"
          value="Lowest rated repositories"
        />
      </Picker>
    </View>
  );
};

export default OrderByRepositories;
