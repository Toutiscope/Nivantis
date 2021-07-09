import React, { useEffect, useState, useContext } from "react";
import { ApiContext } from "../utils/ApiContext";

import { StyleSheet, View, Text, TextInput } from "react-native";

export default function Calculator({ route }) {
  const { itemId } = route.params;

  const api = useContext(ApiContext);

  const { data } = api;
  const filterDrug = data.filter((item) => item.id === itemId);
  const drug = filterDrug[0];

  const [netPurPrice, setNetPurPrice] = useState(0);
  const [netSellPrice, setNetSellPrice] = useState(0);
  const [coeff, setCoeff] = useState(drug.coeffMulti || 0);
  const [discountRate, setDiscountRate] = useState(drug.remise || 0);

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
    const np = parseFloat(parseFloat(drug.achatBrut) * (1 - discountRate));
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
  }, [data, coeff, discountRate, netSellPrice, netPurPrice]);

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
    let float = parseFloat(value);
    if (!float || float < 0 || isNaN(float)) {
      // name === "coeff" ? float = 0 : float = 1;
      float = 0;
    }
    console.log(float);
    name === "coeff" && setCoeff(float);
    name === "discountRate" && setDiscountRate(float);
    const output = convert(float);
    return output;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom</Text>
      <Text style={styles.name}>{drug.nom}</Text>

      <Text style={styles.label}>Taux de remise</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(value) =>
          calculate("discountRate", value, onDiscountRate)
        }
        placeholder="Taux de remise"
        defaultValue={discountRate.toString() || "0"}
      />
      <Text style={styles.label}>Coefficient multiplicateur</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(value) => calculate("coeff", value, onCoeff)}
        placeholder="Coefficient multiplicateur"
        defaultValue={coeff.toString() || "0"}
      />
      <View style={styles.box}>
        <View style={styles.line}>
          <Text style={styles.labelP}>Prix d'achat brut : </Text>
          <Text style={styles.price}>{parseFloat(drug.achatBrut)} €</Text>
        </View>
        <View style={styles.line}>
          <Text>Prix d'achat net : </Text>
          <Text style={styles.price}>{netPurPrice} €</Text>
        </View>
        <View style={styles.line}>
          <Text>Prix de vente : </Text>
          <Text style={styles.price}>{netSellPrice} €</Text>
        </View>
      </View>

      <Text style={styles.label}>Description</Text>
      <Text style={styles.description}>{drug.description}</Text>
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
    fontSize: 18,
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
    marginTop: 10,
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomColor: "#0596DE",
    borderBottomWidth: 2,
  },
  line: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 10,
  },
  price: {
    fontWeight: "bold",
    width: "30%",
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
