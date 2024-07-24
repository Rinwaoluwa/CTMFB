import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useAppSelector } from '../utils/redux/hooks';
import { RootState } from '../utils/redux/store';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const Router = () => {
    const {isAuthenticated} = useAppSelector((state: RootState) => state.authTracker);
    const [loaded, error] = useFonts({
      'Mulish-Bold': require('../assets/fonts/Mulish-Bold.ttf'),
      'Mulish-Light': require('../assets/fonts/Mulish-Light.ttf'),
      'Mulish-Medium': require('../assets/fonts/Mulish-Medium.ttf'),
      'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf'),
    });

    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);
  
    if (!loaded && !error) {
      return null;
    }
  
    return (
    //   <NavigationContainer>
    //     {isAuthenticated ? <AppStack /> : <AuthStack />}
    //   </NavigationContainer>
    );
  };
  
  export default Router;
