import React, {Component} from 'react'
import {Image, ScrollView, Text, TextInput, TouchableHighlight, View} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Icon_search from 'react-native-vector-icons/FontAwesome'

export default class Home extends Component{
    render(){
        return(
            <ScrollView>
                <View style={{ flex:1 }}>
                {/* PENCARIAN */}
                <View style={{ backgroundColor:"white", marginHorizontal:16, flexDirection:"row", marginTop:7}}>
                    <TextInput style={{ height:40, borderRadius:50, borderWidth:2, flex:1, paddingLeft:40, fontSize:18, paddingRight:15}}/>
                    <Icon name='ticket' size={35} style={{ marginLeft:10, marginTop:3 }}/>
                </View>
                <View style={{ position:"absolute", paddingTop:10, paddingLeft:25 }}>
                    <Icon_search name="search" size={35} />
                </View>

                {/* KATEGORI PRODUK */}
                <View style={{ marginTop:15, marginHorizontal:16}}>
                    <View>
                        <Text style={{ fontSize:17, fontWeight:"bold" }}>Kategori</Text>
                    </View>
                    <View style={{ flexDirection:"row", flexWrap:"wrap", marginTop:10}}>
                        <View style={{ flexDirection:"row", justifyContent:"space-between", width:"100%", marginBottom:18 }}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDota')}>
                                <View>
                                    <View style={{ width:58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('./assets/category/ic-01-dota.png')} style={{ width:58, height:58}}/>
                                    </View>
                                    <Text style={{ fontSize:11, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>Dota 2</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductCsgo')}>
                                <View>
                                    <View style={{ width:58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('./assets/category/ic-02-csgo.png')} style={{ width:58, height:58}}/>
                                    </View>
                                    <Text style={{ fontSize:11, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>CS Go</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductPubg')}>
                                <View>
                                    <View style={{ width:58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('./assets/category/ic-03-pubg.png')} style={{ width:58, height:58}}/>
                                    </View>
                                    <Text style={{ fontSize:11, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>PUBG</Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductGtav')}>
                                <View>
                                    <View style={{ width:58, height:58, borderWidth:1, borderColor:"#EFEFEF", borderRadius:8, justifyContent:"center", alignItems:"center", backgroundColor:"white"}}>
                                        <Image source={require('./assets/category/ic-04-gtav.png')} style={{ width:58, height:58}}/>
                                    </View>
                                    <Text style={{ fontSize:11, fontWeight:"bold", alignSelf:"center", marginTop:6 }}>GTA V</Text>
                                </View>
                            </TouchableHighlight>                            
                        </View>

                    </View>
                </View>

                <View style={{ marginTop: 20, marginHorizontal:16 }}>
                    <View style={{ flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{ fontSize: 17, fontWeight:"bold"}}>Baju</Text>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductShirt')}>
                            <Text style={{ fontSize: 17, color:"#6dab3c"}}>Semua >></Text>
                        </TouchableHighlight>
                    </View>

                    <ScrollView horizontal={true} style={{ flexDirection:"row", marginTop:10}}>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                            <View style={{
                                width: 170,
                                height: 200,
                                borderWidth: 1,
                                borderColor: "#EFEFEF",
                                borderRadius: 10,
                                backgroundColor: "white",
                                marginRight: 15
                            }}>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 120,
                                    width: "100%"
                                }}>
                                    <Image source={require('./assets/product/dota-shirt.png')}
                                           style={{width: 120, height: 120}}/>
                                </View>
                                <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>BAJU DOTA
                                    2</Text>
                                <Text style={{
                                    paddingLeft: 10,
                                    fontSize: 14,
                                    marginTop: 5,
                                    height: 25,
                                    width: "100%",
                                    textAlign: "right",
                                    paddingRight: 20,
                                    color: "#f4a51c"
                                }}>Rp. 135.000</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                            <View style={{
                                width: 170,
                                height: 200,
                                borderWidth: 1,
                                borderColor: "#EFEFEF",
                                borderRadius: 10,
                                backgroundColor: "white",
                                marginRight: 15
                            }}>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 120,
                                    width: "100%"
                                }}>
                                    <Image source={require('./assets/product/csgo-shirt.png')}
                                           style={{width: 120, height: 120}}/>
                                </View>
                                <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>BAJU CS
                                    GO</Text>
                                <Text style={{
                                    paddingLeft: 10,
                                    fontSize: 14,
                                    marginTop: 5,
                                    height: 25,
                                    width: "100%",
                                    textAlign: "right",
                                    paddingRight: 20,
                                    color: "#f4a51c"
                                }}>Rp. 128.000</Text>

                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                            <View style={{
                                width: 170,
                                height: 200,
                                borderWidth: 1,
                                borderColor: "#EFEFEF",
                                borderRadius: 10,
                                backgroundColor: "white",
                                marginRight: 15
                            }}>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 120,
                                    width: "100%"
                                }}>
                                    <Image source={require('./assets/product/pubg-shirt.png')}
                                           style={{width: 120, height: 120}}/>
                                </View>
                                <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>BAJU
                                    PUBG</Text>
                                <Text style={{
                                    paddingLeft: 10,
                                    fontSize: 14,
                                    marginTop: 5,
                                    height: 25,
                                    width: "100%",
                                    textAlign: "right",
                                    paddingRight: 20,
                                    color: "#f4a51c"
                                }}>Rp. 115.000</Text>

                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                            <View style={{
                                width: 170,
                                height: 200,
                                borderWidth: 1,
                                borderColor: "#EFEFEF",
                                borderRadius: 10,
                                backgroundColor: "white",
                                marginRight: 15
                            }}>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 120,
                                    width: "100%"
                                }}>
                                    <Image source={require('./assets/product/gtav-shirt.png')}
                                           style={{width: 120, height: 120}}/>
                                </View>
                                <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>BAJU GTA
                                    V</Text>
                                <Text style={{
                                    paddingLeft: 10,
                                    fontSize: 14,
                                    marginTop: 5,
                                    height: 25,
                                    width: "100%",
                                    textAlign: "right",
                                    paddingRight: 20,
                                    color: "#f4a51c"
                                }}>Rp. 109.000</Text>

                            </View>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
                
                <View style={{ marginTop: 20, marginHorizontal:16 }}>
                    <View style={{ flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{ fontSize: 17, fontWeight:"bold"}}>Tas</Text>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductBag')}>
                            <Text style={{ fontSize: 17, color:"#6dab3c"}}>Semua >></Text>
                        </TouchableHighlight>
                    </View>

                    <ScrollView horizontal={true} style={{ flexDirection:"row", marginTop:10}}>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                            <View style={{
                                width: 170,
                                height: 200,
                                borderWidth: 1,
                                borderColor: "#EFEFEF",
                                borderRadius: 10,
                                backgroundColor: "white",
                                marginRight: 15
                            }}>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 120,
                                    width: "100%"
                                }}>
                                    <Image source={require('./assets/product/dota-bag.png')}
                                           style={{width: 120, height: 120}}/>
                                </View>
                                <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>TAS DOTA
                                    2</Text>
                                <Text style={{
                                    paddingLeft: 10,
                                    fontSize: 14,
                                    marginTop: 5,
                                    height: 25,
                                    width: "100%",
                                    textAlign: "right",
                                    paddingRight: 20,
                                    color: "#f4a51c"
                                }}>Rp. 135.000</Text>

                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                            <View style={{
                                width: 170,
                                height: 200,
                                borderWidth: 1,
                                borderColor: "#EFEFEF",
                                borderRadius: 10,
                                backgroundColor: "white",
                                marginRight: 15
                            }}>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 120,
                                    width: "100%"
                                }}>
                                    <Image source={require('./assets/product/csgo-bag.png')}
                                           style={{width: 120, height: 120}}/>
                                </View>
                                <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>TAS CS
                                    GO</Text>
                                <Text style={{
                                    paddingLeft: 10,
                                    fontSize: 14,
                                    marginTop: 5,
                                    height: 25,
                                    width: "100%",
                                    textAlign: "right",
                                    paddingRight: 20,
                                    color: "#f4a51c"
                                }}>Rp. 128.000</Text>

                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                            <View style={{
                                width: 170,
                                height: 200,
                                borderWidth: 1,
                                borderColor: "#EFEFEF",
                                borderRadius: 10,
                                backgroundColor: "white",
                                marginRight: 15
                            }}>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 120,
                                    width: "100%"
                                }}>
                                    <Image source={require('./assets/product/pubg-bag.png')}
                                           style={{width: 120, height: 120}}/>
                                </View>
                                <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>TAS
                                    PUBG</Text>
                                <Text style={{
                                    paddingLeft: 10,
                                    fontSize: 14,
                                    marginTop: 5,
                                    height: 25,
                                    width: "100%",
                                    textAlign: "right",
                                    paddingRight: 20,
                                    color: "#f4a51c"
                                }}>Rp. 115.000</Text>

                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                            <View style={{
                                width: 170,
                                height: 200,
                                borderWidth: 1,
                                borderColor: "#EFEFEF",
                                borderRadius: 10,
                                backgroundColor: "white",
                                marginRight: 15
                            }}>
                                <View style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 120,
                                    width: "100%"
                                }}>
                                    <Image source={require('./assets/product/gtav-bag.png')}
                                           style={{width: 120, height: 120}}/>
                                </View>
                                <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>TAS GTA
                                    V</Text>
                                <Text style={{
                                    paddingLeft: 10,
                                    fontSize: 14,
                                    marginTop: 5,
                                    height: 25,
                                    width: "100%",
                                    textAlign: "right",
                                    paddingRight: 20,
                                    color: "#f4a51c"
                                }}>Rp. 109.000</Text>

                            </View>
                        </TouchableHighlight>

                    </ScrollView>
                </View>

                    <View style={{ marginTop: 20, marginHorizontal:16 }}>
                        <View style={{ flexDirection:"row", justifyContent:"space-between"}}>
                            <Text style={{ fontSize: 17, fontWeight:"bold"}}>Gelas</Text>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductGlass')}>
                                <Text style={{ fontSize: 17, color:"#6dab3c"}}>Semua >></Text>
                            </TouchableHighlight>
                        </View>

                        <ScrollView horizontal={true} style={{ flexDirection:"row", marginTop:10}}>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                                <View style={{
                                    width: 170,
                                    height: 200,
                                    borderWidth: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    marginRight: 15
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 120,
                                        width: "100%"
                                    }}>
                                        <Image source={require('./assets/product/dota-glass.png')}
                                               style={{width: 120, height: 120}}/>
                                    </View>
                                    <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>Gelas DOTA
                                        2</Text>
                                    <Text style={{
                                        paddingLeft: 10,
                                        fontSize: 14,
                                        marginTop: 5,
                                        height: 25,
                                        width: "100%",
                                        textAlign: "right",
                                        paddingRight: 20,
                                        color: "#f4a51c"
                                    }}>Rp. 135.000</Text>

                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                                <View style={{
                                    width: 170,
                                    height: 200,
                                    borderWidth: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    marginRight: 15
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 120,
                                        width: "100%"
                                    }}>
                                        <Image source={require('./assets/product/csgo-glass.png')}
                                               style={{width: 120, height: 120}}/>
                                    </View>
                                    <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>Gelas CS
                                        GO</Text>
                                    <Text style={{
                                        paddingLeft: 10,
                                        fontSize: 14,
                                        marginTop: 5,
                                        height: 25,
                                        width: "100%",
                                        textAlign: "right",
                                        paddingRight: 20,
                                        color: "#f4a51c"
                                    }}>Rp. 128.000</Text>

                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                                <View style={{
                                    width: 170,
                                    height: 200,
                                    borderWidth: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    marginRight: 15
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 120,
                                        width: "100%"
                                    }}>
                                        <Image source={require('./assets/product/pubg-glass.png')}
                                               style={{width: 120, height: 120}}/>
                                    </View>
                                    <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>Gelas
                                        PUBG</Text>
                                    <Text style={{
                                        paddingLeft: 10,
                                        fontSize: 14,
                                        marginTop: 5,
                                        height: 25,
                                        width: "100%",
                                        textAlign: "right",
                                        paddingRight: 20,
                                        color: "#f4a51c"
                                    }}>Rp. 115.000</Text>

                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                                <View style={{
                                    width: 170,
                                    height: 200,
                                    borderWidth: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    marginRight: 15
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 120,
                                        width: "100%"
                                    }}>
                                        <Image source={require('./assets/product/gtav-glass.png')}
                                               style={{width: 120, height: 120}}/>
                                    </View>
                                    <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>Gelas GTA
                                        V</Text>
                                    <Text style={{
                                        paddingLeft: 10,
                                        fontSize: 14,
                                        marginTop: 5,
                                        height: 25,
                                        width: "100%",
                                        textAlign: "right",
                                        paddingRight: 20,
                                        color: "#f4a51c"
                                    }}>Rp. 109.000</Text>

                                </View>
                            </TouchableHighlight>

                        </ScrollView>
                    </View>

                    <View style={{ marginTop: 20, marginHorizontal:16 }}>
                        <View style={{ flexDirection:"row", justifyContent:"space-between"}}>
                            <Text style={{ fontSize: 17, fontWeight:"bold"}}>Gelang</Text>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductBracelet')}>
                                <Text style={{ fontSize: 17, color:"#6dab3c"}}>Semua >></Text>
                            </TouchableHighlight>
                        </View>

                        <ScrollView horizontal={true} style={{ flexDirection:"row", marginTop:10}}>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                                <View style={{
                                    width: 170,
                                    height: 200,
                                    borderWidth: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    marginRight: 15
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 120,
                                        width: "100%"
                                    }}>
                                        <Image source={require('./assets/product/dota-bracelet.png')}
                                               style={{width: 120, height: 120}}/>
                                    </View>
                                    <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>GELANG DOTA
                                        2</Text>
                                    <Text style={{
                                        paddingLeft: 10,
                                        fontSize: 14,
                                        marginTop: 5,
                                        height: 25,
                                        width: "100%",
                                        textAlign: "right",
                                        paddingRight: 20,
                                        color: "#f4a51c"
                                    }}>Rp. 135.000</Text>

                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                                <View style={{
                                    width: 170,
                                    height: 200,
                                    borderWidth: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    marginRight: 15
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 120,
                                        width: "100%"
                                    }}>
                                        <Image source={require('./assets/product/csgo-bracelet.png')}
                                               style={{width: 120, height: 120}}/>
                                    </View>
                                    <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>GELANG CS
                                        GO</Text>
                                    <Text style={{
                                        paddingLeft: 10,
                                        fontSize: 14,
                                        marginTop: 5,
                                        height: 25,
                                        width: "100%",
                                        textAlign: "right",
                                        paddingRight: 20,
                                        color: "#f4a51c"
                                    }}>Rp. 128.000</Text>

                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                                <View style={{
                                    width: 170,
                                    height: 200,
                                    borderWidth: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    marginRight: 15
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 120,
                                        width: "100%"
                                    }}>
                                        <Image source={require('./assets/product/pubg-bracelet.png')}
                                               style={{width: 120, height: 120}}/>
                                    </View>
                                    <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>GELANG
                                        PUBG</Text>
                                    <Text style={{
                                        paddingLeft: 10,
                                        fontSize: 14,
                                        marginTop: 5,
                                        height: 25,
                                        width: "100%",
                                        textAlign: "right",
                                        paddingRight: 20,
                                        color: "#f4a51c"
                                    }}>Rp. 115.000</Text>

                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight onPress={() => this.props.navigation.navigate('ProductDetail')}>
                                <View style={{
                                    width: 170,
                                    height: 200,
                                    borderWidth: 1,
                                    borderColor: "#EFEFEF",
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    marginRight: 15
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 120,
                                        width: "100%"
                                    }}>
                                        <Image source={require('./assets/product/gtav-bracelet.png')}
                                               style={{width: 120, height: 120}}/>
                                    </View>
                                    <Text style={{paddingLeft: 10, fontSize: 10, marginTop: 5, flex: 1}}>GELANG GTA
                                        V</Text>
                                    <Text style={{
                                        paddingLeft: 10,
                                        fontSize: 14,
                                        marginTop: 5,
                                        height: 25,
                                        width: "100%",
                                        textAlign: "right",
                                        paddingRight: 20,
                                        color: "#f4a51c"
                                    }}>Rp. 109.000</Text>

                                </View>
                            </TouchableHighlight>

                        </ScrollView>
                    </View>
                
            </View>
            </ScrollView>
        )
    }
}