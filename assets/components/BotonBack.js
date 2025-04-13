import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons'; //Importando el componente Icons.js

const { width, height } = Dimensions.get('window');

const BotonBack = ({ BotonBack, iconStyle, color, size}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.BotonBack, BotonBack]}>
           <Icons name="ChevronLeft" color={color} size={size} style={[styles.iconStyle, iconStyle]}/>
        </TouchableOpacity>
    )
}
// ================================================================================================
// ===                                  NOTAS DE USO                                            ===
// ================================================================================================
// === - Tenemos algunos componentes como el texto y el estilo de este                           ===
// === boton que se puede adaptar de forma separada dependiando de como sea                     ===
// === el diseño de dicha pantalla                                                              ===
// ================================================================================================
// === Ejemplo:                                                                                 ===
// === <BotonBack                                                                               ===
// ===      BotonBack={styles.BotonBackAjustes}                                                 ===
// ===      iconStyle={styles.iconStyle}                                                        ===
// ===  />,                                                                                     ===
// ================================================================================================


const styles = StyleSheet.create ({
    BotonBack: {
        position:'absolute',
        top: height * 0.09, 
        marginLeft: width * 0.07,
        alignSelf:'flex-start' // Para alinearlo con la izquierda
    },
})
export default BotonBack;