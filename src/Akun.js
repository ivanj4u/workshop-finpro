import React, {Component} from 'react'
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native'

export default class NestedAkun extends Component{
    static navigationOptions = {
        title: 'Data Diri',
      };
    render(){
        return(
            <ScrollView style={{flex:1}}>
                <Image source={require('./assets/ic_user.png')} style={{width: 200, height: 200, alignSelf:"center", marginTop:10, borderRadius:60, marginBottom:10}} />
                
                <View style={{ marginHorizontal : 20, marginTop:10}}>
                    <View style={styles.marginContent}>
                        <Text style={styles.judulText}>Nama</Text>
                        <Text style={styles.isiText}>Ivan Aribanilia</Text>
                    </View>
                    <View style={styles.marginContent}>
                        <Text style={styles.judulText}>Jenis Kelamin</Text>
                        <Text style={styles.isiText}>Pria</Text>
                    </View>
                    <View style={styles.marginContent}>
                        <Text style={styles.judulText}>Tanggal Lahir</Text>
                        <Text style={styles.isiText}>28 Agustus 1989</Text>
                    </View>
                    <View style={styles.marginContent}>
                        <Text style={styles.judulText}>Email</Text>
                        <Text style={styles.isiText}>ivan.aribanilia@gmail.com</Text>
                    </View>
                    <View style={styles.marginContent}>
                        <Text style={styles.judulText}>Nomor Ponsel</Text>
                        <Text style={styles.isiText}>0852 5410 6777</Text>
                    </View>
                    <View style={styles.marginContent}>
                        <Text style={styles.judulText}>Alamat</Text>
                        <Text style={styles.isiText}>JL. Kampung Rawa Geni No. 88, Depok</Text>
                        <Text style={styles.isiText}>Kode Pos. 16439</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    marginContent:{
        marginTop:5, 
        marginBottom:5, 
        borderBottomWidth:1
    },
    judulText:{
        fontSize:18, 
        marginBottom:5
    },
    isiText:{fontSize:22, marginBottom:5, paddingLeft:20}
  })