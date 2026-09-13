import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { styles } from './styles';
import { useTicTacToe } from './useTicTacToe';

export default function TicTacToeScreen() {
  const { board, currentPlayer, status, winner, isBoardFull, handleCellPress, handleReset, handleBackToGames, statusLabel } = useTicTacToe();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Tic-Tac-Toe
          </ThemedText>
          <ThemedText type="small" style={styles.subtitle}>
            Classic 3x3 grid. Take turns as X and O.
          </ThemedText>
        </View>

        <View style={styles.statusContainer}>
          <ThemedText type="subtitle" style={styles.statusText}>
            {statusLabel}
          </ThemedText>
        </View>

        <View style={styles.board}>
          {board.map((cell, index) => {
            const isTop = index < 3;
            const isBottom = index >= 6;
            const isLeft = index % 3 === 0;
            const isRight = index % 3 === 2;

            return (
              <Pressable
                key={index}
                accessibilityRole="button"
                accessibilityLabel={`Cell ${index + 1}`}
                onPress={() => handleCellPress(index)}
                style={({ pressed }) => [
                  styles.cell,
                  !isTop && styles.cellBorderTop,
                  !isLeft && styles.cellBorderLeft,
                  !isRight && styles.cellBorderRight,
                  !isBottom && styles.cellBorderBottom,
                  pressed && styles.cellPressed,
                ]}
              >
                <ThemedText style={styles.cellLabel}>{cell ?? ''}</ThemedText>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.actionsRow}>
          <Pressable
            accessibilityRole="button"
            onPress={handleReset}
            style={({ pressed }) => [styles.primaryButton, pressed && styles.primaryButtonPressed]}
          >
            <ThemedText type="smallBold" style={styles.primaryButtonLabel}>
              Play again
            </ThemedText>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={handleBackToGames}
            style={({ pressed }) => [styles.secondaryButton, pressed && styles.secondaryButtonPressed]}
          >
            <ThemedText type="smallBold" style={styles.secondaryButtonLabel}>
              Back to games
            </ThemedText>
          </Pressable>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

