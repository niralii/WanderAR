import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { SearchBar } from 'react-native-elements';

function Country({ name, code, navigation}) {
  return (
    <TouchableOpacity style={styles.countryContainer} onPress={()=>pressHandler(navigation, code)}>
      <View style={styles.flagContainer}>
        <Image source={{ uri: 'https://flagpedia.net/data/flags/normal/' + code + '.png' }} style={styles.flagImage}></Image>
      </View>
      <View style={styles.countryNameContainer}>
        <Text style={styles.countryName}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

function pressHandler(navigation, code) {
  navigation.navigate('Sites', {countryCode:code})
}

export default class Countries extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
      search: '',
    };
    this.arrayholder = [];
  }
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then((responseJson) => {
        this.setState(
          {
            loading: false,
            dataSource: responseJson
          },
          () => {
            this.arrayholder = responseJson;
          }
        )
      })
      .catch(error => console.log(error)) //to catch the errors if any
  }

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function (item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });
  }

  itemSeparator = () => {
    return (
      <View style={{
        width: "100%",
        backgroundColor: "#37373C",
        height: 20
      }}>
      </View>
    )
  }

  render() {
    const { search } = this.state;

    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#1592e6" />
        </View>
      )
    }

    return (

      <View style={styles.container}>
        <SearchBar
          searchIcon={{ size: 24 }}
          placeholder="Type Here..."
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          value={this.state.search}
        />
        <View style={styles.countryListContainer}>
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={({ item }) => <Country name={item.name} code={item.alpha2Code.toLowerCase()} navigation={this.props.navigation}></Country>}
            keyExtractor={item => item.numericCode}
            enableEmptySections={true}
          ></FlatList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countryListContainer: {
    flex: 1,
    backgroundColor: "#37373C",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  countryContainer: {
    flex: 1,
    height: 111,
    backgroundColor: "#cfcfcf",
    borderRadius: 20,
    flexDirection: "row",
  },
  flagContainer: {
    width: 145,
    height: 111,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 3,
      height: 0
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  flagImage: {
    width: "100%",
    height: 111,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  countryNameContainer: {
    paddingStart: 14,
    paddingEnd: 5,
    justifyContent: "center",
    flex: 1,
  },
  countryName: {
    fontSize: 21,
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#1f1f24",
    flexWrap: "wrap",
  }
})