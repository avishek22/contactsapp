import { loadOptions } from '@babel/core'
import React from 'react'
import { View, Text, SafeAreaView ,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../../components/common/Container'
import { SETTINGS } from '../../constants/routeNames'
import styles from './styles'

const SideMenu = ({navigation}) => {
    const menuItems=[
        {icon:<Text>T</Text>,name:'Settings',onPress:()=>{
            navigation.navigate(SETTINGS)
        }},
        {icon:<Text>L</Text>,name:'Logout'},
    ]
    return (<SafeAreaView>
        <Container>
        <Image height={70} width={70} source={require('../../assets/images/Logo.png')} style={styles.logo} ></Image>
        <View style={{paddingHorizontal:70}}>
            {menuItems.map(({name,icon,onPress})=><TouchableOpacity onPress={onPress} key={name} style={styles.item}>
                {icon}
                <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>)}
        </View>
        </Container>
    </SafeAreaView>
        
    )
}

export default SideMenu