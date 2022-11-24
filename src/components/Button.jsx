import { StyleSheet, Text, TouchableHighlight, View} from 'react-native';


function Button({ name, onPress  }) {
    return (
            <TouchableHighlight style={styles.button} underlayColor='#0A0A54FF'  onPress={onPress}>
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
        padding: 8,
        marginRight:15,
        backgroundColor: "#2c2cd5",
        width:124,
        // backgroundColor:'#0a0a54'
    },

    buttonText: {
        color: 'white',

        textAlign: 'center',
        fontSize:14,
    },

});

