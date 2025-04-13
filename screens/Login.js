import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

// Importando componentes
import Icons from '../assets/components/Icons'
import BotonBack from '../assets/components/BotonBack';

const { width, height } = Dimensions.get('window');

export default function Login() {
    return (
        <View style={styles.Container}>
            <StatusBar style='light' />
            <BotonBack color='#16404E' size={30}/>
            <Text style={styles.Titulo}>¡Bienvenido de vuelta!</Text>
            <View style={styles.BackGround}>
                <Text style={styles.SubTitulo}>¿Café, coworking o algo nuevo?
                    <Text style={styles.SubTitulo2}> Tú decides.</Text>
                </Text>
            </View>
        </View> 
    );
}

// METER MANO EN ESTA PANTALLA AHORA
const styles = StyleSheet.create ({
    Container: {
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#DCA854'
    },
    Titulo: {
        // position:'absolute',
        top: height * 0.16,
        textAlign:'center',
        fontFamily:'DMSansBold',
        fontSize: 26,
        color: '#16404E'
    },
    BackGround: {
        top: height * 0.19,
        backgroundColor:'#16404E',
        flex:1,
        width:'100%',
        height:'auto',
        borderTopLeftRadius:30,
    },
    SubTitulo:{
        fontFamily:'DMSansLight',
        fontSize:20,
        color:'#FFFFFF',
        textAlign:'center',
        top: height * 0.05,
        marginHorizontal: width * 0.14
    },
    SubTitulo2: {
        fontFamily:'DMSansBold'
    },
})