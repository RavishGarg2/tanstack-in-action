import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../utils/utils';
import { colors } from '../assets/colors';
import { Product } from '../api/types';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StarIcon } from '@hugeicons/core-free-icons';

interface ProductCardProps {
  item: Product;
  onPress?: () => void;
}

const ProductCard = ({ item, onPress }: ProductCardProps) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.thumbnail}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{item.category}</Text>
          </View>
          <View style={styles.ratingBadge}>
            <HugeiconsIcon
              icon={StarIcon}
              size={moderateScale(12)}
              color={colors.snapchatYellow}
              fill={colors.snapchatYellow}
            />
            <Text style={styles.ratingText}>{item.rating.toFixed(1)}</Text>
          </View>
        </View>

        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>

        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>

        <View style={styles.footerRow}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            {item.discountPercentage > 0 && (
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>
                  {Math.round(item.discountPercentage)}% OFF
                </Text>
              </View>
            )}
          </View>

          {item.brand ? (
            <Text numberOfLines={1} style={styles.brandText}>
              {item.brand}
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.bgCard,
    borderRadius: moderateScale(16),
    padding: moderateScale(12),
    marginBottom: verticalScale(12),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderLight,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  thumbnail: {
    width: horizontalScale(80),
    height: horizontalScale(80),
    borderRadius: moderateScale(12),
    backgroundColor: colors.bgAvatarPlaceholder,
    marginRight: horizontalScale(14),
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(4),
  },
  categoryBadge: {
    backgroundColor: colors.yellowTransparent12,
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(2),
    borderRadius: moderateScale(6),
  },
  categoryText: {
    color: colors.snapchatYellow,
    fontSize: moderateScale(10),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(4),
  },
  ratingText: {
    color: colors.white,
    fontSize: moderateScale(11),
    fontWeight: 'bold',
  },
  title: {
    color: colors.white,
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    marginBottom: verticalScale(2),
  },
  description: {
    color: colors.textSecondary,
    fontSize: moderateScale(11),
    lineHeight: moderateScale(15),
    marginBottom: verticalScale(6),
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(6),
  },
  price: {
    color: colors.snapchatYellow,
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  discountBadge: {
    backgroundColor: colors.femalePinkTransparent,
    paddingHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(2),
    borderRadius: moderateScale(4),
  },
  discountText: {
    color: colors.femalePink,
    fontSize: moderateScale(10),
    fontWeight: 'bold',
  },
  brandText: {
    color: colors.textMuted,
    fontSize: moderateScale(11),
    fontStyle: 'italic',
    maxWidth: horizontalScale(100),
  },
});
