import { useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from '../styles';
import MapView, { Marker } from 'react-native-maps';

const cafeterias = [
  { id: '1', nome: 'StarCafé Central', latitude: -31.3325, longitude: -54.07193, endereco: 'Av. Principal, 100', abertoAgora: true },
  { id: '2', nome: 'Green Siren Coffee', latitude: -31.3329, longitude: -54.0729, endereco: 'Rua das Flores, 200', abertoAgora: false },
  { id: '3', nome: 'Mint Roast', latitude: -31.3332, longitude: -54.0722, endereco: 'Praça do Centro, 45', abertoAgora: true },
];

export default function Cafeterias() {
  const [posicao, setPosicao] = useState({
    latitude: -31.332477,
    longitude: -54.072417,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  const focarMapa = (lat: number, lon: number) => {
    setPosicao(prev => ({ ...prev, latitude: lat, longitude: lon }));
  };

  const renderItem = ({ item: cafe }: { item: typeof cafeterias[number] }) => (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.card}
      onPress={() => focarMapa(cafe.latitude, cafe.longitude)}
    >
      <View style={styles.cardRow}>
        <Image
          source={require('../assets/starbucks.png')}
          style={styles.cardThumb}
          resizeMode="contain"
        />

        <View style={{ flex: 1 }}>
          <View style={styles.cardLinha}>
            <Text style={styles.cardTitulo}>{cafe.nome}</Text>
            <Text style={[styles.chip, cafe.abertoAgora ? styles.chipAberto : styles.chipFechado]}>
              {cafe.abertoAgora ? 'Aberto' : 'Fechado'}
            </Text>
          </View>

          <Text style={styles.cardEndereco}>{cafe.endereco}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.brandBar}>
        <Text style={styles.brandTitle}>Cafeterias Próximas</Text>
      </View>

      <MapView
        style={styles.mapa}
        mapType="satellite"
        region={posicao}
        onPress={(e) => {
          const { latitude, longitude } = e.nativeEvent.coordinate;
          setPosicao(prev => ({ ...prev, latitude, longitude }));
        }}
      >
        {cafeterias.map((cafe) => (
          <Marker
            key={cafe.id}
            coordinate={{ latitude: cafe.latitude, longitude: cafe.longitude }}
            title={cafe.nome}
            description={cafe.endereco}
            image={require('../assets/pin.png')}
            onPress={() => focarMapa(cafe.latitude, cafe.longitude)}
          />
        ))}
      </MapView>

      <FlatList
        data={cafeterias}
        keyExtractor={(cafe) => cafe.id}
        renderItem={renderItem}
        style={styles.lista}
        contentContainerStyle={styles.listaConteudo}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
