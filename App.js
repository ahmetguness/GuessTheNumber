import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {

  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />
  };

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.mainScreen} >
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
