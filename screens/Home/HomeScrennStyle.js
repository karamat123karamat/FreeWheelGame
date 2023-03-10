import { StyleSheet } from "react-native";
import { CONSTANTS } from "../../constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18
    },
    contentContainer: {
        flex: 1,
    },
    head: {
        marginBottom: 20
    },
    title: {
        color: CONSTANTS.COLOR.Primary,
        fontSize: 22,
        fontFamily: "gotham-black",
        marginBottom: 10,
        fontWeight: 900,
        letterSpacing: .3
    },
    subtitle: {
        fontFamily: "gotham-bold",
        marginBottom: 8,
        fontSize: 12,
        letterSpacing: .8
    },
    descriptionWrapper: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
    },
    description: {
        fontSize: 12.5,
        lineHeight: 17,
    },
    seeMoreBtn: {
        fontFamily: "gotham-bold",
        fontSize: 12,
    },
    bannerBg: {
        width: "100%",
        height: 155,
        borderRadius: 10,
        marginBottom: 30
    },
    bannerImage: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        borderRadius: 18
    },
    bannerTextWrapper: {
        position: "absolute",
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: "100%"
    },
    bannerTitle: {
        color: "#FF4242",
        fontFamily: "gotham-bold",
        fontSize: 20,
        marginBottom: 10
    },
    bannerDescrition: {
        width: "80%",
        color: 'white',
        fontSize: 13,
        marginBottom: 10
    },

    seeOfferBtn: {
        backgroundColor: "#EC2D2D",
        borderRadius: 8.23529,
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 5,
        width: 100,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        color: "white"
    },
    giftSection:  {
        marginBottom: 10
    },
    giftSectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    giftSectionTitle: {
        fontWeight: 900,
        fontFamily: "gotham-bold",
        letterSpacing: 1
    }, 
    seeAllBtn: {
        fontSize: 11
    },
    giftItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15
    },
    giftItemImgWrapper: {
        marginRight: 10
    },
    giftItemTitle: {
        color: CONSTANTS.COLOR.Primary,
        fontFamily: "gotham-bold",
        marginBottom: 3
    },
    giftItemDescription: {
        fontSize: 11
    },
    shareBox: {
        height: 139,
        backgroundColor: "#FFEAEA",
        borderWidth: 1,
        borderColor: "#FF0000",
        borderRadius: 16,
        padding: 12,
        justifyContent: "space-between",
    },
    shareBoxTitle: {
        fontWeight: 900,
        fontFamily: "gotham-bold",
        letterSpacing: 1.1,
    },
    shareBoxTDescription: {
        fontFamily: "gotham-light",
        fontSize: 13.5,
        lineHeight: 17
    },
    shareBoxFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    avatarsWrapper: {
        flexDirection: "row",
    },
    avatar: {
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
        overflow: "hidden",
        borderWidth: .75,
        borderColor: "#000000",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    avatarM2: {
        marginLeft: -8
    },
    avatarM3: {
        marginLeft: -8
    },
    inviteBtn: {
        backgroundColor: CONSTANTS.COLOR.Primary,
        borderRadius: 8.23529,
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    inviteBtnText: {
        color: "white",
        fontWeight: "bold",
        fontFamily: "gotham-bold",
        fontSize: 12,
        paddingHorizontal: 5,
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
    }
})

export default styles;