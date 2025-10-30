import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
  Pressable,
} from "react-native";
import styles from "../styles";

import { ItemMenu } from "../model/ItemMenu";
import { ItemMenuService } from "../database/ItemMenuService";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default function ListarMenu() {
  const [dados, setDados] = useState<ItemMenu[]>([]);
  const [load, setLoad] = useState(true);
  const navigation = useNavigation<any>();

  const Carregar = async () => {
    try {
      setLoad(true);
      const resultado = await ItemMenuService.findAll();
      setDados(resultado || []);
    } catch (e) {
      console.log("Erro ao carregar itens:", e);
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

  const excluir = async (itemmenu: ItemMenu) => {
    try {
      await ItemMenuService.delete(itemmenu);
      await Carregar();
    } catch (e) {
      console.log("Erro ao excluir:", e);
    }
  };

  const toggleFavorito = async (item: ItemMenu) => {
    const novo = dados.map((d) =>
      d.id === item.id ? { ...d, favorito: d.favorito ? 0 : 1 } : d
    );
    setDados(novo);

    try {
      await ItemMenuService.setFavorito(item.id, item.favorito ? 0 : 1);
    } catch (e) {
      setDados(dados);
      console.log("Erro ao favoritar:", e);
    }
  };

  const renderItem = ({ item }: { item: ItemMenu }) => (
    <View style={styles.menuWrap}>
      <View style={[styles.card, styles.cardMenu]}>
        <Pressable
          style={styles.favBtn}
          onPress={() => toggleFavorito(item)}
          android_ripple={{ color: 'rgba(0,0,0,0.06)', borderless: true }}
        >
          <Text style={[styles.favIcon, !item.favorito && styles.favIconOff]}>
            {item.favorito ? '♥' : '♡'}
          </Text>
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
            onPress={() => excluir(item)}
            activeOpacity={0.85}
          >
            <Text style={styles.btnTextExcluir}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container]}>
      <View style={styles.brandBar}>
        <Text style={styles.brandTitle}>Menu</Text>
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
          !load ? <Text style={styles.gridEmpty}>Nenhum item no menu.</Text> : null
        }
      />
    </View>
  );
}
