import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import styles from "../styles";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";

import { ItemMenu } from "../model/ItemMenu";
import { ItemMenuService } from "../database/ItemMenuService";
import { PedidosService } from "../database/PedidoService"; 
import { Pedido } from "../model/Pedidos";  
export default function CriarPedido() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const pedidoParam = route.params?.pedido as Pedido | undefined;

  const [itens, setItens] = useState<ItemMenu[]>([]);
  const [sel, setSel] = useState<ItemMenu | null>(null);
  const [qtd, setQtd] = useState<number>(1);

  const isEdit = useMemo(() => !!pedidoParam?.id, [pedidoParam]);

  const carregar = async () => {
    const lista = await ItemMenuService.findAll();
    lista.sort((a, b) => (Number(b.favorito || 0) - Number(a.favorito || 0)));
    setItens(lista);

    if (!pedidoParam && !sel && lista.length) setSel(lista[0]);
  };

  // carrega itens
  useFocusEffect(
    React.useCallback(() => {
      carregar();
    }, [])
  );

  useEffect(() => {
    if (pedidoParam && itens.length) {
      const encontrado = itens.find(x => x.titulo === pedidoParam.item) || null;
      setSel(encontrado);
      setQtd(Number(pedidoParam.quantidade ?? 1));
    }
  }, [pedidoParam, itens.length]);

  const parseBRLToNumber = (txt?: string) => {
    if (!txt) return 0;
    const digits = txt.replace(/[^\d]/g, "");
    return digits ? Number(digits) / 100 : Number(txt.replace(",", "."));
  };

  const formatBRL = (n: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(isNaN(n) ? 0 : n);

  const unitPrice = parseBRLToNumber(sel?.valor);
  const total = unitPrice * qtd;

  const inc = () => setQtd((q) => Math.min(99, q + 1));
  const dec = () => setQtd((q) => Math.max(1, q - 1));

  const salvar = async () => {
    if (!sel) {
      alert("Selecione um item do menu.");
      return;
    }

    const payload = new Pedido({
      id: pedidoParam?.id, // so vem quando editar
      item: sel.titulo,
      quantidade: String(qtd),
      total: formatBRL(total),
    });

    try {
      if (isEdit) {
        await PedidosService.update(payload);
        alert("Pedido atualizado!");
      } else {
        await PedidosService.create(payload);
        alert("Pedido criado!");
      }
      navigation.goBack?.();
    } catch (e) {
      console.log("Erro ao salvar/atualizar pedido:", e);
      alert("Não foi possível salvar. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.brandBar}>
        <Text style={styles.brandTitle}>{isEdit ? "Editar Pedido" : "Criar Pedido"}</Text>
        <Text style={styles.brandSub}>
          {isEdit ? "Atualize o item e a quantidade" : "Selecione um item e a quantidade"}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} bounces>
        <View style={styles.formCard}>

          <Text style={styles.label}>Item do menu</Text>
          <View style={styles.chipsWrap}>
            {itens.map((it) => {
              const ativo = sel?.id === it.id;
              return (
                <Pressable
                  key={it.id}
                  onPress={() => setSel(it)}
                  style={({ pressed }) => [
                    styles.chipItem,
                    ativo ? styles.chipItemOn : styles.chipItemOff,
                    pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] },
                  ]}
                >
                  <Text style={ativo ? styles.chipTextOn : styles.chipTextOff}>
                    {it.titulo}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={styles.label}>Preço unitário</Text>
          <Text style={styles.valueBig}>{formatBRL(unitPrice)}</Text>

          {/* Quantidade */}
          <Text style={styles.label}>Quantidade</Text>
          <View style={styles.qtyRow}>
            <Pressable
              onPress={dec}
              style={({ pressed }) => [
                styles.qtyBtn,
                pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] },
              ]}
            >
              <Text style={styles.qtyBtnText}>−</Text>
            </Pressable>
            <Text style={styles.qtyText}>{qtd}</Text>
            <Pressable
              onPress={inc}
              style={({ pressed }) => [
                styles.qtyBtn,
                pressed && { opacity: 0.9, transform: [{ scale: 0.98 }] },
              ]}
            >
              <Text style={styles.qtyBtnText}>＋</Text>
            </Pressable>
          </View>

          <Text style={styles.label}>Total</Text>
          <Text style={styles.totalText}>{formatBRL(total)}</Text>

          <View style={styles.actionsRow}>
            <Pressable
              onPress={() => navigation.goBack?.()}
              style={({ pressed }) => [
                styles.btn,
                styles.btnGhost,
                pressed && styles.btnPressedGhost,
              ]}
            >
              <Text style={styles.btnGhostText}>Cancelar</Text>
            </Pressable>

            <Pressable
              onPress={salvar}
              style={({ pressed }) => [
                styles.btn,
                styles.btnPrimary,
                pressed && styles.btnPrimaryPressed,
              ]}
            >
              <Text style={styles.btnPrimaryText}>
                {isEdit ? "Atualizar Pedido" : "Salvar Pedido"}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
