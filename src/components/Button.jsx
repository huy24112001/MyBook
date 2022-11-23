import { Pressable, StyleSheet, Text, View } from 'react-native';


function Button({ name, onPress  }) {
    return (
        <View >
            <Pressable onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {name}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        marginRight:15,
        backgroundColor: "#373767",
        width:124,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize:14,
    },

    pressed: {
        opacity: 0.75,
        backgroundColor: 'blue',
        borderRadius: 4,
    },
});

