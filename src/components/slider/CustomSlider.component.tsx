import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { getStyles } from './CustomSlider.style';
import Carousel from 'react-native-reanimated-carousel';

const { width: viewportWidth } = Dimensions.get('window');


export const CustomSliderComponent = ({children}) => {
  
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      {item}
    </View>
  );

  const styles =  getStyles();
  return (
    <View style={styles.container}>
      <Carousel
        width={viewportWidth}
        height={700}
        data={React.Children.toArray(children)}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
        scrollAnimationDuration={1000}
      />
      <View style={styles.dotsContainer}>
        {React.Children.map(children, (_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { opacity: index === activeIndex ? 1 : 0.3 },
            ]}
          />
        ))}
      </View>
    </View>
  );

  };


