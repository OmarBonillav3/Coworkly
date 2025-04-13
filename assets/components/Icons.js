import * as icons from 'lucide-react-native';

const Icons = ({ name, color, size }) => {
  const LucideIcon = icons[name];
  return <LucideIcon color={color} size={size} />;
};

export default Icons;

// ========================================================================
// ===                         NOTAS DE USO                             ===
// ========================================================================
// === Ejemplo:                                                         ===
// === Icons name="Camera" color="red" size={30} />                     ===
// === />                                                               ===
// === Nota: El nombre debe tener la primera letra en mayuscula         ===
// ========================================================================
