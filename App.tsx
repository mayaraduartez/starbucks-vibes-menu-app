import React, { useEffect } from 'react';
import { StatusBar, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Home from './screens/Home';
import Cafeterias from './screens/Cafeterias';
import CadastrarMenu from './screens/CadastrarMenu';
import CriarPedido from './screens/CriarPedido';
import Favoritos from './screens/Favoritos';
import ListarMenu from './screens/ListarMenu';
import ListarPedidos from './screens/ListarPedidos';
import { Database } from './database/Database';

const Drawer = createDrawerNavigator();

// Paleta do starbucks
const colors = {
  primary: '#006241',
  accent:  '#00754A',
  deep:    '#1E3932',
  mint:    '#D4E9E2',
  white:   '#FFFFFF',
  border:  'rgba(0,0,0,0.08)',
};

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ paddingTop: 0, backgroundColor: colors.deep  }}
    >
      <View
        style={{
          backgroundColor: colors.deep,
          paddingHorizontal: 16,
          paddingTop: 38,
          paddingBottom: 16,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <Image
          source={require('./assets/starbucks.png')}
          style={{
            width: 56, height: 56, borderRadius: 12,
            backgroundColor: colors.white, borderWidth: 1, borderColor: '#E6F2EE',
          }}
          resizeMode="contain"
        />
        <View style={{ flex: 1 }}>
          <Text style={{ color: colors.white, fontSize: 16, fontWeight: '800' }}>
            Starbucks App
          </Text>
          <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 12 }}>
            Olá! Seja bem-vindo(a)
          </Text>
        </View>
      </View>
      <View style={{ paddingVertical: 8 }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

export default function App() {
  useEffect(() => {
    Database.ReinitDb().then(() => console.log('Banco Reinicializado!'));
  }, []); 

  return (
    <NavigationContainer >
      <StatusBar barStyle="light-content" backgroundColor={colors.deep} />

      <Drawer.Navigator
        initialRouteName="Página Inicial"
        drawerContent={(p) => <CustomDrawerContent {...p} />}
        screenOptions={{
          headerStyle: { backgroundColor: colors.deep },
          headerTintColor: colors.white,
          headerTitleStyle: { fontWeight: '800' },
          headerTitleAlign: 'center',

          drawerStyle: { backgroundColor: colors.deep, width: 280 },
          drawerActiveBackgroundColor: colors.mint,
          drawerActiveTintColor: colors.primary,
          drawerInactiveTintColor: colors.white,
          drawerLabelStyle: { fontWeight: '700', fontSize: 14 },
          drawerItemStyle: {
            borderRadius: 12,
            marginHorizontal: 10,
            marginVertical: 4,
            borderWidth: 1,
            borderColor: colors.border,
          },
        }}
      >
        <Drawer.Screen
          name="Página Inicial"
          component={Home}
          options={{
            drawerIcon: () => <Text></Text>,
            title: 'Página Inicial',
          }}
        />
        <Drawer.Screen
          name="Cadastrar Menu"
          component={CadastrarMenu}
          options={{ drawerIcon: () => <Text></Text> }}
        />
        <Drawer.Screen
          name="Listar Menu"
          component={ListarMenu}
          options={{ drawerIcon: () => <Text></Text> }}
        />
        <Drawer.Screen
          name="Cafeterias"
          component={Cafeterias}
          options={{ drawerIcon: () => <Text></Text> }}
        />
        <Drawer.Screen
          name="Favoritos"
          component={Favoritos}
          options={{ drawerIcon: () => <Text></Text> }}
        />
        <Drawer.Screen
          name="Criar pedido"
          component={CriarPedido}
          options={{ drawerIcon: () => <Text></Text> }}
        />
        <Drawer.Screen
          name="Listar pedidos"
          component={ListarPedidos}
          options={{ drawerIcon: () => <Text></Text> }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
