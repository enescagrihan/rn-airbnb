import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';

const GuestsScreen = () => {
  let [numberOfAdults, setNumberOfAdults] = useState(0);
  let [numberOfChildren, setNumberOfChildren] = useState(0);
  let [numberOfInfants, setNumberOfInfants] = useState(0);

  return (
    <View>
      {/* Row 1: Olders */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={styles.text}>Adults</Text>
          <Text style={styles.subText}>Ages 13 or above</Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.buttons}>
          <Pressable
            onPress={() => setNumberOfAdults(numberOfAdults - 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          <Text style={styles.value}>{numberOfAdults}</Text>

          <Pressable
            onPress={() => setNumberOfAdults(numberOfAdults + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Row 2: Children */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={styles.text}>Childrens</Text>
          <Text style={styles.subText}>Ages 2 - 12</Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.buttons}>
          <Pressable
            onPress={() => setNumberOfChildren(numberOfChildren - 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          <Text style={styles.value}>{numberOfChildren}</Text>

          <Pressable
            onPress={() => setNumberOfChildren(numberOfChildren + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>

      {/* Row 3: Infrants */}
      <View style={styles.row}>
        {/* Titles */}
        <View>
          <Text style={styles.text}>Infants</Text>
          <Text style={styles.subText}>Under 2</Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.buttons}>
          <Pressable
            onPress={() => setNumberOfInfants(numberOfInfants - 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          <Text style={styles.value}>{numberOfInfants}</Text>

          <Pressable
            onPress={() => setNumberOfInfants(numberOfInfants + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>

    </View>
  );
};

export default GuestsScreen;
