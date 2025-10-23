import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5791f4',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    lower_text: {
        fontSize: 15,
        fontWeight: "300", // "light" в RN не работает, используй числа (100–900)
    },
    news_box: {
        width: 200,          // 👈 добавляем размеры
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#dddddd',
        borderRadius: 5,
        borderColor: '#702525',
        borderWidth: 2,      // 👈 чтобы граница была видна
        marginTop: 20,       // отступ сверху
    }
});
