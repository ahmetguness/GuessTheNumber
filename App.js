import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  function gameOverHandler() {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  };

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  };

  return (
    <LinearGradient colors={[Colors.primary650, Colors.accent500]} style={styles.mainScreen} >
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.mainScreen} imageStyle={styles.backgroundImage} >
        <SafeAreaView style={styles.mainScreen} >
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
