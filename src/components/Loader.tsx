import { Animated, Easing, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { horizontalScale, moderateScale, verticalScale } from '../utils/utils';
import { colors } from '../assets/colors';
import { Loading02Icon } from '@hugeicons/core-free-icons';

const LOADING_TEXTS = [
  'Loading User Directory...',
  'Finding active users...',
  'Connecting directory...',
  'Preparing user cards...',
];

const Loader = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const pulseValue = useRef(new Animated.Value(0.4)).current;
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    spinAnimation.start();

    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 0.4,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    pulseAnimation.start();

    const textInterval = setInterval(() => {
      setLoadingTextIndex(prev => (prev + 1) % LOADING_TEXTS.length);
    }, 2500);

    return () => {
      spinAnimation.stop();
      pulseAnimation.stop();
      clearInterval(textInterval);
    };
  }, [spinValue, pulseValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.centerContainer}>
      <View style={styles.loaderWrapper}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <HugeiconsIcon
            icon={Loading02Icon}
            size={moderateScale(48)}
            color={colors.snapchatYellow}
          />
        </Animated.View>
        <Animated.Text style={[styles.loadingText, { opacity: pulseValue }]}>
          {LOADING_TEXTS[loadingTextIndex]}
        </Animated.Text>
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bgPrimary,
  },
  loaderWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bgCardGlassLoader,
    paddingVertical: verticalScale(32),
    paddingHorizontal: horizontalScale(32),
    borderRadius: moderateScale(24),
    borderWidth: 1,
    borderColor: colors.borderLight,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  loadingText: {
    color: colors.white,
    marginTop: verticalScale(18),
    fontSize: moderateScale(14),
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});
