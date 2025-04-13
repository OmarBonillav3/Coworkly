import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BotonFullSize = ({ Boxstyle, texto, TxtStyle, onPress }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={[styles.BoxBoton, Boxstyle]} onPress={onPress}>
            {texto && <Text style={[styles.Texto, TxtStyle]}> {texto} </Text>}
        </TouchableOpacity>
    )
}
// ================================================================================================
// ===                                  NOTAS DE USO                                            ===
// ================================================================================================                                                            ===
// ================================================================================================
// === Ejemplo:                                                                                 ===
// === <BotonFullSize                                                                           ===
// ===      Boxstyle={styles.Boxstyle}                                                          ===
// ===      TxtStyle={styles.TxtStyle}                                                          ===
// ===      texto='Notas' //Aqui se puede cambiar el nombres, si es que es necesario            ===
// ===      onPress= onPress={() => navigation.navigate('Login')} // O una funcion especifica   ===
// ===  />,                                                                                     ===
// ================================================================================================



//Cambiar la nota de usa, agregar la funcion correctar para navegar y demas cositas.



const styles = StyleSheet.create ({
    BoxBoton: {
        width:'auto', 
        height: 47,
        marginHorizontal: 16,
        borderRadius:20,
        justifyContent:'center',
        
    },

    Texto: {
        alignSelf:'center',
      },

})


export default BotonFullSize;