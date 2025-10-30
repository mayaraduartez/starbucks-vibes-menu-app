# Starbucks Vibes Menu App 

App mobile em **React Native (Expo)** com estética Starbucks para gerenciar **cardápio, favoritos e pedidos**, além de exibir **cafeterias no mapa**. Usa **SQLite** para persistência e **Drawer** customizado (deep/mint).

##  Features
- Cadastro e listagem de itens do menu
- Favoritos com botão de coração (persistido em SQLite)
- Criar/editar pedidos (quantidade, total, validações)
- Tela “Cafeterias” com **MapView + Marker** e foco no mapa
- Drawer estilizado (tema deep/mint, hero com logo)
- FlatList performática nas listas
- Suporte a Expo Tunnel e EAS Update

##  Stack
- React Native + Expo
- Expo Router/Navigation (Drawer)
- expo-sqlite (persistência)
- react-native-maps

##  Começando
```bash
# criar/abrir o projeto
npm install
npx expo start           # dev server
npx expo start --tunnel  # se precisar acessar de fora da rede
```

##  Variáveis/Config
Banco: appStarbucks.db (SQLite, criado automaticamente).

Ajuste tema/cores em styles (palette deep/mint/primary).




