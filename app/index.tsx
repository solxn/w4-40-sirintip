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
            <Text>Fruit : {fruit} </Text>
            {/* รับข้อความ */}
            <TextInput style={TheStyle.input} value={text} onChangeText={setText}/>
            {/* save */}
            <TouchableOpacity onPress={saveFruit}>
                <Text>บันทึก</Text>
            </TouchableOpacity>
            {/* delete */}
            <TouchableOpacity onPress={removeFruit}>
                <Text>ลบ</Text>
            </TouchableOpacity>

        </View>
    )
}

const TheStyle = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },

    input:{
        borderWidth:1,
        // width %  ใส่ฟันหนู
        width:"80%"  
    },

    button:{
        
    }

})  