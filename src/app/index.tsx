import { useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { GAMES } from '@/constants/games';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function GamesHomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Wan&apos;s Game Arcade
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            A growing collection of small, focused games.
          </ThemedText>
        </View>

        <ThemedText type="smallBold" style={styles.sectionLabel}>
          Games
        </ThemedText>

        <FlatList
          data={GAMES}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => {
            const handlePress = () => {
              if (item.comingSoon) return;
              router.push(item.route);
            };

            return (
              <ThemedView type="backgroundElement" style={styles.card}>
                <View style={styles.cardTextContainer}>
                  <ThemedText style={styles.cardTitle}>{item.name}</ThemedText>
                  <ThemedText type="small" style={styles.cardDescription}>
                    {item.description}
                  </ThemedText>
                  {item.comingSoon && (
                    <ThemedText type="smallBold" style={styles.comingSoonLabel}>
                      Coming soon
                    </ThemedText>
                  )}
                </View>

                <Pressable
                  accessibilityRole="button"
                  disabled={item.comingSoon}
                  onPress={handlePress}
                  style={({ pressed }) => [
                    styles.playButton,
                    item.comingSoon && styles.playButtonDisabled,
                    pressed && !item.comingSoon && styles.playButtonPressed,
                  ]}
                >
                  <ThemedText
                    type="smallBold"
                    style={styles.playButtonLabel}
                  >
                    Play
                  </ThemedText>
                </Pressable>
              </ThemedView>
            );
          }}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.three,
    alignItems: 'stretch',
    gap: Spacing.four,
    maxWidth: MaxContentWidth,
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
  sectionLabel: {
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  listContent: {
    gap: Spacing.three,
    paddingBottom: Spacing.four,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    borderRadius: Spacing.three,
    gap: Spacing.three,
  },
  cardTextContainer: {
    flex: 1,
    gap: Spacing.one,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardDescription: {
    opacity: 0.9,
  },
  comingSoonLabel: {
    marginTop: Spacing.one,
  },
  playButton: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.two,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButtonPressed: {
    opacity: 0.8,
  },
  playButtonDisabled: {
    opacity: 0.4,
  },
  playButtonLabel: {
    textTransform: 'uppercase',
  },
});

