import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import FilterComponent from "./FilterComponent";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../actions/actionTypes";

const buildButton = (text, filter, showFilter) => (
  <TouchableOpacity
    style={styles.elementStyle}
    onPress={() => showFilter(filter)}
  >
    <Text style={styles.textStyle}>{text}</Text>
  </TouchableOpacity>
);

const FilterPanel = ({ showFilter, currentFilter }) => (
  <View style={styles.container}>
    <Text style={[styles.elementStyle, styles.textStyle]}>Show</Text>
    <FilterComponent
      elementStyle={styles.elementStyle}
      textStyle={styles.textStyle}
      showFilter={showFilter}
      text="All"
      filter={SHOW_ALL}
      currentFilter={currentFilter}
    />
    <FilterComponent
      elementStyle={styles.elementStyle}
      textStyle={styles.textStyle}
      showFilter={showFilter}
      text="Active"
      filter={SHOW_ACTIVE}
      currentFilter={currentFilter}
    />
    <FilterComponent
      elementStyle={styles.elementStyle}
      textStyle={styles.textStyle}
      showFilter={showFilter}
      text="Completed"
      filter={SHOW_COMPLETED}
      currentFilter={currentFilter}
    />
    {/* {buildButton("All", SHOW_ALL, showFilter)}
    {buildButton("Active", SHOW_ACTIVE, showFilter)}
    {buildButton("completed", SHOW_COMPLETED, showFilter)} */}
  </View>
);

export default FilterPanel;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "row",
    padding: 20,
    //alignItems: "stretch",
    justifyContent: "center"
  },
  elementStyle: {
    marginRight: 20
  },
  textStyle: {
    fontSize: 24
  }
});
