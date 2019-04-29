import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";

import { colors } from "../theme";
import CenterMessage from "../Components/CenterMessage";

export default class Cities extends React.Component {
  viewCity = city => {
    this.props.navigation.navigate("City", { city });
  };

  render() {
    console.log("Props :", this.props);
    const { cities } = this.props.screenProps;

    if (cities == null) return <CenterMessage message="No Cities" />;
    return (
      <ScrollView>
        <View>
          {cities.map((city, index) => (
            <View>
              <TouchableWithoutFeedback onPress={() => this.viewCity(city)}>
                <View style={styles.cityContainer}>
                  <Text style={styles.city}>{city.city}</Text>
                  <Text style={styles.country}>{city.country}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  city: {
    fontSize: 20
  },
  country: {
    //  color: "rgba(0,0,0,.5)"
  }
});
