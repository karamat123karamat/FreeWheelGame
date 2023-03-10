import { View, Text, Image, ScrollView} from 'react-native'
import React from 'react'
import styles from './HomeScrennStyle'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={[styles.contentContainer, {paddingBottom: 30}]}>
          {/* HEADER */}
          <View style={styles.head}>
            <Text style={styles.subtitle}>Dala ak diam 👋🏿</Text>
            <Text style={styles.title}>Di Fun di FREE</Text>
                <Text style={styles.descriptionWrapper}>
                  <Text style={styles.description}>Free remercie ses clients fidèles tous les mercredis. Venez vite tourner...</Text>
                  <Text style={styles.seeMoreBtn}>Voir plus</Text>  
                </Text>
          </View>

          {/* BANNER */}
          <View style={styles.bannerBg}>
            <Image source={require('../../assets/images/ramadan-banner.png')} style={styles.bannerImage}/>
            <View style={styles.bannerTextWrapper}>
              <Text style={styles.bannerTitle}>Ramadan Mubarack</Text>
              <Text style={styles.bannerDescrition}>Koor Diam yu andë ak xewël, dieundeul forfait, invitel say xarit pour yoko sa chance...</Text>
              <TouchableOpacity style={styles.seeOfferBtn}>
                <Text style={{color: "white", fontSize: 11, fontFamily: "gotham-bold"}}>Voir les offres</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* GIFT SECTION */}
          <View style={styles.giftSection}>
            <View style={styles.giftSectionHeader}>
              <Text style={styles.giftSectionTitle}>KDO à gagner</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllBtn}>Voir tout</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.giftItemsWrapper}>
                <View style={styles.giftItem}>
                  <View style={styles.giftItemImgWrapper}>
                    <Image source={require("../../assets/images/gift-item-img.png")} />
                  </View>
                  <View style={styles.giftItemDetails}>
                    <Text style={styles.giftItemTitle}>Cash 30 000 FCfa</Text>
                    <Text style={styles.giftItemDescription}>50 personnes seront sélectionnées</Text>
                  </View>
                </View>
                <View style={styles.giftItem}>
                  <View style={styles.giftItemImgWrapper}>
                    <Image source={require("../../assets/images/gift-item-img.png")} />
                  </View>
                  <View style={styles.giftItemDetails}>
                    <Text style={styles.giftItemTitle}>Des paniers Ndogou</Text>
                    <Text style={styles.giftItemDescription}>Des paniers Ndogou</Text>
                  </View>
                </View>
                <View style={styles.giftItem}>
                  <View style={styles.giftItemImgWrapper}>
                    <Image source={require("../../assets/images/gift-item-img.png")} />
                  </View>
                  <View style={styles.giftItemDetails}>
                    <Text style={styles.giftItemTitle}>KDO crédit et forfait</Text>
                    <Text style={styles.giftItemDescription}>KDO crédit et forfait</Text>
                  </View>
                </View>
            </View>
          </View>

          {/* SHARRE SECTION */}
          <View style={styles.shareBox}>
            <Text style={styles.shareBoxTitle}>Partage</Text>
            <Text style={styles.shareBoxTDescription}>Inviter vos amis(es) et gagner des paniers ndogou ou d’autres KDO.</Text>
            <View style={styles.shareBoxFooter}>
              <View style={styles.avatarsWrapper}>
                <View style={[styles.avatar, styles.avatarM1]}>
                  <Image source={require("../../assets/images/avatar1.png")} />
                </View>
                <View style={[styles.avatar, styles.avatarM2]}>
                  <Image source={require("../../assets/images/avatar2.png")} />
                </View>
                <View style={[styles.avatar, styles.avatarM3]}>
                  <Image source={require("../../assets/images/avatar3.png")} />
                </View>
              </View>
              <TouchableOpacity style={styles.inviteBtn}>
                <Text style={styles.inviteBtnText}>Inviter une(e) ami(e)</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

        {/* FOOTER */}
        <View style={styles.footer}>
          <TouchableOpacity 
            style={styles.startBtn}
            onPress={() => navigation.navigate("GameScreen")}
          >
            <Text style={styles.startBtnText}>Tourner la roue</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}