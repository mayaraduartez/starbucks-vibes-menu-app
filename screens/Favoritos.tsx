import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Pressable,
  TouchableOpacity,
} from "react-native";
import styles from "../styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ItemMenu } from "../model/ItemMenu";
import { ItemMenuService } from "../database/ItemMenuService";

export default function Favoritos() {
  const [dados, setDados] = useState<ItemMenu[]>([]);
  const [load, setLoad] = useState(true);
  const navigation = useNavigation<any>();

  const Carregar = async () => {
    try {
      setLoad(true);
      const resultado = await ItemMenuService.findFavoritos();
      setDados(resultado || []);
    } catch (e) {
      console.log("Erro ao carregar favoritos:", e);
    } finally {
      setLoad(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      Carregar();
    }, [])
  );

  const editar = (item: ItemMenu) => {
    navigation.navigate("Cadastrar Menu", { itemmenu: item });
  };

  const toggleFavorito = async (item: ItemMenu) => {
    const novoValor = item.favorito ? 0 : 1; // alterna entre 0 e 1
    const anterior = dados;
    setDados(dados.map(d => d.id === item.id ? { ...d, favorito: novoValor } : d));
    try {
      await ItemMenuService.setFavorito(item.id, novoValor);
      // se desfavoritou, some da lista
      if (novoValor === 0) setDados(curr => curr.filter(d => d.id !== item.id));
    } catch (e) {
      // rollback
      setDados(anterior);
      console.log("Erro ao alterar favorito:", e);
    }
  };

  const renderItem = ({ item }: { item: ItemMenu }) => (
    <View style={styles.menuWrap}>
      <View style={[styles.card, styles.cardMenu]}>
        {/* Botão de favorito */}
        <Pressable
          style={styles.favBtn}
          onPress={() => toggleFavorito(item)}
          android_ripple={{ color: "rgba(0,0,0,0.06)", borderless: true }}
        >
          <Text style={styles.favIcon}>♥</Text>
        </Pressable>

        <Image
          source={require("../assets/starbucks.png")}
          style={styles.cardMenuThumb}
          resizeMode="contain"
        />

        <Text style={styles.cardMenuTitulo} numberOfLines={2}>
          {item.titulo}
        </Text>

        {!!item.descricao && (
          <Text style={styles.cardMenuDesc} numberOfLines={2}>
            {item.descricao}
          </Text>
        )}

        <View style={styles.cardMenuActions}>
          <TouchableOpacity
            style={[styles.btn, styles.btnEditar]}
            onPress={() => editar(item)}
            activeOpacity={0.85}
          >
            <Text style={styles.btnTextEditar}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, styles.btnExcluir]}
            onPress={() => toggleFavorito(item)}
            activeOpacity={0.85}
          >
            <Text style={styles.btnTextExcluir}>Remover</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.brandBar}>
        <Text style={styles.brandTitle}>Favoritos</Text>
      </View>

      <FlatList
        data={dados}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.gridContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={load} onRefresh={Carregar} />
        }
        ListEmptyComponent={
          !load ? (
            <Text style={styles.gridEmpty}>
              Nenhum item favorito ainda.
            </Text>
          ) : null
        }
      />
    </View>
  );
}
