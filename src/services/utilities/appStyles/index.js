import { StyleSheet } from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { scale } from 'react-native-size-matters';
import { color } from '../../../../src/services/utilities/Color/Colors';
import { fontSize, fontFamily } from '../../../../src/services/utilities/fonts/fonts'
export const appStyles = StyleSheet.create({
    //Oyl screen1
    splash: {
        flex: 1,
        backgroundColor: color.black1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Oylphoneview1: {
        width: '82%',
        position: 'absolute',
    },
    Oylphoneview2: {
        width: '82%',
        position: 'absolute',
        marginTop: responsiveWidth(22),
    },
    style4: {
        position: 'absolute',
        height: responsiveHeight(25),
        width: '100%',
        marginTop: responsiveHeight(47),
        alignItems: 'center',
    },
    mainView1: {
        flex: 1,
    },
    Image1: {
        height: '100%',
        width: '100%',
    },
    Image2View: {
        position: 'absolute',
        alignItems: 'center',
        width: '100%',
        height: responsiveHeight(20),
        marginTop: responsiveHeight(10),
    },
    splashlogo: {
        position: 'absolute',
        alignItems: 'center',
        width: '100%',
        height: responsiveHeight(20),
    },
    Image2: {
        width: scale(220),
        height: scale(160),
        resizeMode: 'contain',
    },
    TextView: {
        width: '100%',
        height: responsiveHeight(4),
        marginTop: responsiveHeight(42.5),
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Text1: {
        fontSize: fontSize.h8,
        fontFamily: fontFamily.Robotomedium,
        color: color.yellow
    },
    Text2: {
        fontSize: fontSize.h10,
        color: color.yellow,
        marginLeft: responsiveWidth(1)
    },
    phoneView1: {
        width: '100%',
        height: responsiveHeight(12),
        position: 'absolute',
        marginTop: responsiveHeight(60),
    },
    EmailfirstView1: {
        paddingTop: responsiveHeight(2),
    },
    Email1: {
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(-14),
        backgroundColor: color.yellow,
        borderRadius: 15,
    },
    input1: {
        paddingLeft: responsiveWidth(3.5),
        width: responsiveWidth(80),
        color: color.black2,
    },
    Text2View1: {
        position: 'absolute',
        width: '100%',
        height: responsiveHeight(5),
        marginTop: responsiveHeight(68),
    },
    Text2View2: {
        width: '100%',
        height: responsiveHeight(3),
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: responsiveHeight(21)
    },
    Create1: {
        color: color.yellow,
        fontSize: fontSize.h6,
        fontFamily: fontFamily.PoppinsBold,
    },
    text2: {
        color: color.white1,
        fontSize: fontSize.h6,
        fontFamily: fontFamily.Poppinslight,
    },
    touchable1: {
        marginRight: responsiveWidth(13),
    },
    touchable2: {
        height: responsiveHeight(5),
        width: '100%',
        marginTop: responsiveHeight(3),
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(77),
    },
    button2: {
        borderRadius: responsiveWidth(5),
        width: responsiveWidth(65),
        height: responsiveHeight(5.5),
        borderRadius: 30,
        justifyContent: 'center',
    },
    buttonText2: {
        color: color.black1,
        fontSize: fontSize.h23,
        fontFamily: fontFamily.Robotobold,
        textAlign: 'center',
    },
    buttonText3: {
        color: color.black1,
        fontSize: fontSize.h23,
        fontFamily: fontFamily.Poppinsregular,
        textAlign: 'center',
    },
    //CreateAccount Screen
    createfield: {
        marginTop: responsiveHeight(3),
    },
    createfieldview1: {
        height: responsiveHeight(45),
        width: '100%',
        position: 'absolute',
        marginTop: responsiveHeight(10),
        alignItems: 'center',
    },
    statusbarbottom: {
        height: responsiveHeight(9),
        width: '100%',
        backgroundColor: color.white1,
        position: 'absolute',
        flexDirection: 'row',
    },
    centeredTextContainer: {
        flex: 1,
        alignItems: 'center',
    },
    BackIcon2: {
        marginTop: responsiveHeight(3),
        height: responsiveHeight(3),
        width: responsiveWidth(3.5),
        marginLeft: responsiveWidth(8)
    },
    text12: {
        marginTop: responsiveHeight(3),
        height: responsiveHeight(3),
        width: responsiveWidth(65),
        color: color.black2,
        fontSize: fontSize.h10,
        fontFamily: fontFamily.Robotobold,
        marginRight: responsiveWidth(8),
    },
    createaccounttext: {
        marginTop: responsiveHeight(3),
        height: responsiveHeight(3),
        width: responsiveWidth(65),
        color: color.black2,
        fontSize: fontSize.h10,
        fontFamily: fontFamily.Robotobold,
        marginLeft: responsiveWidth(32),
    },
    phoneView2: {
        width: '100%',
        height: responsiveHeight(12),
        position: 'absolute',
        marginTop: responsiveHeight(25),
    },
    EmailfirstView2: {
        paddingTop: responsiveHeight(2),
    },
    Email2: {
        marginLeft: responsiveWidth(1),
        marginRight: responsiveWidth(-18),
        backgroundColor: color.yellow,
        borderRadius: 15,
    },
    EmailView2: {
        paddingLeft: responsiveWidth(3),
        paddingRight: responsiveWidth(22),
        height: responsiveHeight(10.5),
    },
    fonts2: {
        fontWeight: 'bold',
        color: color.black3,
        paddingLeft: responsiveWidth(3.5),
        paddingTop: responsiveHeight(1),
        fontSize: fontSize.h5,
    },
    input2: {
        paddingLeft: responsiveWidth(3.5),
        width: responsiveWidth(80),
        color: color.black2,
    },
    phoneView22: {
        width: '100%',
        height: responsiveHeight(12),
        position: 'absolute',
        marginTop: responsiveHeight(12),
    },
    EmailfirstView22: {
        paddingTop: responsiveHeight(2),
    },
    Email22: {
        marginLeft: responsiveWidth(1),
        marginRight: responsiveWidth(-18),
        backgroundColor: color.yellow,
        borderRadius: 15,
    },
    EmailView22: {
        paddingLeft: responsiveWidth(3),
        paddingRight: responsiveWidth(22),
        height: responsiveHeight(10.5)
    },
    fonts22: {
        fontWeight: 'bold',
        color: color.black3,
        paddingLeft: responsiveWidth(3.5),
        paddingTop: responsiveHeight(1),
        fontSize: fontSize.h5,
    },
    input22: {
        paddingLeft: responsiveWidth(3.5),
        width: responsiveWidth(80),
        color: color.black2,
    },
    eye7: {
        marginTop: responsiveHeight(1),
        width: scale(14),
        height: scale(13),
    },
    textinputView: {
        width: '91%',
        height: responsiveHeight(6),
        flexDirection: 'row',
    },
    touchable22: {
        height: responsiveHeight(5),
        width: '100%',
        marginTop: responsiveHeight(3),
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(45),
    },
    button22: {
        borderRadius: 15,
        width: responsiveWidth(65),
        height: responsiveHeight(5.5),
        borderRadius: 30,
        justifyContent: 'center',
    },
    buttonText22: {
        color: color.black1,
        fontSize: fontSize.h25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    checkbox: {
        flexDirection: 'row',
        width: '100%',
        height: responsiveHeight(5),
        marginTop: responsiveHeight(34),
        position: 'absolute',
    },
    checkbox3: {
        flexDirection: 'row',
        marginLeft: responsiveWidth(7),
    },
    checkbox1: {
        flexDirection: 'row',
        width: '100%',
        height: responsiveHeight(5),
        marginTop: responsiveHeight(19.5),
        position: 'absolute',
        marginLeft: responsiveWidth(2.5),
    },
    accept: {
        color: color.white1,
        paddingLeft: responsiveWidth(3),
        fontSize: fontSize.h4,
        fontFamily: fontFamily.Robotoregular,
    },
    accept1: {
        color: color.white1,
        paddingLeft: responsiveWidth(1),
        fontSize: fontSize.h4,
        fontFamily: fontFamily.Robotoregular,
    },
    accept2: {
        color: color.yellow1,
        paddingLeft: responsiveWidth(1),
        fontSize: fontSize.h4,
        fontFamily: fontFamily.Robotobold,
    },
    checkboxCircle: {
        width: scale(13.5),
        height: scale(13.5),
        marginTop: responsiveHeight(0.2),
        borderRadius: responsiveWidth(30),
        borderWidth: 1,
        borderColor: color.white1,
    },
    checked: {
        backgroundColor: '#000',
        borderColor: color.yellow1,
    },
    tik: {
        width: scale(16),
        height: scale(16),
        marginLeft: responsiveWidth(-4.25),
    },
    flex: {
        flexDirection: 'row',
    },
    //SetProfile Screen
    setupprofile: {
        marginTop: responsiveHeight(3),
        height: responsiveHeight(3),
        width: responsiveWidth(45),
        color: color.black2,
        fontSize: fontSize.h10,
        fontFamily: fontFamily.Robotobold,
        marginRight: responsiveWidth(8),
    },
    scrollview: {
        flexGrow: 1,
        marginTop: responsiveHeight(8)
    },
    view1: {
        height: responsiveHeight(92)
    },
    setfieldview1: {
        height: responsiveHeight(90),
        width: '100%',
        position: 'absolute',
        marginTop: responsiveHeight(2),
        alignItems: 'center',
    },
    mainView3: {
        flex: 1,
    },
    text13: {
        height: responsiveHeight(3),
        color: color.black2,
        fontFamily: fontFamily.Robotobold,
        fontSize: fontSize.h10,
    },
    centeredTextContainer3: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statusbarbottom3: {
        height: responsiveHeight(8),
        width: '100%',
        backgroundColor: color.white1,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    phoneView23: {
        width: '100%',
        height: responsiveHeight(7),
        position: 'absolute',
        marginTop: responsiveHeight(10),
    },
    Email23: {
        marginLeft: responsiveWidth(1),
        marginRight: responsiveWidth(-18),
        backgroundColor: color.yellow,
        borderRadius: 15,
        height: responsiveHeight(8),
    },
    Email25: {
        marginLeft: responsiveWidth(0),
        marginRight: responsiveWidth(-18),
        backgroundColor: color.white1,
        borderRadius: responsiveWidth(3),
        height: responsiveHeight(8),
    },
    EmailView23: {
        paddingLeft: responsiveWidth(3),
        paddingRight: responsiveWidth(22),
        height: responsiveHeight(8),
    },
    fonts23: {
        fontFamily: fontFamily.Robotobold,
        color: color.black3,
        paddingLeft: responsiveWidth(3.5),
        paddingTop: responsiveHeight(1),
        fontSize: fontSize.h5,
    },
    fonts24: {
        fontFamily: fontFamily.Robotobold,
        color: '#444444BF',
        paddingLeft: responsiveWidth(3.5),
        paddingTop: responsiveHeight(1),
        fontSize: fontSize.h5,
    },
    fonts25: {
        fontFamily: fontFamily.Robotoregular,
        color: '#444444BF',
        paddingLeft: responsiveWidth(4),
        fontSize: fontSize.h3,
    },
    input23: {
        paddingLeft: responsiveWidth(3.5),
        width: responsiveWidth(80),
        color: color.black2,
    },
    textinputView3: {
        width: '91%',
        height: responsiveHeight(6),
        flexDirection: 'row',
    },
    calendar: {
        marginTop: responsiveHeight(0),
        width: scale(16),
        height: scale(16.3),
    },
    calendar1: {
        marginTop: responsiveHeight(-4),
        width: scale(16.5),
        height: scale(16.3),
    },
    touchable23: {
        height: responsiveHeight(5),
        width: '100%',
        marginTop: responsiveHeight(3),
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(88),
    },
    //EditProfile Screen
    homeaccountimage: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    homeimage: {
        height: scale(35),
        width: scale(35),
        marginLeft: responsiveWidth(5)
    },
    hometext: {
        marginLeft: responsiveWidth(5),
        fontSize: fontSize.h7,
        color: color.yellow1,
    },
    accounttext: {
        marginLeft: responsiveWidth(-2),
        fontSize: fontSize.h7,
        color: color.yellow1,
    },
    accountimage: {
        height: scale(35),
        width: scale(35),
        marginRight: responsiveWidth(4)
    },
    editview1: {
        height: responsiveHeight(85.3),
        marginTop: responsiveHeight(-0.8)
    },
    editfieldview2: {
        height: responsiveHeight(90),
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
    },
    statusbarbottom4: {
        height: responsiveHeight(7),
        width: '100%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text14: {
        marginTop: responsiveHeight(3),
        height: responsiveHeight(3),
        width: responsiveWidth(35),
        color: color.yellow,
        fontFamily: fontFamily.Robotobold,
        fontSize: fontSize.h10,
    },
    BackIcon4: {
        marginTop: responsiveHeight(3),
        height: responsiveHeight(3),
        width: responsiveWidth(3.5),
        marginLeft: responsiveWidth(8)
    },
    touchable24: {
        height: responsiveHeight(5),
        width: '100%',
        marginTop: responsiveHeight(3),
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(79),
    },
    touchable21: {
        height: responsiveHeight(5),
        width: '100%',
        marginTop: responsiveHeight(3),
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(81),
    },
    //Home Screen
    homefirstview1: {
        height: responsiveHeight(12.5),
    },
    headerview: {
        height: responsiveHeight(20),
        width: '100%',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    background: {
        height: '100%',
        width: '100%',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    schedule: {
        color: color.white1,
        position: 'absolute',
        fontSize: fontSize.h30,
        fontFamily: fontFamily.Robotomedium,
    },
    DetailsView: {
        height: responsiveHeight(5),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Details: {
        fontSize: fontSize.h22,
        color: color.black2,
        fontFamily: fontFamily.Robotobold,
    },
    scroll: {
        marginTop: responsiveHeight(1),
        height: responsiveHeight(15),
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    homeinfoview1: {
        height: responsiveHeight(73.5),
    },
    cardview: {
        height: responsiveHeight(14),
        width: responsiveWidth(28),
        backgroundColor: color.white1,
        borderRadius: responsiveWidth(4),
        alignItems: 'center',
        elevation: 3,
    },
    focusedCard: {
        backgroundColor: '#FFFFC8',
    },
    day: {
        color: color.black3,
        marginTop: responsiveHeight(2),
        fontSize: fontSize.h8,
        fontFamily: fontFamily.Robotobold,
    },
    date: {
        color: color.black3,
        marginTop: responsiveHeight(1.5),
        fontSize: fontSize.h8,
        fontFamily: fontFamily.Robotobold,
    },
    month: {
        color: color.black3,
        fontSize: fontSize.h8,
        fontFamily: fontFamily.Robotobold,
    },
    entertime: {
        color: color.black3,
        fontFamily: fontFamily.Robotobold,
        fontSize: fontSize.h7,
        marginLeft: responsiveWidth(5)
    },
    timeview: {
        height: responsiveHeight(16),
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        color: color.black3,
        fontSize: fontSize.h50,
        marginTop: responsiveHeight(3.5),
    },
    timecardview: {
        marginLeft: responsiveWidth(5)
    },
    colonview: {
        height: responsiveHeight(16),
        width: responsiveWidth(10),
        marginLeft: responsiveWidth(1.5),
        alignItems: 'center',
        justifyContent: 'center'
    },
    colon: {
        fontWeight: 'bold',
        fontSize: fontSize.h70,
        color: color.black3,
    },
    ampmview: {
        height: responsiveHeight(15),
        width: responsiveWidth(15),
        marginLeft: responsiveWidth(5),
        alignItems: 'center',
        backgroundColor: color.white1,
        borderRadius: 20,
        borderWidth: 1,
        shadowColor: '#00000029',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    amText: {
        marginTop: responsiveHeight(2.5),
        height: responsiveHeight(5),
        width: responsiveWidth(15),
        fontSize: fontSize.h10,
        color: color.black3,
        fontFamily: fontFamily.Robotoregular,
    },
    pmText: {
        marginTop: responsiveHeight(2),
        height: responsiveHeight(5),
        width: responsiveWidth(15),
        fontSize: fontSize.h10,
        color: color.black3,
        fontFamily: fontFamily.Robotoregular,
    },
    amText1: {
        height: responsiveHeight(7.9),
        width: responsiveWidth(14.5),
        borderBottomWidth: 0.5,
        borderColor: 'black',
        paddingLeft: responsiveWidth(4),
        fontSize: fontSize.h10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        color: color.black3,
    },
    pmText1: {
        height: responsiveHeight(6.8),
        width: responsiveWidth(14.5),
        paddingLeft: responsiveWidth(4),
        fontSize: fontSize.h10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        color: color.black3,
    },
    homefield1: {
        marginTop: responsiveHeight(42),
    },
    homefield2: {
        marginTop: responsiveHeight(53),
    },
    oylinputfield: {
        height: responsiveHeight(10),
        elevation: 3,
    },
    input: {
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: responsiveHeight(1.5),
        fontSize: fontSize.h50,
        color: color.black3,
    },
    touchable25: {
        height: responsiveHeight(5),
        width: '100%',
        marginTop: responsiveHeight(3),
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(66),
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal1: {
        backgroundColor: color.white1,
        height: responsiveHeight(30),
        width: '90%',
        alignItems: 'center',
        borderRadius: 25,
    },
    modalcircleviewblack: {
        height: scale(100),
        width: scale(100),
        backgroundColor: color.black1,
        borderRadius: 150,
        marginTop: responsiveHeight(-7),
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalcircleviewlocation: {
        height: scale(52),
        width: scale(40),
    },
    locationtext: {
        color: color.black1,
        fontSize: fontSize.h10,
    },
    submittext: {
        marginTop: responsiveHeight(10),
    },
    touchable28: {
        height: responsiveHeight(5),
        width: '100%',
        marginTop: responsiveHeight(3),
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(22),
    },
    button28: {
        borderRadius: 15,
        width: responsiveWidth(40),
        height: responsiveHeight(5.5),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalfield: {
        marginTop: responsiveHeight(6),
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal2Container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal2: {
        backgroundColor: color.white1,
        height: responsiveHeight(52),
        width: '90%',
        alignItems: 'center',
        borderRadius: 25,
    },
    modallargefieldview: {
        height: responsiveHeight(39),
        width: responsiveWidth(85),
        backgroundColor: color.white2,
        borderRadius: 15,
        marginTop: responsiveHeight(5.3),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    modallargefieldview2: {
        height: responsiveHeight(5.5),
        width: responsiveWidth(90),
        borderBottomWidth: 0.5,
        borderRadius: 15,
        color: color.black3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modallargefieldview3: {
        height: responsiveHeight(5.5),
        width: responsiveWidth(90),
        borderBottomWidth: 0.5,
        borderRadius: 15,
        color: color.black3,
    },
    modallargefieldview4: {
        height: responsiveHeight(5.5),
        width: responsiveWidth(90),
        borderRadius: 15,
        color: color.black3,
    },
    modalfieldtext2: {
        color: color.black3,
        fontSize: fontSize.h10,
    },
    modalfieldtext3: {
        height: responsiveHeight(5.5),
        width: responsiveWidth(85),
        borderRadius: 15,
        color: color.black3,
        marginLeft: responsiveWidth(8),
        marginTop: responsiveWidth(2),
        fontSize: fontSize.h10,
        fontFamily: fontFamily.Robotoregular
    },
    buttonText28: {
        color: color.white1,
        fontSize: fontSize.h23,
        fontFamily: fontFamily.Robotobold,
        textAlign: 'center',
    },
    searchherefield: {
        backgroundColor: '#F7F7F7',
        borderRadius: responsiveWidth(2),
        marginTop: responsiveHeight(2.5),
    },
    oilfieldmodal: {
        height: responsiveHeight(9),
        backgroundColor: '#F7F7F7',
        elevation: 3, marginTop: responsiveHeight(-1),
        width: responsiveWidth(85)
    },
    //Vehicle Info Screen
    firstview1: {
        height: responsiveHeight(14),
    },
    infoview1: {
        height: responsiveHeight(72),
    },
    vehicleinfofieldview2: {
        height: responsiveHeight(8.8),
        width: '90%',
        backgroundColor: color.white1,
        marginTop: responsiveHeight(1),
        borderRadius: responsiveWidth(4),
        elevation: 3,
    },
    vehicleinfofieldview1: {
        height: responsiveHeight(45),
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        marginTop: responsiveHeight(6),
    },
    schedule1: {
        color: color.white1,
        position: 'absolute',
        fontSize: fontSize.h30,
        fontFamily: fontFamily.Robotobold,
    },
    flexdirection: {
        height: responsiveHeight(5),
        width: '100%',
        flexDirection: 'row',
        marginTop: responsiveHeight(51.5),
    },
    box: {
        height: scale(32),
        width: scale(32),
        marginLeft: responsiveWidth(5)
    },
    tik1: {
        height: scale(10),
        width: scale(10.5),
        marginLeft: responsiveWidth(8),
        marginTop: responsiveHeight(-3.3),
    },
    pullinfotext: {
        color: color.black1,
        marginTop: responsiveHeight(0.5),
        fontSize: fontSize.h7,
        fontFamily: fontFamily.Robotomedium,
    },
    Details1: {
        fontSize: fontSize.h22,
        color: color.black2,
        fontFamily: fontFamily.Robotobold,
        marginTop: responsiveHeight(2)
    },
    touchable26: {
        height: responsiveHeight(5),
        width: '100%',
        marginTop: responsiveHeight(3),
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(63),
    },
    //Vehicle Modal
    vehiclemodaltext: {
        fontWeight: 'bold',
        fontSize: fontSize.h33,
        color: '#FFFFFF'
    },
    mainview: {
        flex: 1,
        backgroundColor: color.white1,
    },
    modaltextview: {
        height: responsiveHeight(9),
        width: '100%',
        alignItems: 'center',
        marginTop: responsiveHeight(5),
    },
    modaltext: {
        color: color.white1,
        fontWeight: 'bold',
        fontSize: fontSize.h30,
        alignContent: 'center',
    },
    modalview: {
        height: '70%',
        width: '100%',
        alignItems: 'center',
        marginTop: responsiveHeight(47),
    },
    modalimage: {
        height: '80%',
        width: '100%',
        borderTopLeftRadius: responsiveWidth(15),
        borderTopRightRadius: responsiveWidth(15),
        position: 'absolute',
    },
    circletikimage: {
        width: scale(51),
        height: scale(50),
        marginTop: fontSize.h60,
    },
    touchable27: {
        height: responsiveHeight(5),
        width: '100%',
        marginTop: responsiveHeight(3),
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(38.5),
    },
    //Account Screen
    mainView1: {
        flex: 1,
    },
    headerview1: {
        height: responsiveHeight(8),
        width: '100%',
        backgroundColor: color.white1,
        flexDirection: 'row',
        position: 'absolute',
    },
    headerview2: {
        height: responsiveHeight(8),
        width: '100%',
        backgroundColor: color.white1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paymenttext: {
        color: color.black2,
        fontFamily: fontFamily.Robotobold,
        fontSize: fontSize.h10,
        marginRight: responsiveHeight(7)
    },
    imagetouch: {
        marginTop: responsiveWidth(-1),
    },
    secondview: {
        height: responsiveHeight(57),
        width: '100%',
        position: 'absolute',
        marginTop: responsiveHeight(23),
        alignItems: 'center',
        justifyContent: 'center',
    },
    dollormainview: {
        backgroundColor: color.yellow,
        height: responsiveHeight(40),
        width: '80%',
        borderRadius: 30,
    },
    dollormainview1: {
        backgroundColor: color.yellow,
        height: responsiveHeight(5),
        width: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    dollormainview2: {
        backgroundColor: color.white1,
        height: responsiveHeight(30),
        width: '100%',
        alignItems: 'center',
    },
    OYLtext: {
        color: color.black1,
        fontSize: fontSize.h3,
        marginTop: responsiveHeight(2),
        fontFamily: fontFamily.Robotoregular,
    },
    eightyseven: {
        flexDirection: 'row',
        backgroundColor: color.white1,
        height: responsiveHeight(17),
    },
    eightyseventext1: {
        fontSize: fontSize.h60,
        color: color.black2,
        fontFamily: fontFamily.Robotobold,
    },
    eightyseventext2: {
        fontSize: fontSize.h120,
        color: color.black2,
        fontFamily: fontFamily.Robotobold,
    },
    Milestext1: {
        color: color.black1,
        fontSize: fontSize.h3,
        marginTop: responsiveHeight(1),
        fontFamily: fontFamily.Robotoregular,
    },
    Milestext2: {
        color: color.black1,
        fontSize: fontSize.h3,
        fontFamily: fontFamily.Robotoregular,
    },
    Milestext3: {
        color: color.black2,
        fontSize: fontSize.h3,
        fontFamily: fontFamily.Robotoregular,
    },
    paymentmethodtext: {
        color: color.yellow,
        fontSize: fontSize.h10,
        marginTop: responsiveHeight(2),
        fontFamily: fontFamily.Robotomedium,
    },
    cardlist1: {
        height: responsiveHeight(17),
        width: '100%',
        marginTop: responsiveHeight(1),
        flexDirection: 'row',
    },
    cardlist2: {
        height: responsiveHeight(17),
        width: '100%',
        marginTop: responsiveHeight(1),
        flexDirection: 'row',
    },
    Accountimagesstyle: {
        marginLeft: responsiveWidth(5)
    },
    Accountimagesinputstyle: {
        height: scale(45),
        width: scale(85),
        marginTop: responsiveHeight(3.5),
    },
    Accountimagesinputstyle1: {
        height: scale(35),
        width: scale(90),
        marginTop: responsiveHeight(3.5),
    },
    radiomodallabel: {
        backgroundColor: '#F7F7F7',
        marginTop: responsiveHeight(2),
        width: responsiveWidth(75),
        marginLeft: responsiveWidth(3),
        elevation: 1,
    },
    radiomodallabel1: {
        backgroundColor: '#F7F7F7',
        marginTop: responsiveHeight(2),
        width: responsiveWidth(20),
        marginLeft: responsiveWidth(3),
        height: responsiveHeight(5),
        elevation: 1,
    },
    radiomodallabel2: {
        backgroundColor: '#F7F7F7',
        marginTop: responsiveHeight(2),
        width: responsiveWidth(20),
        marginLeft: responsiveWidth(2),
        height: responsiveHeight(5),
        elevation: 1,
    },
    radiomodallabel3: {
        backgroundColor: '#F7F7F7',
        marginTop: responsiveHeight(2),
        width: responsiveWidth(20),
        marginLeft: responsiveWidth(6),
        height: responsiveHeight(5),
        elevation: 1,
    },
    //payment modal screen
    modalHeading: {
        color: color.white1,
        fontWeight: 'bold',
        fontSize: fontSize.h30,
        alignContent: 'center',
    },
    normalText: {
        color: color.white1,
        alignContent: 'center',
    },
    //ThankYou screen
    firstmainview: {
        height: '50%',
        width: '100%',
        backgroundColor: color.yellow,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: color.white3
    },
    firstcircleview: {
        height: scale(150),
        width: scale(150),
        backgroundColor: color.white1,
        borderRadius: responsiveWidth(30),
        alignItems: 'center',
        elevation: 5,
    },
    goodluckimage: {
        height: scale(120),
        width: scale(120),
    },
    firstsecondview: {
        alignItems: 'center',
    },
    thankyoutext: {
        color: color.white1,
        position: 'absolute',
        fontFamily: fontFamily.Robotobold,
        fontSize: fontSize.h40,
        marginTop: responsiveHeight(6)
    },
    thankyoutext1: {
        color: color.white1,
        position: 'absolute',
        fontSize: fontSize.h22,
        marginTop: responsiveHeight(15),
        fontFamily: fontFamily.Robotoregular,
    },
    thankyoutext2: {
        color: color.white1,
        position: 'absolute',
        fontSize: fontSize.h22,
        marginTop: responsiveHeight(19),
        fontFamily: fontFamily.Robotoregular,
    },
    iconView: {
        height: responsiveHeight(10),
        width: '100%',
        position: 'absolute',
        marginTop: responsiveHeight(77),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    fbimage: {
        height: scale(60),
        width: scale(60),
    },
    instaimage: {
        height: scale(55),
        width: scale(55),
        marginLeft: responsiveWidth(2),
        marginTop: responsiveWidth(1),
    },
    touchable30: {
        height: responsiveHeight(5),
        width: '100%',
        marginTop: responsiveHeight(3),
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(90),
    },
    button30: {
        borderRadius: 15,
        width: responsiveWidth(50),
        height: responsiveHeight(5.5),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // Radio modal
    radiomodalview: {
        height: responsiveHeight(110),
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radiomodal: {
        backgroundColor: color.white1
    },
    radiomodalsecondview: {
        height: '55%',
        width: '90%',
        backgroundColor: color.white1,
        alignItems: 'center',
        borderRadius: responsiveWidth(5),
    },
    modalcircleviewlocation: {
        height: scale(52),
        width: scale(40),
    },
    modalcircleviewRadio: {
        height: scale(35),
        width: scale(52),
    },
    Radiomodaltext1: {
        color: color.black4,
        marginTop: responsiveHeight(2),
        fontSize: fontSize.h10,
        fontFamily: fontFamily.Poppinsregular,
    },
    Radiomodaltext2: {
        color: color.black4,
        fontSize: fontSize.h8,
        marginTop: responsiveHeight(1),
        fontFamily: fontFamily.Poppinsmedium,
    },
    radiomodalthirdview: {
        height: '48%',
        width: '90%',
        backgroundColor: color.white1,
        marginTop: responsiveHeight(2),
        borderRadius: responsiveWidth(3),
        shadowColor: '#E3185A24',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
    },
    validtext: {
        color: color.black2,
        fontSize: fontSize.h7,
        marginTop: responsiveHeight(1),
        marginLeft: responsiveHeight(2),
        fontFamily: fontFamily.Montserratmedium,
    },
    dateview: {
        flexDirection: 'row',
    },
    slashtext: {
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveWidth(2),
        fontSize: fontSize.h40,
        color: color.black2,
    },
    touchable31: {
        height: responsiveHeight(5),
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        marginTop: responsiveHeight(53),
    },
    //service screen
    contenttext: {
        position: 'absolute',
        color: color.yellow1,
        marginTop: responsiveHeight(13),
        fontSize: fontSize.h9,
        marginLeft: responsiveHeight(1),
        fontFamily: fontFamily.Robotoregular,
    },
    termsservice: {
        marginTop: responsiveHeight(3),
        height: responsiveHeight(3),
        width: responsiveWidth(65),
        color: color.black2,
        fontSize: fontSize.h10,
        fontFamily: fontFamily.Robotobold,
        marginLeft: responsiveWidth(25),
    },
    privacypolicy: {
        marginTop: responsiveHeight(3),
        height: responsiveHeight(3),
        width: responsiveWidth(65),
        color: color.black2,
        fontSize: fontSize.h10,
        fontFamily: fontFamily.Robotobold,
        marginLeft: responsiveWidth(35),
    },
    servicetext: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    //extrascreen
    mainViewextra: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    clicktext: {
        color: color.black2,
        fontSize: fontSize.h30,
        fontWeight: 'bold',
        fontFamily: fontFamily.PoppinsBold,
    },
    extramodalview: {
        height: '100%',
        width: '100%',
        backgroundColor: color.white1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    extramodalview1: {
        height: responsiveHeight(55),
        width: '100%',
        backgroundColor: color.white1,
        marginTop: responsiveHeight(45),
        borderTopRightRadius: responsiveWidth(10),
        borderTopLeftRadius: responsiveWidth(10),
        alignItems: 'center',
    },
    extramodalview2: {
        height: responsiveHeight(39),
        width: responsiveWidth(85),
        backgroundColor: color.white1,
        borderRadius: responsiveWidth(4),
        marginTop: responsiveHeight(6.5),
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    extramodalfieldview2: {
        height: responsiveHeight(6.3),
        width: responsiveWidth(90),
        borderBottomWidth: 0.2,
        borderRadius: 15,
        color: color.black3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    extramodalfieldview3: {
        height: responsiveHeight(5.5),
        width: responsiveWidth(90),
        color: color.black3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    extramodalfieldtext: {
        color: color.black5,
        fontSize: fontSize.h10,
        marginLeft: responsiveWidth(7),
        marginTop: responsiveHeight(1.5),
        fontFamily: fontFamily.Robotoregular,
    },
    extramodalfieldtext3: {
        color: color.black1,
        fontSize: fontSize.h10,
        marginLeft: responsiveWidth(7),
        fontFamily: fontFamily.Robotobold,
        marginTop: responsiveHeight(1.5),
    },
    arrowimage: {
        height: scale(10),
        width: scale(5),
        marginRight: responsiveWidth(6),
        marginTop: responsiveHeight(2.5),
    },
    //paymentsuccessfulmodal
    congratulations: {
        fontSize: fontSize.h35
    },
    seeyouontext: {
        marginTop: responsiveHeight(3),
        fontSize: fontSize.h25,
    },
    dateschedule: {
        fontSize: fontSize.h21,
    },
    //input field
    fieldview1: {
        height: responsiveHeight(90),
        width: '100%',
        position: 'absolute',
        marginTop: responsiveHeight(7),
        alignItems: 'center',
    },
    fieldview2: {
        height: responsiveHeight(8.8),
        width: '90%',
        backgroundColor: color.yellow,
        marginTop: responsiveHeight(1),
        borderRadius: responsiveWidth(4),
    },
    text1View: {
        color: color.black2,
        height: responsiveHeight(4),
        width: '100%',
    },
    text2View: {
        height: responsiveHeight(5),
        width: '100%',
    },
    edittext1: {
        color: color.black3,
        height: responsiveHeight(4),
        width: '90%',
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(1),
        fontSize: fontSize.h7,
        fontFamily: fontFamily.Robotobold,
    },
    edittext2: {
        height: responsiveHeight(6),
        width: '85%',
        color: color.black2,
        marginLeft: responsiveWidth(2.5),
        fontSize: fontSize.h7,
    },
    text2View: {
        height: responsiveHeight(5.5),
        width: '100%',
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 16,
    },
})