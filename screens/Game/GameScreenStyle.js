import { StyleSheet } from "react-native";
import { CONSTANTS } from "../../constants"


const styles  = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18
    },
    contentContainer: {
        flex: 1,
    },
    footer: {
        height: 65,
        paddingBottom: 10,
        backgroundColor: "rgba(52, 52, 52, 0.0)"
    },
    startBtn: {
        height: "100%",
        width: "100%",
        backgroundColor: CONSTANTS.COLOR.Primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 57
    },
    startBtnText: {
        color: "white",
        fontWeight: 900,
        fontFamily: "gotham-bold",
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 50
    },
    userAvatarWrapper: {
        height: 24,
        width: 24,
        borderRadius: 12,
    },
    screenTitleWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10
    },
    titleLeftText: {
        fontWeight: 900,
        fontFamily: "gotham-black",
        color: CONSTANTS.COLOR.Primary,
        fontSize: 47
    },
    titleCenterText: {
        fontWeight: 900,
        fontFamily: "gotham-black",
        color: CONSTANTS.COLOR.Primary,
        fontSize: 47,
        marginHorizontal: 15
    },
    titleRightText: {
        fontWeight: 900,
        fontFamily: "gotham-black",
        color: CONSTANTS.COLOR.Primary,
        fontSize: 47
    },
    chanceGameImg: {
        position: "absolute",
        top: -40,
        right: 10,
    },
    
    wheelWrapper: {
        height: 310,
        alignItems: "center",
    },
    wheelShadow: {
    }

})


export default styles