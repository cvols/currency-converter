import { StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import CurrencyList from '../screens/CurrencyList'
import Options from '../screens/Options'
import Themes from '../screens/Themes'

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null
        }
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: 'Options'
        }
    },
    Themes: {
        screen: Themes,
        navigationOptions: {
            headerTitle: 'Themes'
        }
    }
},
    {
        headerMode: 'screen' // navigation bar and header is continous with the screen so it's not jumpy/off 
    })

const CurrencyListStack = StackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title
        })
    }
})

export default StackNavigator({
    Home: {
        screen: HomeStack
    },
    CurrencyList: {
        screen: CurrencyListStack
    }
},
    {
        mode: 'modal',
        cardStyle: { paddingTop: StatusBar.currentHeight }, // android only
        headerMode: 'none'
    }
)