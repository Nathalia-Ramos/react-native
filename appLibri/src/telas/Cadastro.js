import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import COLORS from '../const/colors';

import Input from '../components/input';
import Button from '../components/button';

const Cadastro = () => {
  const nome = 'Tela de Cadastro';

  return (
    <SafeAreaView style={estilos.safe} >
      <ScrollView style={estilos.scroll}>

        <Text style={estilos.textTitle}>CADASTRO DE LIVROS</Text>

        <View style={estilos.viewForm}>

          <Input label="TITULO" />
          <Input label="DESCRIÇÃO" />
          <Input label="CAPA" />
          <Button title="CADASTRAR"/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  scroll: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  textTitle: {
    color: COLORS.black,
    fontSize: 25,
    fontWeight: 'bold',
  },

  viewForm: {
    marginVertical: 20,

  },

});

export default Cadastro;
