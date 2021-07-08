import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function List({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Liste des médicaments à aller chercher dans l'API</Text>
        <Button
          title="Calculatrice ->"
          onPress={() =>
            navigation.navigate('Calculator', { name: 'Calculer les remises commerciales' })
          }
        />
      </View>
    );
  }