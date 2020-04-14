import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';
import { Icon } from 'react-native-elements';

export default class App extends React.Component {


    countries={
        'AF' : 'Afghanistan',
        'AR' : 'Argentina',
        'AU' : 'Australia',
        'AT' : 'Austria',
        'BH' : 'Bahrain',
        'BD' : 'Bangladesh',
        'BE' : 'Belgium',
        'BT' : 'Bhutan',
        'BR' : 'Brazil',
        'CA' : 'Canada',
        'CN' : 'China',
        'CU' : 'Cuba',
        'EG' : 'Egypt',
        'FI' : 'Finland',
        'FR' : 'France',
        'DE' : 'Germany',
        'GR' : 'Greece',
        'IN' : 'India',
        'ID' : 'Indonesia',
        'IR' : 'Iran',
        'IQ' : 'Iraq',
        'IL' : 'Israel',
        'IT' : 'Italy',
        'JP' : 'Japan',
        'NP' : 'Nepal',
        'NL' : 'Netherlands',
        'NZ' : 'NewZealand',
        'PK' : 'Pakistan',
        'PT' : 'Portugal',
        'QA' : 'Qatar',
        'SA' : 'SaudiArabia',
        'ZA' : 'SouthAfrica',
        'ES' : 'Spain',
        'LK' : 'SriLanka',
      }
      
    
      countrykeys=[
        'AF' ,                                                          
        'AR' ,                                                        
        'AU' ,                                                        
        'AT' ,                                                      
        'BH' ,                                                      
        'BD' ,                                                         
        'BE' ,                                                      
        'BT' ,                                                     
        'BR' ,                                                     
        'CA' ,                                                     
        'CN' ,                                                    
        'CU' ,                                                   
        'EG' ,                                                          
        'FI' ,                                                      
        'FR' ,                                                     
        'DE' ,                                                      
        'GR' ,                                                     
        'IN' ,                                                    
        'ID' ,                                                        
        'IR' ,                                                   
        'IQ' ,                                                   
        'IL' ,                                                     
        'IT' ,                                                    
        'JP' ,                                                    
        'NP' ,                                                    
        'NL' ,                                                          
        'NZ' ,                                                         
        'PK' ,                                                       
        'PT' ,                                                       
        'QA' ,                                                                                                        
        'SA' ,                                                          
        'ZA' ,                                                          
        'ES' ,                                                    
        'LK' 
      ]

    constructor(props) {
        super(props);
        this.state = {
            number:0,
            livescounters: 6,
            lettersLeft: ['a', 'b', 'd'],
            countryletters: [],
            usedLetters: [],
            pressedletters: [],
            score: 0,
            countrycode: ""
        }

        this.init = this.init.bind(this);
        this.skip = this.skip.bind(this);
    }


    componentDidMount() {
        this.init();
    }

    init() {
        var code=this.countrykeys[this.state.number];
        var country = this.countries[code];
        console.log(country);
        country = country.toUpperCase();

        let lettersLeft2 = this.state.lettersLeft;
        while (lettersLeft2.length > 0) {
            lettersLeft2.pop();
        }

        lettersLeft2 = country.split('');
        let countryletters = country.split('');
        for (let index = 0; index < lettersLeft2.length; index++) {
            lettersLeft2[index] = [" "];
        }
        let usedLetters = this.state.usedLetters;

        while (usedLetters.length > 0) {
            usedLetters.pop();
        }
        this.setState({
            livescounters: 6,
            lettersLeft: lettersLeft2,
            countryletters: countryletters,
            usedLetters: usedLetters,
            countrycode: code,
            number:this.state.number + 1
        }, () => console.log('code' + this.state.countrycode));

    }

