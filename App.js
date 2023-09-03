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
  const [guessRounds, setGuessRounds] = useState(0);


  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  };

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onPlayAgain={startNewGameHandler} />
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