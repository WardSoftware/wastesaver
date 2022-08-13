import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LogonScreen from './screens/Identification/LogonScreen'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [loggedIn, setLogin] = useState(false)
  const login = () => {
    setLogin(true)
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        { loggedIn ? 
          <Navigation colorScheme={colorScheme} /> : 
          <LogonScreen login={login} /> 
        }
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
