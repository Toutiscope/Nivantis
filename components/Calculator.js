import React, { useEffect } from "react";
import { useState } from "react";

import { StyleSheet, View, Text, TextInput } from "react-native";

export default function Calculator() {
  const data = {
    name: "Doliprane",
    description:
      "Ce médicament peut être pris indifféremment pendant ou entre les repas, en respectant un intervalle de 4 à 6 heures entre 2 prises. En cas d'insuffisance rénale, l'intervalle entre 2 prises doit être d'au moins 8 heures. Les formes dosées à 1000 mg sont réservées à l'adulte.Les comprimés et les gélules ne sont pas adaptés à l'enfant de moins de 6 ans. En effet, ils risquent d'obstruer les voies respiratoires si l'enfant déglutit mal et que le comprimé ou la gélule passe dans la trachée (fausse route). La suspension buvable peut être absorbée pure ou diluée dans de l'eau, du lait ou du jus de fruit. Le contenu des sachets doit être mélangé à une boisson (eau, lait, jus de fruits) et les comprimés effervescents doivent être dissous dans un verre d'eau.",
    grossPurPrice: 5,
    coeff: 0.2,
    netPurPrice: 4,
    netSellPrice: 5,
    discountRate: 1,
  };

  const [grossPurPrice, setGrossPurPrice] = useState(data.grossPurPrice);
  const [netPurPrice, setNetPurPrice] = useState(data.netPurPrice);
  const [netSellPrice, setNetSellPrice] = useState(data.netSellPrice);
  const [coeff, setCoeff] = useState(data.coeff);
  const [discountRate, setDiscountRate] = useState(data.discountRate);

  // Convert
  // To net purchase price
  const toNetPurPrice = () => {
    console.log("Net Purchase Price");
    const np = parseFloat(data.grossPurPrice * (1 - discountRate));
    const npFixed = np.toFixed(2);
    setNetPurPrice(npFixed);
    return npFixed;
  };

    // To net selling price
  const toNetSellPrice = () => {
    console.log("Prix de vente net");
    const ns = parseFloat(netPurPrice * coeff);
    const nsFixed = ns.toFixed(2);
    setNetSellPrice(nsFixed);
    return nsFixed;
  };

  const toCoeff = () => {
    console.log("Coefficient multiplicateur");
    const c = parseFloat(netSellPrice / netPurPrice);
    const cFixed = c.toFixed(2);
    setCoeff(cFixed);
    return cFixed;
  };

  const toDiscountRate = () => {
    console.log("Taux de remise");
    const dr = parseFloat((1 - netPurPrice / data.grossPurPrice) * 100);
    const drFixed = dr.toFixed(2);
    setDiscountRate(drFixed);
    return drFixed;
  };

  // Calc other values from this input value
  const onGrossPurPrice = (value) => {
    console.log("GROSS PUR PRICE");
    setGrossPurPrice(value);
    toNetPurPrice();
    toDiscountRate();
    toCoeff();
    toNetSellPrice();
  };

  const onNetPurPrice = (value) => {
    console.log("NET PUR PRICE");
    setNetPurPrice(value);
    toDiscountRate();
    toCoeff();
    toNetSellPrice();
  };

  const onNetSellPrice = (value) => {
    console.log("NET SELL PRICE");
    setNetSellPrice(value);
    toNetPurPrice();
    toDiscountRate();
    toCoeff();
  };

  const onCoeff = (value) => {
    console.log("COEFF");
    setCoeff(value);
    toNetPurPrice();
    toNetSellPrice();
    toDiscountRate();
  };

  const onDiscountRate = (value) => {
    console.log("DISCOUNT RATE");
    setDiscountRate(value);
    toNetPurPrice();
    toNetSellPrice();
    toCoeff();
  };

  const calculate = (name, value, convert) => {
    name === "netPurPrice" && onNetPurPrice(value);
    name === "netSellPrice" && setNetSellPrice(value);
    name === "coeff" && setCoeff(value);
    name === "discountRate" && setDiscountRate(value);
    const output = convert(value);
    return output;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculatrice</Text>
      <Text style={styles.label}>Nom</Text>
      <Text style={styles.name}>{data.name}</Text>

      {/* <Text style={styles.label}>Prix d'achat brut</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => calculate("netPurPrice", value, onGrossPurPrice)}
        placeholder="Prix d'achat brut"
        defaultValue={grossPurPrice}
      /> */}

      <Text style={styles.label}>Prix d'achat net</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => calculate("netPurPrice", value, onNetPurPrice)}
        placeholder="Prix d'achat net"
        defaultValue={netPurPrice}
      />
      <Text style={styles.label}>Prix de vente net</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) =>
          calculate("netSellPrice", value, onNetSellPrice)
        }
        placeholder="Prix de vente net"
        value={netSellPrice}
      />

      <Text style={styles.label}>Coefficient multiplicateur</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => calculate("coeff", value, onCoeff)}
        placeholder="Coefficient multiplicateur"
        value={coeff}
      />

      <Text style={styles.label}>Taux de remise en %</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) =>
          calculate("discountRate", value, onDiscountRate)
        }
        placeholder="Taux de remise"
        value={discountRate}
      />

      <Text style={styles.label}>Description</Text>
      <Text style={styles.description}>{data.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 32,
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
