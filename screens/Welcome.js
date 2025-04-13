import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Obtener dimensiones de pantalla
const { width, height } = Dimensions.get('window');

// Importando componentes
import LogoCWK from '../assets/components/Logo';
import BotonFullSize from '../assets/components/BotonFullSize';

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            <StatusBar style='light' />
            <LogoCWK style={{ marginTop: height * 0.1 }} />
            <Image 
                source={require('../assets/img/VisualDeWelcome.png')} 
                style={styles.Img}
            />
            <Text style={styles.Txt}>
                <Text style={styles.Txt1}>El mundo es tu oficina,</Text>
                <Text style={styles.Txt2}> encuentra el</Text>
                <Text style={styles.Txt3}> espacio perfecto y trabaja sin límites.</Text>
            </Text>
            <BotonFullSize 
                onPress={() => navigation.navigate('Login')}
                Boxstyle={styles.Boxstyle} 
                TxtStyle={styles.TxtStyle}
                texto='Comenzar'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#16404E',
        // paddingHorizontal: width * 0.05,
    },
    Img: {
        alignSelf: 'center', 
        marginTop: height * 0.1,
        width: width * 1.7,
        height: height * 0.4,
        resizeMode: 'contain'
    },
    Txt: {
        marginHorizontal: width * 0.15,
        marginTop: height * 0.1,
        textAlign: 'center',
        fontSize: width * 0.045,
    },
    Txt1: {
        fontFamily: 'DMSansBold',
        color: '#FFFFFF'
    },
    Txt2: {
        fontFamily: 'DMSansRegular',
        color: '#FFFFFF'
    },
    Txt3: {
        fontFamily: 'DMSansRegular',
        color: '#DCA854'
    },
    Boxstyle: {
        backgroundColor: '#DCA854',
        marginTop: height * 0.07,
    },
    TxtStyle: {
        fontSize: width * 0.04,
        fontFamily: 'DMSansBold',
        color: '#16404E'
    }
});