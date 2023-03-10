import { View, Text, Image, ScrollView} from 'react-native'
import React, { Component } from 'react'
import styles from './GameScreenStyle'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WheelOfFortune from 'react-native-wheel-of-fortune';

const participants = [
  '10',
  '20',
  '30',
  '40',
  '50',
  '60',
  '70',
  '90',
  '60',
  '70',
  '90',
  'OK',
];

class GameScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
    };
    this.child = null;
  }

    buttonPress = () => {
        this.setState({
        started: true,
        });
        this.child._onpress();
    };

  render() {
    const wheelOptions = {
      rewards: participants,
      knobSize: 30,
      borderWidth: 5,
      borderColor: '#fff',
      innerRadius: 30,
      duration: 6000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('../../assets/images/knob.png'),
      onRef: ref => (this.child = ref),
    };
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <View style={[styles.contentContainer, {paddingBottom: 30}]}>
                {/* HEADER */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.goBackbtn}>
                        <Image style={styles.goBackbtnImage} source={require("../../assets/images/back-icon.png")} />
                    </TouchableOpacity>
                    <View style={styles.userAvatarWrapper}>
                        <Image style={styles.userAvatar} source={require("../../assets/images/user-avatar.png")} />
                    </View>
                </View>
    
                {/* SECTION TITLE */}
                <View style={styles.screenTitleWrapper}>
                    <Text style={styles.titleLeftText}>Spin</Text>
                    <Text style={styles.titleCenterText}>&</Text>
                    <Text style={styles.titleRightText}>Win</Text>
                    <Image style={styles.chanceGameImg} source={require("../../assets/images/chancegame-img.png")} />
                </View>
    
                {/* WHEEL */}
                <View style={styles.wheelWrapper}>
                    <WheelOfFortune
                       options={wheelOptions}
                       getWinner={(value, index) => {
                            this.setState({winnerValue: value, winnerIndex: index});
                        }}
                    />
                    
                    {/* {!this.state.started && (
                    <View style={styles.startButtonView}>
                        <TouchableOpacity
                        onPress={() => this.buttonPress()}
                        style={styles.startButton}>
                        <Text style={styles.startButtonText}>Spin to win!</Text>
                        </TouchableOpacity>
                    </View>
                    )} */}
                    {/* {this.state.winnerIndex != null && (
                    <View style={styles.winnerView}>
                        <Text style={styles.winnerText}>
                        You win {participants[this.state.winnerIndex]}
                        </Text>
                        <TouchableOpacity
                        onPress={() => {
                            this.setState({winnerIndex: null});
                            this.child._tryAgain();
                        }}
                        style={styles.tryAgainButton}>
                        <Text style={styles.tryAgainText}>TRY AGAIN</Text>
                        </TouchableOpacity>
                    </View>
                    )} */}
                    <Image style={styles.wheelShadow} source={require("../../assets/images/wheel-shadow.png")}/>
                </View>

            </View>
          </ScrollView>
    
            {/* FOOTER */}
            <View style={styles.footer}>
              <TouchableOpacity 
                style={styles.startBtn}
                onPress={() => this.buttonPress()}
              >
                <Text style={styles.startBtnText}>Tourner la roue</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
      )
    }
}

export default GameScreen