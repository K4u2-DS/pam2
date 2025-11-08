import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15, // Padding reduzido
  },
  titulo: {
    fontSize: 20, // Título menor
    fontWeight: 'bold',
    color: '#400303',
    textAlign: 'center',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14, // Texto menor
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 20,
  },
  vinhoContainer: {
    flexDirection: 'row',
    backgroundColor: '#ac484883',
    borderRadius: 6,
    padding: 12, // Padding reduzido
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    alignItems: 'flex-start',
    minHeight: 90, // Altura mínima reduzida
  },
  imagemContainer: {
    width: 60, // Container menor
    height: 90, // Container menor
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
  },
  imagemVinho: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    backgroundColor: '#ad494983',
},
  textoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nomeVinho: {
    fontSize: 16, // Fonte menor
    fontWeight: 'bold',
    color: '#400303',
    marginBottom: 6,
  },
  descricaoVinho: {
    fontSize: 12, // Fonte menor
    color: '#666',
    lineHeight: 18,
  },
});

export default estilos;