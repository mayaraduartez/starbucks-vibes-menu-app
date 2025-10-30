import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {/* Header brand */}
      <View style={styles.homeBrandBar}>
        <Text style={styles.homeBrandTitle}>Olá, Mayara</Text>
        <Text style={styles.homeBrandSub}>Bem-vinda ao painel</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.homeContent}
        keyboardShouldPersistTaps="handled"
        bounces
      >
        {/* HERO com imagem */}
        <View style={styles.heroCard}>
          <Image
            source={require("../assets/starbucks.png")}
            style={styles.heroImage}
            resizeMode="contain"
          />

          <View style={styles.heroTextWrap}>
            <Text style={styles.heroTitle}>Comece seu dia</Text>
            <Text style={styles.heroSubtitle}>
              Peça, edite o menu e acompanhe pedidos com um toque.
            </Text>

            <Pressable
              style={({ pressed }) => [
                styles.heroCTA,
                pressed && { opacity: 0.92, transform: [{ scale: 0.99 }] },
              ]}
              onPress={() => navigation.navigate("Criar pedido")}
            >
              <Text style={styles.heroCTAText}>Fazer um pedido</Text>
            </Pressable>
          </View>
        </View>

        {/* Card de boas-vindas (mantido, agora menor) */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Bem-vindo!</Text>
          <Text style={styles.welcomeSubtitle}>
            Visualize o menu e explore as cafeterias próximas com facilidade.
          </Text>
        </View>

        {/* Atalhos rápidos */}
        <View style={styles.shortcutRow}>
          <Pressable
            style={({ pressed }) => [
              styles.shortcutBtn,
              pressed && styles.shortcutBtnPressed,
            ]}
            onPress={() => navigation.navigate("Cadastrar Menu")}
          >
            <Text style={styles.shortcutEmoji}>➕</Text>
            <Text style={styles.shortcutText}>Novo Item</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.shortcutBtn,
              pressed && styles.shortcutBtnPressed,
            ]}
            onPress={() => navigation.navigate("Listar Menu")}
          >
            <Text style={styles.shortcutEmoji}>📋</Text>
            <Text style={styles.shortcutText}>Menu</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
