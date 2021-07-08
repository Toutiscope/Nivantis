import React, { useEffect } from "react";
import { useState } from "react";

import { StyleSheet, View, Text, TextInput } from "react-native";

export default function Calculator() {
  const data = {
    name: "Doliprane",
    description:
      "Ce médicament peut être pris indifféremment pendant ou entre les repas, en respectant un intervalle de 4 à 6 heures entre 2 prises. En cas d'insuffisance rénale, l'intervalle entre 2 prises doit être d'au moins 8 heures. Les formes dosées à 1000 mg sont réservées à l'adulte.Les comprimés et les gélules ne sont pas adaptés à l'enfant de moins de 6 ans. En effet, ils risquent d'obstruer les voies respiratoires si l'enfant déglutit mal et que le comprimé ou la gélule passe dans la trachée (fausse route). La suspension buvable peut être absorbée pure ou diluée dans de l'eau, du lait ou du jus de fruit. Le contenu des sachets doit être mélangé à une boisson (eau, lait, jus de fruits) et les comprimés effervescents doivent être dissous dans un verre d'eau.",
    grossPurPrice: 50,
    coeff: 1.2,
    discountRate: 0.25,
  };

  // const [grossPurPrice, setGrossPurPrice] = useState(data.grossPurPrice || 0);
  const [netPurPrice, setNetPurPrice] = useState(data.netPurPrice || 0);
  const [netSellPrice, setNetSellPrice] = useState(data.netSellPrice || 0);
  const [coeff, setCoeff] = useState(data.coeff || 0);
  const [discountRate, setDiscountRate] = useState(data.discountRate || 0);

  const setMin = (value) => {
    const result = parseFloat(value);
    if (result < 0 || isNaN(result)) {
      return 0;
    } else {
      return parseFloat(result.toFixed(2));
    }
  };

  // Convert
  // To net purchase price
  const toNetPurPrice = () => {
    const np = parseFloat(data.grossPurPrice * (1 - discountRate));
    const npFixed = setMin(np);
    setNetPurPrice(npFixed);

    return npFixed;
  };

  // To net selling price
  const toNetSellPrice = () => {
    const ns = parseFloat(netPurPrice * coeff);
    const nsFixed = setMin(ns);
    setNetSellPrice(nsFixed);
    return nsFixed;
  };

  useEffect(() => {
    toNetPurPrice();
    toNetSellPrice();
  }, [coeff, discountRate, netSellPrice, netPurPrice]);

  // Calc other values from this input value
  const onCoeff = (value) => {
    setCoeff(value);
    toNetPurPrice();
    toNetSellPrice();
  };

  const onDiscountRate = (value) => {
    setDiscountRate(value);
    toNetPurPrice();
    toNetSellPrice();
  };

  const calculate = (name, value, convert) => {
    const float = parseFloat(value);
    name === "coeff" && setCoeff(float);
    name === "discountRate" && setDiscountRate(float);
    const output = convert(float);
    return output;
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Calculatrice</Text> */}
      <Text style={styles.label}>Nom</Text>
      <Text style={styles.name}>{data.name}</Text>

      <Text style={styles.label}>Coefficient multiplicateur</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => calculate("coeff", value, onCoeff)}
        placeholder="Coefficient multiplicateur"
        defaultValue={coeff || 0}
      />
      <Text style={styles.label}>Taux de remise en %</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) =>
          calculate("discountRate", value, onDiscountRate)
        }
        placeholder="Taux de remise"
        defaultValue={discountRate || 0}
      />
      <View style={styles.box}>
        <Text>Prix d'achat brut : </Text>
        <Text style={styles.price}>{data.grossPurPrice} €</Text>
        <Text>Prix d'achat net : </Text>
        <Text style={styles.price}>{netPurPrice} €</Text>
        <Text>Prix de vente : </Text>
        <Text style={styles.price}>{netSellPrice} €</Text>
      </View>

      <Text style={styles.label}>Description</Text>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 32,
    marginVertical: 40,
  },
  title: {
    color: "#444E59",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 30,
    textAlign: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: "1.2em",
    marginBottom: 20,
  },
  description: {
    marginTop: 5,
  },
  label: {
    fontStyle: "italic",
    opacity: 0.6,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#0596DE",
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    marginTop: 5,
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  disabled: {
    backgroundColor: "#f2f2f2",
    borderColor: "#92c5de",
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    marginTop: 5,
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  box: {
    display: "grid",
    gridTemplateColumns: "3fr 2fr",
    gridRowGap: 15,
    marginTop: 10,
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomColor: "#0596DE",
    borderBottomWidth: 2,
  },
  price: {
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0596DE",
    borderRadius: 50,
    elevation: 3,
    justifyContent: "center",
    marginVertical: 32,
    marginHorizontal: 32,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
