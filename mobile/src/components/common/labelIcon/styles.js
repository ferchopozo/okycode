import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    Container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginTop: 8,
        marginBottom: 8,
        justifyContent: "center"
    },
    Icon:  {
        maxWidth:"10%",
        minWidth:"10%",
        marginRight: 5
    },
    Name: {
        marginRight: 10,
        maxWidth:"30%",
        minWidth:"30%",
        
    },
    Description: {
        maxWidth:"60%",
        minWidth:"60%",
    },
    TextName: {
        fontWeight: "400"
    },
    TextDescription: {
        fontWeight: "300"
    }

})