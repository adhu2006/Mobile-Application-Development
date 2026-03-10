import React, {memo, useState, useCallback} from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {CustomText} from '../atoms';
import {COLORS, SPACING, BORDER_RADIUS} from '../constants';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const SizeGrid = memo(({
  sizes = [],
  columns = 4,
  selectedSize,
  onSelectSize,
  unavailableSizes = [],
}) => {
  const [internalSelected, setInternalSelected] = useState(selectedSize);

  const handleSizeSelect = useCallback((size) => {
    if (unavailableSizes.includes(size)) return;
    
    const newSize = internalSelected === size ? null : size;
    setInternalSelected(newSize);
    onSelectSize?.(newSize);
  }, [internalSelected, unavailableSizes, onSelectSize]);

  const containerPadding = SPACING.lg * 2;
  const totalGap = SPACING.sm * (columns - 1);
  const boxSize = (SCREEN_WIDTH - containerPadding - totalGap) / columns;

  return (
    <View style={styles.container}>
      <CustomText variant="bodyBold" style={styles.title}>
        SELECT SIZE
      </CustomText>
      <View style={styles.grid}>
        {sizes.map((size) => {
          const isSelected = internalSelected === size;
          const isUnavailable = unavailableSizes.includes(size);

          return (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeBox,
                {width: boxSize, height: boxSize},
                isSelected && styles.selectedBox,
                isUnavailable && styles.unavailableBox,
              ]}
              onPress={() => handleSizeSelect(size)}
              activeOpacity={isUnavailable ? 1 : 0.7}
              disabled={isUnavailable}>
              <CustomText
                variant="body"
                weight="600"
                color={
                  isUnavailable
                    ? COLORS.textMuted
                    : isSelected
                    ? COLORS.secondary
                    : COLORS.textPrimary
                }>
                {size}
              </CustomText>
              {isUnavailable && <View style={styles.strikethrough} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: SPACING.lg,
  },
  title: {
    marginBottom: SPACING.md,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  sizeBox: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.cardBackground,
    position: 'relative',
    overflow: 'hidden',
  },
  selectedBox: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  unavailableBox: {
    backgroundColor: COLORS.background,
    borderColor: COLORS.border,
  },
  strikethrough: {
    position: 'absolute',
    width: '140%',
    height: 1,
    backgroundColor: COLORS.textMuted,
    transform: [{rotate: '-45deg'}],
  },
});

SizeGrid.displayName = 'SizeGrid';

export default SizeGrid;
