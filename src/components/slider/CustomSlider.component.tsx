import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Svg, Circle} from 'react-native-svg';
import {getStyles} from './CustomSlider.style';
import Carousel from 'react-native-reanimated-carousel';

const {width: viewportWidth} = Dimensions.get('window');

interface CustomSliderComponentProps {
  children: React.ReactNode;
  dotsVisible?: boolean;
  height?: number;
}
export const CustomSliderComponent = ({
  children,
  dotsVisible = true,
  height = 700,
}: CustomSliderComponentProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item}) => <View style={styles.slide}>{item}</View>;

  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Carousel
        width={viewportWidth}
        height={height}
        data={React.Children.toArray(children)}
        renderItem={renderItem}
        onSnapToItem={index => setActiveIndex(index)}
        scrollAnimationDuration={1000}
      />
      {dotsVisible && (<View style={styles.dotsContainer}>
        {React.Children.map(children, (_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeIndex && styles.activeDot]}
          />
        ))}
      </View>)}
      
    </View>
  );
};
