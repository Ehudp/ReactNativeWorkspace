import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

const FilterLink = ({ showFilter, text, filter, currentFilter }) => {
  if (currentFilter === filter) {
    return <Text style={styles.textStyle}>{text}</Text>;
  }
  return (
    <TouchableOpacity onPress={() => showFilter(filter)}>
      <Text
        style={[
          styles.textStyle,
          { color: "blue", textDecorationLine: "underline" }
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default FilterLink;

const styles = StyleSheet.create({
  textStyle: {
    marginRight: 20,
    fontSize: 24
  }
});
