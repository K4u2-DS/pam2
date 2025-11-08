import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffffff',
    fontWeight: '500',
    lineHeight: 24,
  },
});

export default styles;