    renderhearts() {

        console.log(this.state.livescounters);


        if (this.state.livescounters == 0) {
            return (
                <View style={styles.redbox} >
                    <Icon
                        name='ios-heart-empty'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart-empty'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart-empty'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                </View>

            );
        } else if (this.state.livescounters == 1) {
            return (
                <View style={styles.redbox} >
                    <Icon
                        name='ios-heart-half'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart-empty'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart-empty'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                </View>

            );

        } else if (this.state.livescounters == 2) {
            return (
                <View style={styles.redbox} >
                    <Icon
                        name='ios-heart'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart-empty'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart-empty'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                </View>

            );

        } else if (this.state.livescounters == 3) {
            return (
                <View style={styles.redbox} >
                    <Icon
                        name='ios-heart'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart-half'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart-empty'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                </View>

            );

        } else if (this.state.livescounters == 4) {
            return (
                <View style={styles.redbox} >
                    <Icon
                        name='ios-heart'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart-empty'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                </View>

            );

        } else if (this.state.livescounters == 5) {
            return (
                <View style={styles.redbox} >
                    <Icon
                        name='ios-heart'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart-half'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                </View>

            );

        } else if (this.state.livescounters == 6) {
            return (
                <View style={styles.redbox} >
                    <Icon
                        name='ios-heart'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                    <Icon
                        name='ios-heart'
                        type='ionicon'
                        color='red'
                        size={40}
                    />
                </View>

            );

        }

    }

