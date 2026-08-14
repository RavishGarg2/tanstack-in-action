import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on standard design layout (e.g., iPhone X / standard Android device)
const GUIDELINE_BASE_WIDTH = 375;
const GUIDELINE_BASE_HEIGHT = 812;

/**
 * Scales value based on the device's width.
 * Useful for horizontal dimensions (width, paddingHorizontal, marginHorizontal, left, right, etc.)
 */
export const horizontalScale = (size: number): number => {
  return (width / GUIDELINE_BASE_WIDTH) * size;
};

/**
 * Scales value based on the device's height.
 * Useful for vertical dimensions (height, paddingVertical, marginVertical, top, bottom, etc.)
 */
export const verticalScale = (size: number): number => {
  return (height / GUIDELINE_BASE_HEIGHT) * size;
};

/**
 * Scales value based on the device's width with a moderation factor.
 * Useful for font size, border radius, icon sizes, etc., to avoid excessively large/small sizes on different screen ratios.
 */
export const moderateScale = (size: number, factor: number = 0.5): number => {
  return size + (horizontalScale(size) - size) * factor;
};

/**
 * Scales value based on the device's height with a moderation factor.
 * Useful for vertical padding, margins, heights, etc.
 */
export const moderateVerticalScale = (size: number, factor: number = 0.5): number => {
  return size + (verticalScale(size) - size) * factor;
};

export { width as screenWidth, height as screenHeight };
