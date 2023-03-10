import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, GameScreen } from './screens';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   Button,
//   TouchableOpacity,
// } from 'react-native';

// import WheelOfFortune from 'react-native-wheel-of-fortune';

// const participants = [
//   '%10',
//   '%20',
//   '%30',
//   '%40',
//   '%50',
//   '%60',
//   '%70',
//   '%90',
//   'FREE',
// ];
// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       winnerValue: null,
//       winnerIndex: null,
//       started: false,
//     };
//     this.child = null;
//   }

//   buttonPress = () => {
//     this.setState({
//       started: true,
//     });
//     this.child._onpress();
//   };

//   render() {
//     const wheelOptions = {
//       rewards: participants,
//       knobSize: 30,
//       borderWidth: 5,
//       borderColor: '#fff',
//       innerRadius: 30,
//       duration: 6000,
//       backgroundColor: 'transparent',
//       textAngle: 'horizontal',
//       knobSource: require('./knob.png'),
//       onRef: ref => (this.child = ref),
//     };
//     return (
//       <View style={styles.container}>
//         <StatusBar barStyle={'light-content'} />
//         <WheelOfFortune
//           options={wheelOptions}
//           getWinner={(value, index) => {
//             this.setState({winnerValue: value, winnerIndex: index});
//           }}
//         />
//         {!this.state.started && (
//           <View style={styles.startButtonView}>
//             <TouchableOpacity
//               onPress={() => this.buttonPress()}
//               style={styles.startButton}>
//               <Text style={styles.startButtonText}>Spin to win!</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         {this.state.winnerIndex != null && (
//           <View style={styles.winnerView}>
//             <Text style={styles.winnerText}>
//               You win {participants[this.state.winnerIndex]}
//             </Text>
//             <TouchableOpacity
//               onPress={() => {
//                 this.setState({winnerIndex: null});
//                 this.child._tryAgain();
//               }}
//               style={styles.tryAgainButton}>
//               <Text style={styles.tryAgainText}>TRY AGAIN</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     );
//   }
// }
// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#CC0000'
//   },
//   startButtonView: {
//     position: 'absolute',
//   },
//   startButton: {
//     backgroundColor: 'rgba(0,0,0,.5)',
//     marginTop: 50,
//     padding: 5,
//   },
//   startButtonText: {
//     fontSize: 50,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   winnerView: {
//     position: 'absolute',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tryAgainButton: {
//     padding: 10,
//   },
//   winnerText: {
//     fontSize: 30,
//   },
//   tryAgainButton: {
//     padding: 5,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   tryAgainText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
// });

// import React, { PureComponent } from 'react';
// import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { RNCamera } from 'react-native-camera';

// export default class App extends PureComponent {
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           ref={ref => {
//             this.camera = ref;
//           }}
//           style={styles.preview}
//           type={RNCamera.Constants.Type.back}
//           flashMode={RNCamera.Constants.FlashMode.on}
//           androidCameraPermissionOptions={{
//             title: 'Permission to use camera',
//             message: 'We need your permission to use your camera',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           androidRecordAudioPermissionOptions={{
//             title: 'Permission to use audio recording',
//             message: 'We need your permission to use your audio',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           onGoogleVisionBarcodesDetected={({ barcodes }) => {
//             console.log(barcodes);
//           }}
//         />
//         <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//           <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
//             <Text style={{ fontSize: 14 }}> SNAP </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }

//   takePicture = async () => {
//     if (this.camera) {
//       const options = { quality: 0.5, base64: true };
//       const data = await this.camera.takePictureAsync(options);
//       console.log(data.uri);
//     }
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });