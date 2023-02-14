import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'hciapp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      androidScaleType: 'CENTER_CROP',
      launchShowDuration: 500,
    },
},
}

export default config;
