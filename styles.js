import { StyleSheet } from "react-native";

const colors = {
  primary: '#006241',//verde Starbucks
  accent: '#00754A',//verde médio
  deep: '#1E3932',//verde profundo
  mint: '#D4E9E2',//menta
  white: '#FFFFFF',
  text: '#0B0B0B',
  sub: 'rgba(0,0,0,0.6)',
  border: 'rgba(0,0,0,0.08)',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  titulo: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: colors.deep,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 8,
  },

  mapa: {
    height: 260,
    borderRadius: 16,
    marginHorizontal: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },

  lista: {
    flex: 1,
    marginTop: 12,
  },
  listaConteudo: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    gap: 12,
  },

  card: {
    backgroundColor: colors.mint,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  cardEndereco: {
    fontSize: 13,
    color: colors.deep,
    opacity: 0.8,
  },

  chip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    overflow: 'hidden',
  },
  chipAberto: {
    backgroundColor: colors.primary,
    color: colors.white,
  },
  chipFechado: {
    backgroundColor: colors.white,
    color: colors.deep,
    borderWidth: 1,
    borderColor: colors.deep,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardThumb: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D4E9E2',
  },
  cardAtiva: {
    borderColor: '#00754A',
    borderWidth: 1.5,
  },
  gridContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    gap: 12,
  },
  gridRow: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  gridEmpty: {
    textAlign: 'center',
    color: '#1E3932',
    opacity: 0.7,
    marginTop: 24,
  },
  cardMenu: {
    width: '68%',
    padding: 12,
    alignItems: 'center',
    gap: 8,
  },

  cardMenuThumb: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D4E9E2',
  },

  cardMenuTitulo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#006241',
    textAlign: 'center',
    minHeight: 38,
  },

  cardMenuActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },

  btn: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
  },

  btnEditar: {
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(0,0,0,0.05)',
  },

  btnExcluir: {
    backgroundColor: '#006241',
    borderColor: '#1E3932',
  },

  btnTextExcluir: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  btnTextEditar: {
    color: '#006241',
    fontWeight: '700',
    fontSize: 12,
  },
  menuWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
    columnGap: 12,
  },
  brandBar: {
    backgroundColor: colors.deep,
    paddingTop: 18,
    paddingBottom: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  brandTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  brandSub: {
    color: 'rgba(255,255,255,0.9)',
    marginTop: 2,
    fontSize: 12,
  },
  scrollContent: {
    padding: 16,
  },

  formCard: {
    backgroundColor: colors.mint,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
  },

  label: {
    color: colors.deep,
    fontWeight: '800',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#E6F2EE',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.deep,
  },
  inputMultiline: {
    minHeight: 96,
    textAlignVertical: 'top',
  },
  inputFocus: {
    borderColor: colors.accent,
  },
  hint: {
    fontSize: 12,
    color: 'rgba(30,57,50,0.7)',
    marginTop: 6,
  },

  actionsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 6,
  },
  btnPrimary: {
    backgroundColor: colors.primary,
    borderColor: colors.deep,
  },
  btnPrimaryText: {
    color: colors.white,
    fontWeight: '800',
    letterSpacing: 0.2,
    fontSize: 14,
  },
  btnPrimaryPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  btnGhost: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
  },
  btnGhostText: {
    color: colors.primary,
    fontWeight: '800',
    letterSpacing: 0.2,
    fontSize: 14,
  },
  btnPressedGhost: {
    opacity: 0.96,
    transform: [{ scale: 0.99 }],
  },
  homeBrandBar: {
    backgroundColor: colors.deep,
    paddingTop: 18,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  homeBrandTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  homeBrandSub: {
    color: 'rgba(255,255,255,0.9)',
    marginTop: 2,
    fontSize: 12,
  },

  homeContent: {
    padding: 16,
    gap: 16,
  },

  welcomeCard: {
    backgroundColor: colors.mint,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    // sombra suave
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 10 },
    elevation: 3,
  },
  welcomeTitle: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 4,
  },
  welcomeSubtitle: {
    color: colors.deep,
    opacity: 0.85,
    fontSize: 13,
  },

  shortcutRow: {
    flexDirection: 'row',
    gap: 10,
  },
  shortcutBtn: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E6F2EE',
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  shortcutBtnPressed: {
    opacity: 0.96,
    transform: [{ scale: 0.98 }],
  },
  shortcutEmoji: {
    fontSize: 18,
    marginBottom: 6,
  },
  shortcutText: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: 0.2,
  },
  promoCard: {
    backgroundColor: colors.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  promoTitle: {
    color: colors.deep,
    fontWeight: '800',
    fontSize: 14,
  },
  promoDesc: {
    color: colors.deep,
    opacity: 0.8,
    fontSize: 13,
  },
  promoCTA: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.deep,
  },
  promoCTAText: {
    color: colors.white,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  favBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    height: 32,
    minWidth: 32,
    paddingHorizontal: 8,
    borderRadius: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    // sombra leve
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  favIcon: {
    fontSize: 16,
    color: colors.accent,
  },
  favIconOff: {
    color: 'rgba(0,0,0,0.25)',
  },
  cardMenu: {
    position: 'relative',
  },
  chipsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 6,
  },
  chipItem: {
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  chipItemOn: {
    backgroundColor: colors.primary,
    borderColor: colors.deep,
  },
  chipItemOff: {
    backgroundColor: colors.white,
    borderColor: '#E6F2EE',
  },
  chipTextOn: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 12,
  },
  chipTextOff: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 12,
  },

  valueBig: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 8,
  },
  totalText: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.deep,
    marginBottom: 8,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  qtyBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#E6F2EE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtnText: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
  },
  qtyText: {
    minWidth: 36,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    color: colors.deep,
  },
  pedidosHeaderRow: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },

  pedidosListContent: {
    paddingHorizontal: 16,
    paddingBottom: 120,
    paddingTop: 8,
    gap: 10,
  },

  pedidoCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  pedidoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  pedidoTitulo: {
    color: colors.deep,
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 2,
  },
  pedidoMeta: {
    color: colors.deep,
    opacity: 0.75,
    fontSize: 12,
  },
  pedidoMetaStrong: {
    color: colors.primary,
    fontWeight: '800',
  },
  pedidoValor: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '800',
  },
  pedidoActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  pedidosTotalBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.mint,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pedidosTotalLabel: {
    color: colors.deep,
    fontWeight: '800',
    fontSize: 14,
  },
  pedidosTotalValor: {
    color: colors.deep,
    fontWeight: '800',
    fontSize: 18,
  },
heroCard: {
  backgroundColor: colors.mint,
  borderRadius: 18,
  borderWidth: 1,
  borderColor: colors.border,
  padding: 16,
  overflow: 'hidden',
  // sombra suave
  shadowColor: '#000',
  shadowOpacity: 0.12,
  shadowRadius: 14,
  shadowOffset: { width: 0, height: 10 },
  elevation: 3,

  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
},
heroImage: {
  width: 110,
  height: 110,
  borderRadius: 16,
  backgroundColor: colors.white,
  borderWidth: 1,
  borderColor: '#E6F2EE',
},
heroTextWrap: {
  flex: 1,
},
heroTitle: {
  color: colors.primary,
  fontSize: 18,
  fontWeight: '800',
  marginBottom: 4,
},
heroSubtitle: {
  color: colors.deep,
  opacity: 0.8,
  fontSize: 13,
  marginBottom: 10,
},
heroCTA: {
  alignSelf: 'flex-start',
  backgroundColor: colors.primary,
  borderRadius: 999,
  paddingVertical: 10,
  paddingHorizontal: 16,
  borderWidth: 1,
  borderColor: colors.deep,
},
heroCTAText: {
  color: colors.white,
  fontWeight: '800',
  letterSpacing: 0.2,
},

});