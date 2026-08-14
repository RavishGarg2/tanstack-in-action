import { Animated, Easing, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { moderateScale, verticalScale } from '../utils/utils';
import { colors } from '../assets/colors';
import { Loading02Icon } from '@hugeicons/core-free-icons';

function FooterLoader() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    animation.start();
    return () => animation.stop();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.footerLoader}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <HugeiconsIcon
          icon={Loading02Icon}
          size={moderateScale(24)}
          color={colors.snapchatYellow}
        />
      </Animated.View>
    </View>
  );
}

export default FooterLoader;

const styles = StyleSheet.create({
    footerLoader: {
    paddingVertical: verticalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(60),
  },
});
