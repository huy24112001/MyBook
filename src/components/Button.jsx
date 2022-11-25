import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';


function Button({ name, onPress }) {
    return (
        <TouchableHighlight style={styles.button} underlayColor='#00331a' onPress={onPress}>
            <Text style={styles.buttonText}>
                {name}
            </Text>
        </TouchableHighlight>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: "#008040",
        width: 124,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
    },

});

