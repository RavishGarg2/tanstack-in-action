import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { horizontalScale, moderateScale, verticalScale } from '../utils/utils';
import { colors } from '../assets/colors';
import { UserCardProps } from '../api/types';

const UserCard = ({ item, onToggleGender, onPress }: UserCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.cardDetails}>
        <Text style={styles.name}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.companyTitle}>{item.company?.title || 'User'}</Text>
        <Text numberOfLines={1} style={styles.companyName}>
          {item.company?.name || 'Independent'}
        </Text>
        <Text numberOfLines={1} style={styles.email}>
          {item.email}
        </Text>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity
          style={[
            styles.genderTag,
            item.gender === 'female' ? styles.genderFemale : styles.genderMale,
          ]}
          onPress={() => {
            const newGender = item.gender === 'female' ? 'male' : 'female';
            onToggleGender(item.id, newGender);
          }}
          activeOpacity={0.7}
        >
          <Text
            style={[
              styles.genderText,
              item.gender === 'female'
                ? styles.genderTextFemale
                : styles.genderTextMale,
            ]}
          >
            {item.gender === 'female' ? 'Female ♀' : 'Male ♂'}
          </Text>
        </TouchableOpacity>

        <View style={styles.roleTag}>
          <Text style={styles.roleText}>{item.role}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.bgCard,
    borderRadius: moderateScale(16),
    padding: moderateScale(14),
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
  avatar: {
    width: horizontalScale(64),
    height: horizontalScale(64),
    borderRadius: horizontalScale(32),
    backgroundColor: colors.bgAvatarPlaceholder,
    marginRight: horizontalScale(16),
  },
  cardDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    color: colors.white,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  companyTitle: {
    color: colors.snapchatYellow,
    fontSize: moderateScale(12),
    fontWeight: '600',
    marginTop: verticalScale(2),
  },
  companyName: {
    color: colors.textSecondary,
    fontSize: moderateScale(12),
    marginTop: verticalScale(1),
  },
  email: {
    color: colors.textSubMuted,
    fontSize: moderateScale(11),
    marginTop: verticalScale(4),
  },
  cardActions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: verticalScale(64),
  },
  roleTag: {
    backgroundColor: colors.yellowTransparent15,
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(6),
  },
  roleText: {
    color: colors.snapchatYellow,
    fontSize: moderateScale(10),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  genderTag: {
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(6),
    marginBottom: verticalScale(6),
  },
  genderFemale: {
    backgroundColor: colors.femalePinkTransparent,
  },
  genderMale: {
    backgroundColor: colors.maleBlueTransparent,
  },
  genderText: {
    fontSize: moderateScale(11),
    fontWeight: 'bold',
  },
  genderTextFemale: {
    color: colors.femalePink,
  },
  genderTextMale: {
    color: colors.maleBlue,
  },
});
