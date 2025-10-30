import React from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  RefreshControl,
} from "react-native";
import styles from "../styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { PedidosService } from "../database/PedidoService";
import { Pedido } from "../model/Pedidos";

export default function ListarPedidos() {
  const navigation = useNavigation<any>();
  const [dados, setDados] = useState<Pedido[]>([]);
  const [load, setLoad] = useState(true);

  const parseBRLToNumber = (txt?: string) => {
    if (!txt) return 0;
    const digits = txt.replace(/[^\d]/g, "");
    return digits ? Number(digits) / 100 : Number(txt.replace(",", "."));
  };
  const formatBRL = (n: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n || 0);

  const carregar = async () => {
    try {
      setLoad(true);
      const lista = await PedidosService.findAll();
      setDados(lista || []);
    } catch (e) {
      console.log("Erro ao carregar pedidos:", e);
    } finally {
      setLoad(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      carregar();
    }, [])
  );

  const remover = async (p: Pedido) => {
    try {
      await PedidosService.delete(p);
      setDados((curr) => curr.filter((x) => x.id !== p.id));
    } catch (e) {
      console.log("Erro ao excluir:", e);
    }
  };

  const totalGeral = dados.reduce((acc, p) => acc + parseBRLToNumber(p.total), 0);

  const renderItem = ({ item }: { item: Pedido }) => (
    <View style={[styles.pedidoCard]}>
      <View style={styles.pedidoRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.pedidoTitulo} numberOfLines={2}>{item.item}</Text>
          <Text style={styles.pedidoMeta}>
            Qtd: <Text style={styles.pedidoMetaStrong}>{item.quantidade}</Text>
          </Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.pedidoValor}>{item.total}</Text>

          <View style={styles.pedidoActions}>
            <Pressable
              style={({ pressed }) => [
                styles.btn,
                styles.btnGhost,
                pressed && styles.btnPressedGhost,
              ]}
              onPress={() =>
                navigation.navigate("Criar pedido", {
                  pedido: item,
                })
              }
            >
              <Text style={styles.btnGhostText}>Editar</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.btn,
                styles.btnPrimary,
                pressed && styles.btnPrimaryPressed,
              ]}
              onPress={() => remover(item)}
            >
              <Text style={styles.btnPrimaryText}>Excluir</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.brandBar}>
        <Text style={styles.brandTitle}>Pedidos</Text>
        <Text style={styles.brandSub}>Acompanhe os pedidos e totais</Text>
      </View>

      <FlatList
        data={dados}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={styles.pedidosListContent}
        refreshControl={
          <RefreshControl refreshing={load} onRefresh={carregar} />
        }
        ListEmptyComponent={
          !load ? (
            <Text style={styles.gridEmpty}>Nenhum pedido lançado.</Text>
          ) : null
        }
      />
      <View style={styles.pedidosTotalBar}>
        <Text style={styles.pedidosTotalLabel}>Total Geral</Text>
        <Text style={styles.pedidosTotalValor}>{formatBRL(totalGeral)}</Text>
      </View>
    </View>
  );
}
