import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [result, setResult] = useState('0');
  const [expression, setExpression] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
      setExpression('');
    } else if (value === 'C') {
      setResult('0');
      setExpression('');
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.buttonsContainer}>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button_operador}
            onPress={() => handlePress('C')}>
            <Text style={styles.buttonText_operador}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_operador}
            onPress={() => handlePress('⌫')}>
            <Text style={styles.buttonText_operador}>⌫</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_operador}
            onPress={() => handlePress('raiz')}>
            <Text style={styles.buttonText_operador}>raiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_operador}
            onPress={() => handlePress('%')}>
            <Text style={styles.buttonText_operador}>%</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button_operador}
            onPress={() => handlePress('1/x')}>
            <Text style={styles.buttonText_operador}>1/X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_operador}
            onPress={() => handlePress('^')}>
            <Text style={styles.buttonText_operador}>^</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_operador}
            onPress={() => handlePress('raiz')}>
            <Text style={styles.buttonText_operador}>raiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_operador}
            onPress={() => handlePress('%')}>
            <Text style={styles.buttonText_operador}>%</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_operador}
            onPress={() => handlePress('/')}>
            <Text style={styles.buttonText_operador}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_operador}
            onPress={() => handlePress('+')}>
            <Text style={styles.buttonText_operador}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_operador}
            onPress={() => handlePress('+')}>
            <Text style={styles.buttonText_operador}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button_Resultado}
            onPress={() => handlePress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_Resultado}
            onPress={() => handlePress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_Resultado}
            onPress={() => handlePress('=')}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>        

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'stretch',
    backgroundColor: '#fff',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    margin:2
  },
  resultText: {
    fontSize: 40,
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius:20
  },
  buttonText: {
    fontSize:20,
  },
  buttonText_operador: {
    fontSize:25,
    color:'#fff'
  },
  button_operador: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    color:'#ffff',
    borderColor: '#ccc',
    backgroundColor:'#F68412',
    borderRadius:20,
  },
  button_Resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    color:'#ffff',
    borderColor: '#ccc',
    backgroundColor:'#1978AB',
    borderRadius:20,
  },


});

