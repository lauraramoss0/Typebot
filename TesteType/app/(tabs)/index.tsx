import { StyleSheet, View, Text } from 'react-native';
import { Bubble } from "@typebot.io/react";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Olha que legal </Text>
      <Bubble
      typebot="teste-aula-1-b6eu0fs"
      theme={{ button: { backgroundColor: "#4A8BB2" } }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#333",
    marginBottom: 20,
  }
});