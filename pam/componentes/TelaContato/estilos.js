import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contatoLista: {
    padding: 20,
  },
  contatoBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
  },
  contatoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#400303',
    marginTop: 10,
    marginBottom: 5,
  },
  contatoParagrafo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default estilos;