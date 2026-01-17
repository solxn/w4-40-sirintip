import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState , useEffect } from "react";
export default function Home() {
    const [text,setText] = useState("")
    const [fruit,setFruit] = useState("")
    
    useEffect(() => {
        loadFruit()
    },[])

    async function saveFruit(){
        await AsyncStorage.setItem("fruit",text)
        setFruit(text)
        setText("")
    }

    //โหลดค่า storage
    async function loadFruit(){
        const data = await AsyncStorage.getItem("fruit")
        if (data != ""){}
        setFruit(data!.toString())
    }   
            
    // delete
    async function removeFruit(){
        await AsyncStorage.removeItem("fruit")
        setFruit("")
    }


    return (
        <View style={TheStyle.container}>
            {/* แสดงสิ่งที่บันทึก */}
            <Text style={TheStyle.font}>Fruit : </Text>
            <Text style={TheStyle.ans}>{fruit}</Text>
            {/* รับข้อความ */}
            <TextInput style={TheStyle.input} value={text} onChangeText={setText}/>
            {/* save */}
            <TouchableOpacity onPress={saveFruit}>
                <Text style={TheStyle.button}>บันทึก</Text>
            </TouchableOpacity>
            {/* delete */}
            <TouchableOpacity onPress={removeFruit}>
                <Text style={TheStyle.button} >ลบ</Text>
            </TouchableOpacity>

        </View>
    )
}

const TheStyle = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ececec"
    },

    input:{
        borderWidth:2,
        // width %  ใส่ฟันหนู
        width:"80%",  
        borderRadius:15,
        marginBottom: 20
    },

    button:{
        backgroundColor:"#142d4c",
        padding:10,
        marginTop:10,
        borderRadius:10,
        width:100,
        textAlign:"center",
        marginBottom:10,
        color:"white"
    },

    ans:{
        backgroundColor:"#385170",
        padding: 20,
        margin: 30,
        width: 250,
        color:"white",
        textAlign:"center",
        fontSize: 20,
        fontFamily:"serif"
    },

    font:{
        fontFamily:"serif",
        fontWeight:700,
        fontSize:25
    }
})
