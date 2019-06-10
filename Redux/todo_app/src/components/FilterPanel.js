import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FilterLink from "./FilterLink";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../actions/actionTypes";
import * as AppConst from "../actions/AppConst";

const FilterPanel = ({ showFilter, currentFilter }) => (
  <View style={styles.container}>
    <Text style={{ fontSize: 24, marginRight: 20 }}>Show</Text>
    <FilterLink
      showFilter={showFilter}
      text={AppConst.ALL}
      filter={SHOW_ALL}
      currentFilter={currentFilter}
    />
    <FilterLink
      showFilter={showFilter}
      text={AppConst.Active}
      filter={SHOW_ACTIVE}
      currentFilter={currentFilter}
    />
    <FilterLink
      showFilter={showFilter}
      text={AppConst.Completed}
      filter={SHOW_COMPLETED}
      currentFilter={currentFilter}
    />
  </View>
);

export default FilterPanel;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "center"
  }
});
