import { View, Text, Image, StatusBar, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './styles';
import OTPTextView from 'react-native-otp-textinput';

export default function Verification({ navigation }) {
    return (
        <View style={{ flex: 1, paddingHorizontal: wp(4) }}>
            <View style={{ flexDirection: 'row', paddingTop: hp(7), width: '100%', justifyContent: 'space-between', }}>
                <Image source={require('../../assets/back.png')} style={{ height: 25, width: 25, }} />
                <View style={{ alignSelf: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row' }}>

                        <View style={[styles.indicator, { backgroundColor: '#ffa500', }]} />
                        <View style={[styles.indicator, { backgroundColor: '#ffa500', }]} />
                        <View style={[styles.indicator, { backgroundColor: '#00000050', }]} />
                    </View>
                </View>
            </View>
            <Text style={styles.heading}>Verification</Text>
            <Text style={styles.subHeading}>we have sent otp to your mobile number at ********013. Please enter 4 digit code you recieve.</Text>

            <View style={{ paddingHorizontal: wp(5) }}>
                <OTPTextView
                    tintColor={'#ffa50030'}
                    offTintColor={'#ffa50030'}
                    textInputStyle={{ height: 50, borderWidth: 1, backgroundColor: '#ffa50030', borderRadius: 10 }}>

                </OTPTextView>
                <Text style={{ textAlign: 'center', marginTop: hp(5), color: '#00000070' }}>Didn't recieve code</Text>
                <Text style={{ textAlign: 'center', color: '#000000', marginVertical: hp(2) }}>Resend in 35 s</Text>
                <Text style={{ textAlign: 'center', color: '#4682b4', }}>Resend Code</Text>

            </View>



            <TouchableOpacity style={styles.VerifyBtn}
                onPress={() => navigation.navigate('CreatePasword')}>
                <Text style={styles.VerifyText}>Verify</Text>
            </TouchableOpacity>
        </View>
    )
}