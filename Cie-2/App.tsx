import { StatusBar, useColorScheme } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import PreLoginScreen from './src/screens/PreLoginScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [showLogin, setShowLogin] = useState(false);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {showLogin ? (
        <LoginScreen />
      ) : (
        <PreLoginScreen onGetStarted={() => setShowLogin(true)} />
      )}
    </SafeAreaProvider>
  );
}

export default App;