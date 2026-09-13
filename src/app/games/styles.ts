import { BottomTabInset, Spacing } from '@/constants/theme';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    safeArea: {
      flex: 1,
      paddingHorizontal: Spacing.four,
      paddingBottom: BottomTabInset + Spacing.four,
      alignItems: 'stretch',
      gap: Spacing.four,
    },
    header: {
      marginTop: Spacing.four,
      gap: Spacing.two,
    },
    title: {
      textAlign: 'left',
    },
    subtitle: {
      fontSize: 16,
    },
    statusContainer: {
      alignItems: 'center',
      marginTop: Spacing.two,
    },
    statusText: {
      fontSize: 20,
    },
    board: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignSelf: 'center',
      width: 280,
      height: 280,
      marginTop: Spacing.four,
    },
    cell: {
      width: '33.3333%',
      height: '33.3333%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cellPressed: {
      opacity: 0.8,
    },
    cellLabel: {
      fontSize: 40,
      fontWeight: '700',
      lineHeight: 40,
    },
    cellBorderTop: {
      borderTopWidth: 1,
    },
    cellBorderBottom: {
      borderBottomWidth: 1,
    },
    cellBorderLeft: {
      borderLeftWidth: 1,
    },
    cellBorderRight: {
      borderRightWidth: 1,
    },
    actionsRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: Spacing.three,
      marginTop: Spacing.four,
    },
    primaryButton: {
      flex: 1,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      borderRadius: Spacing.two,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryButtonPressed: {
      opacity: 0.8,
    },
    primaryButtonLabel: {
      textTransform: 'uppercase',
    },
    secondaryButton: {
      flex: 1,
      paddingHorizontal: Spacing.three,
      paddingVertical: Spacing.two,
      borderRadius: Spacing.two,
      alignItems: 'center',
      justifyContent: 'center',
    },
    secondaryButtonPressed: {
      opacity: 0.8,
    },
    secondaryButtonLabel: {
      textTransform: 'uppercase',
    },
  });
  
  