import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    text: {
        fontWeight: 'bold',
    },
    subText: {
        color: '#8d8d8d',
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '676767',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    value: {
        fontSize: 16,
        marginHorizontal: 20,
    },
    buttonText: {
        fontSize: 20,
        color: '#474747'
    }
});

export default styles;
