import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    indicator: {
        height: hp(0.8),
        width: '25%',
        borderRadius: 5,
        marginHorizontal: wp(1),
    },
    heading: {
        fontSize: hp(3.5),
        color: '#000',
        textAlign: 'center',
        paddingVertical: hp(2),
    },
    subHeading: {
        fontSize: hp(2.5),
        marginBottom: hp(4),
        paddingHorizontal: wp(2)
    },
    VerifyBtn: {
        padding: 12,
        alignSelf: 'center',
        width: '95%',
        backgroundColor: '#ffa500',
        borderRadius: 15,
        marginTop: hp(3),
        position: 'absolute',
        bottom: 30,
    },
    VerifyText: {
        fontSize: hp(2.5),
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    },
    optionWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});