    skip() {
        console.log('ppppp');
        if (this.state.score <= 0) {
            this.setState({
                score: this.state.score
            });
        }
        else {
            this.setState({
                score: this.state.score - 1
            });
        }

        this.init();

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    {this.renderhearts()}
                    <View style={styles.bluebox} ><Text style={styles.difftext}>Easy</Text></View>
                    <View style={styles.blackbox} ><Image source={require('../assets/images/trophy.png')} style={styles.imagestyle} /><Text style={styles.difftext2}>{this.state.score}</Text></View>
                </View>
                <View style={styles.middle}>

                    <Image source={{ uri: 'http://www.geognos.com/api/en/countries/flag/' + this.state.countrycode + '.png' }}
                        style={styles.flagstyle}
                    />
                    <View style={styles.dashrow}>{this.renderDashes()}</View>
                    <TouchableHighlight onPress={this.skip} style={styles.skip} ><Text style={styles.letterskip} >SKIP</Text></TouchableHighlight>
                </View>
                {this.renderKeyBoard()}
            </View>

        );


    }

    onKeyPress(letter) {
        let countryletters = this.state.countryletters;
        let usedLetters = this.state.usedLetters;
        let lettersLeft = this.state.lettersLeft;
        let score = this.state.score;
        usedLetters.push(letter);
        let lives = this.state.livescounters;
        if (countryletters.indexOf(letter) == -1) {

            this.setState({
                livescounters: this.state.livescounters - 1
            });
            if (lives == 1) {
                this.setState({
                    score: 0
                });
                Alert.alert(
                    'Game Over!',
                    'Press OK to exit.',
                    [
                        { text: 'OK', onPress: () => this.props.navigation.navigate('Home') },
                    ],
                    { cancelable: false }
                )
            }




        }
        else {
            for (let i = 0; i < countryletters.length; i++) {
                if (countryletters[i] == letter) {
                    lettersLeft[i] = letter;
                    if (JSON.stringify(countryletters) == JSON.stringify(lettersLeft)) {
                        score = score + 1;
                        this.setState({
                            score: score
                        });
                        Alert.alert(
                            'Correct Guess',
                            'View next country',
                            [
                                { text: 'Next', onPress: () => this.init() },
                            ],
                            { cancelable: false }
                        )
                    }
                }
            }
        }
        console.log(countryletters);
        console.log("used : " + usedLetters);
        console.log("left : " + lettersLeft);

        this.setState({
            usedLetters: usedLetters,
            lettersLeft: lettersLeft,
        });


    }



    renderKeyBoard() {
        const keysRows = [
            ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
            ["  ", "A", "S", "D", "F", "G", "H", "J", "K", "L", "  "],
            [" ", "Z", "X", "C", "V", "B", "N", "M", " "]]
        return (
            <View style={styles.keyboard}>
                {keysRows.map((keys, rowIndex) => {
                    return (
                        <View key={rowIndex} style={styles.keyboardRow}>
                            {keys.map((letter, index) => {
                                if (letter == " ") {
                                    return <Text key={index}>                     </Text>
                                } else if (letter == "  ") {
                                    return <Text key={index}>          </Text>
                                } else if (this.state.usedLetters.indexOf(letter) != -1) {
                                    return <View style={styles.usedkeyItem} key={index}><Text key={index} style={styles.usedletter}>{letter}</Text></View>
                                } else {
                                    return <TouchableHighlight
                                        onPress={this.onKeyPress.bind(this, letter)} style={styles.keyItem} key={index}><Text style={styles.letter}>{letter}</Text></TouchableHighlight>
                                }
                            })}
                        </View>
                    )
                })}
            </View>
        )
    }


    renderDashes() {
        return (
            <View style={styles.dashes}>
                {this.state.lettersLeft.map((letter, index) => {
                    if (letter == "*") {
                        return (<View style={styles.dashItemContainer} key={index}><Text style={styles.dashBlankItem}>  </Text></View>)
                    } else {
                        return (<View style={styles.dashItemContainer} key={index}><Text style={styles.dashItem}>{letter}</Text></View>)
                    }
                })}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#91dcf5',
    },
    container1: {
        flexDirection: 'row',
        backgroundColor: '#91dcf5',
        paddingTop: 40
    },
    redbox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bluebox: {
        flex: 1,
        marginHorizontal: 15,
        borderRadius: 10,
        backgroundColor: "#f7f7f7",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#707070"
    },

    imagestyle: {
        height: 30,
        width: 30,
        margin: 10,
    },

    flagstyle: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#1f1f24",
        width: 160,
        height: 80


    },
    difftext: {
        fontSize: 32,
        fontWeight: "bold",
        fontStyle: "italic",
        textAlign: "center",

    },
    difftext2: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        fontStyle: 'italic',
        textAlign: "center",

    },
    blackbox: {
        flex: 1,
        flexDirection: 'row',
        marginEnd: 15,
        borderRadius: 10,
        backgroundColor: "#37373c",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#8a8a8a",
        alignItems: 'center'

    },

    middle: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center"
    },

    keyboard: {
        flex: 2,
        backgroundColor: '#dcdcdc',
        justifyContent: 'center',
        flexDirection: "column"
    },
    keyboardRow: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 0.5,
        marginHorizontal: 2,
        paddingVertical: 10,
        borderRadius: 4,
        backgroundColor: 'white',
    },

    letter: {
        fontSize: 20,
        color: 'black',
    },

    usedkeyItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 0.5,
        marginHorizontal: 2,
        paddingVertical: 10,
        borderRadius: 4,
        backgroundColor: 'gray',
    },

    usedletter: {
        fontSize: 15,
        color: 'black',
    },
    skip: {
        marginTop: 60,
        alignItems: "center",
        justifyContent: "center",
        width: 250,
        height: 52,
        borderRadius: 10,
        backgroundColor: "#ffcd00",
        shadowColor: "rgba(0, 0, 0, 0.16)",
        shadowOffset: {
            width: 10,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1


    },
    letterskip: {
        fontSize: 25,
        fontWeight: "bold",
    },
    dashrow: {
        flexDirection: "row"
    },
    dashes: {
        marginTop: 60,
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        alignSelf: "auto",
        justifyContent: 'center',
        flexWrap: "wrap"
    },
    dashItemContainer: {
        flex: 0,
        padding: 5,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "black",
    },
    dashItem: {
        width: 40,
        color: 'black',
        fontSize: 30,
        fontWeight: "bold",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
    },
    dashBlankItem: {
        width: 20,
        fontSize: 20,
    },

})
