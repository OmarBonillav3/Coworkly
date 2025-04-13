import { StyleSheet, Image, View } from 'react-native';

const LogoCWK = ({ style, logoStyle }) => {
    
    return (
        <View style={[styles.LogoCWK, style]}>
            <Image source={require('../img/LogoCWK.png')}  style={[styles.ImgLogo, logoStyle]}/>
        </View>
    );
}

// ================================================================================================
// ===                                  NOTAS DE USO                                            ===
// ================================================================================================

// ================================================================================================
// === Ejemplo:                                                                                 ===
// === <LogoCWK                                                                                 ===
// ===      style={styles.BotonBackAjustes}   //Este es estilo que le agregaras por defecto     ===
// ===      logoStyle={styles.logoStyle}  //Este esl estilo importado con el componente         ===
// ===  />,                                                                                     ===
// ================================================================================================


const styles = StyleSheet.create ({
    LogoCWK: {
        alignSelf:'center',
        paddingHorizontal:16, 
    },
    ImgLogo: {
       
    },
})


export default LogoCWK;