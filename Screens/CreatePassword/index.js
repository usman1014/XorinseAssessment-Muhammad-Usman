import { View, Text, Image, StatusBar, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './styles';

export default function CreatePasword({navigation}) {
    return (
        <View style={{ flex: 1, paddingHorizontal: wp(4) }}>
            <View style={{ flexDirection: 'row', paddingTop: hp(7), width: '100%', justifyContent: 'space-between', }}>
                <Image source={require('../../assets/back.png')} style={{ height: 25, width: 25, }} />
                <View style={{ alignSelf: 'center' }}>
                    <View style={{ width: '100%', flexDirection: 'row' }}>

                        <View style={[styles.indicator, { backgroundColor: '#ffa500', }]} />
                        <View style={[styles.indicator, { backgroundColor: '#ffa500', }]} />
                        <View style={[styles.indicator, { backgroundColor: '#ffa500', }]} />
                    </View>
                </View>
            </View>
            <Text style={styles.heading}>Create new password</Text>
            <Text style={styles.subHeading}>Create new password for your account.</Text>

            <View style={{ paddingHorizontal: wp(5) }}>

                <View style={styles.inputWrapper}>
                    <Text style={{ color: 'gray', marginVertical: hp(1) }}>New Password</Text>
                    <View style={styles.inputView}>
                        <Image source={require('../../assets/lock.png')}
                            style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder='**********'
                        />
                    </View>
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={{ color: 'gray', marginVertical: hp(1) }}>Confirm New Password</Text>
                    <View style={styles.inputView}>
                        <Image source={require('../../assets/lock.png')}
                            style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder='**********'
                        />
                    </View>
                </View>
            </View>



            <TouchableOpacity style={styles.ContinueBtn}
            onPress={()=>navigation.navigate('Signin')}>
                <Text style={styles.ContinueText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}