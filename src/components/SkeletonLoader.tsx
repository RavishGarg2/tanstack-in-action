import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { horizontalScale, verticalScale, moderateScale } from '../utils/utils';
import { colors } from '../assets/colors';

export default function SkeletonLoader() {
  const pulseAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 0.7,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );
    
    animation.start();
    
    return () => {
      animation.stop();
    };
  }, [pulseAnim]);

  const animatedStyle = {
    opacity: pulseAnim,
  };

  // Create a list of 8 mock cards
  const mockCards = Array.from({ length: 8 });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Skeleton */}
      <View style={styles.header}>
        <Animated.View style={[styles.headerTitle, animatedStyle]} />
        <Animated.View style={[styles.headerSubtitle, animatedStyle]} />
      </View>

      <ScrollView contentContainerStyle={styles.listContent} scrollEnabled={false}>
        {mockCards.map((_, index) => (
          <View key={index} style={styles.card}>
            {/* Avatar placeholder */}
            <Animated.View style={[styles.avatar, animatedStyle]} />

            {/* Details placeholder */}
            <View style={styles.cardDetails}>
              <Animated.View style={[styles.textLine, styles.nameLine, animatedStyle]} />
              <Animated.View style={[styles.textLine, styles.titleLine, animatedStyle]} />
              <Animated.View style={[styles.textLine, styles.companyLine, animatedStyle]} />
              <Animated.View style={[styles.textLine, styles.emailLine, animatedStyle]} />
            </View>

            {/* Actions placeholder */}
            <View style={styles.cardActions}>
              <Animated.View style={[styles.tag, styles.genderTag, animatedStyle]} />
              <Animated.View style={[styles.tag, styles.roleTag, animatedStyle]} />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  header: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(16),
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  headerTitle: {
    width: horizontalScale(180),
    height: verticalScale(28),
    backgroundColor: colors.whiteTransparent10,
    borderRadius: moderateScale(6),
    marginBottom: verticalScale(8),
  },
  headerSubtitle: {
    width: horizontalScale(240),
    height: verticalScale(14),
    backgroundColor: colors.whiteTransparent5,
    borderRadius: moderateScale(4),
  },
  listContent: {
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(12),
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.bgCard,
    borderRadius: moderateScale(16),
    padding: moderateScale(14),
    marginBottom: verticalScale(12),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  avatar: {
    width: horizontalScale(64),
    height: horizontalScale(64),
    borderRadius: horizontalScale(32),
    backgroundColor: colors.whiteTransparent8,
    marginRight: horizontalScale(16),
  },
  cardDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  textLine: {
    backgroundColor: colors.whiteTransparent5,
    borderRadius: moderateScale(4),
    marginBottom: verticalScale(6),
  },
  nameLine: {
    width: '70%',
    height: verticalScale(16),
    backgroundColor: colors.whiteTransparent10,
  },
  titleLine: {
    width: '45%',
    height: verticalScale(12),
  },
  companyLine: {
    width: '60%',
    height: verticalScale(11),
  },
  emailLine: {
    width: '80%',
    height: verticalScale(11),
    marginBottom: 0,
  },
  cardActions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: verticalScale(64),
  },
  tag: {
    backgroundColor: colors.whiteTransparent5,
    borderRadius: moderateScale(6),
  },
  genderTag: {
    width: horizontalScale(60),
    height: verticalScale(20),
  },
  roleTag: {
    width: horizontalScale(70),
    height: verticalScale(18),
  },
});
