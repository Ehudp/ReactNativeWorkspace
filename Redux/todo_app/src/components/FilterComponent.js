import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

const FilterComponent = ({
  elementStyle,
  textStyle,
  showFilter,
  text,
  filter,
  currentFilter
}) => {
  //alert(currentFilter);
  if (currentFilter === filter) {
    return <Text style={[elementStyle, textStyle]}>{text}</Text>;
  }
  return (
    <TouchableOpacity style={elementStyle} onPress={() => showFilter(filter)}>
      <Text
        style={[textStyle, { color: "blue", textDecorationLine: "underline" }]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterComponent;
