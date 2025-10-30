import { useEffect, useState } from "react";
import {
  View, Text, TextInput, Pressable,
  KeyboardAvoidingView, Platform, ScrollView
} from "react-native";
import styles from "../styles";
import { ItemMenu } from "../model/ItemMenu";
import { ItemMenuService } from "../database/ItemMenuService";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function CadastroItem() {
  const [formItem, setFormItem] = useState<Partial<ItemMenu>>({});
  const [focus, setFocus] = useState<null|"titulo"|"descricao"|"valor">(null);
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (route.params?.itemmenu) setFormItem(route.params.itemmenu);
  }, [route.params]);

  const salvar = async () => {
    if (formItem.id) {
      await ItemMenuService.update(new ItemMenu(formItem));
      alert("Item do Menu Atualizado!");
    } else {
      await ItemMenuService.create(new ItemMenu(formItem));
      alert("Item Cadastrado!");
    }
    setFormItem({});
    navigation.goBack?.();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <View style={styles.brandBar}>
        <Text style={styles.brandTitle}>Novo Item</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.formCard}>
          <Text style={styles.label}>Título</Text>
          <TextInput
            placeholder="Ex.: Latte Macchiato"
            placeholderTextColor="rgba(30,57,50,0.45)"
            style={[styles.input, focus==='titulo' && styles.inputFocus]}
            onFocus={() => setFocus('titulo')}
            onBlur={() => setFocus(null)}
            value={formItem.titulo || ""}
            onChangeText={(v)=>setFormItem({...formItem, titulo:v})}
            returnKeyType="next"
          />

          <Text style={styles.label}>Descrição (opcional)</Text>
          <TextInput
            placeholder="Notas de caramelo, espresso e leite vaporizado"
            placeholderTextColor="rgba(30,57,50,0.45)"
            style={[styles.input, styles.inputMultiline, focus==='descricao' && styles.inputFocus]}
            onFocus={() => setFocus('descricao')}
            onBlur={() => setFocus(null)}
            value={formItem.descricao || ""}
            onChangeText={(v)=>setFormItem({...formItem, descricao:v})}
            multiline
            numberOfLines={3}
          />

          <Text style={styles.label}>Valor</Text>
          <TextInput
            placeholder="R$ 0,00"
            placeholderTextColor="rgba(30,57,50,0.45)"
            keyboardType="numeric"
            style={[styles.input, focus==='valor' && styles.inputFocus]}
            onFocus={() => setFocus('valor')}
            onBlur={() => setFocus(null)}
            value={formItem.valor || ""}
            onChangeText={(v)=>setFormItem({...formItem, valor:v})}
            returnKeyType="done"
          />

          <View style={styles.actionsRow}>
            <Pressable
              onPress={() => setFormItem({})}
              style={({pressed})=>[styles.btn, styles.btnGhost, pressed && styles.btnPressedGhost]}
              android_ripple={{ color: "rgba(0,0,0,0.06)" }}
            >
              <Text style={styles.btnGhostText}>Limpar</Text>
            </Pressable>

            <Pressable
              onPress={salvar}
              style={({pressed})=>[styles.btn, styles.btnPrimary, pressed && styles.btnPrimaryPressed]}
              android_ripple={{ color: "rgba(255,255,255,0.2)" }}
            >
              <Text style={styles.btnPrimaryText}>Salvar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
