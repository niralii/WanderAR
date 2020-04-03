import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { globalStyles } from '../styles/global'
import { FlatList } from 'react-native-gesture-handler'

const CRITERION = [
  {
    id: "1",
    number: "(i)",
    content: "To represent a masterpiece of human creative genius"
  },
  {
    id: "2",
    number: "(ii)",
    content: "To exhibit an important interchange of human values, over a span of time or within a cultural area of the world, on developments in architecture or technology, monumental arts, town-planning or landscape design"
  },
  {
    id: "3",
    number: "(iii)",
    content: "To bear a unique or at least exceptional testimony to a cultural tradition or to a civilization which is living or which has disappeared"
  },
  {
    id: "4",
    number: "(iv)",
    content: "To be an outstanding example of a type of building, architectural or technological ensemble or landscape which illustrates (a) significant stage(s) in human history"
  },
  {
    id: "5",
    number: "(v)",
    content: "To be an outstanding example of a traditional human settlement, land-use, or sea-use which is representative of a culture (or cultures), or human interaction with the environment especially when it has become vulnerable under the impact of irreversible change"
  },
  {
    id: "6",
    number: "(vi)",
    content: "To be directly or tangibly associated with events or living traditions, with ideas, or with beliefs, with artistic and literary works of outstanding universal significance."
  },
  {
    id: "7",
    number: "(vii)",
    content: "To contain superlative natural phenomena or areas of exceptional natural beauty and aesthetic importance"
  },
  {
    id: "8",
    number: "(viii)",
    content: "To be outstanding examples representing major stages of earth's history, including the record of life, significant on-going geological processes in the development of landforms, or significant geomorphic or physiographic features"
  },
  {
    id: "9",
    number: "(ix)",
    content: "To be outstanding examples representing significant on-going ecological and biological processes in the evolution and development of terrestrial, fresh water, coastal and marine ecosystems and communities of plants and animals"
  },
  {
    id: "10",
    number: "(x)",
    content: "To contain the most important and significant natural habitats for in-situ conservation of biological diversity, including those containing threatened species of outstanding universal value from the point of view of science or conservation"
  },
]

function Card({ id, content }) {
  return (
    <View style={styles.criterionCard}>
      <View style={styles.criterionCardNumber}>
        <Text style={styles.criterionCardNumberText}>
          {id}
        </Text>
      </View>
      <View style={styles.criterionCardBody}>
        <Text style={styles.criterionCardBodyText}>
          {content}
        </Text>
      </View>
    </View>
  )
}

function Info() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.types}>
        <View style={styles.typesHeader}>
          <Text style={globalStyles.boxHeaderText}>
            Types
          </Text>
        </View>
        <View style={styles.typesBody}>
          <View style={styles.typesCard1}>
            <View style={styles.typesCardHeader}>
              <Image source={require('../assets/images/culturalIcon.png')} style={styles.headerIcon}></Image>
              <Text style={styles.typesCardTitle}>Cultural</Text>
            </View>
            <View style={styles.typesCardBody}>
              <Image source={require('../assets/images/museumIcon.png')} style={styles.bodyIcon}></Image>
            </View>
          </View>
          <View style={styles.typesCard2}>
            <View style={styles.typesCardHeader}>
              <Image source={require('../assets/images/naturalIcon.png')} style={styles.headerIcon}></Image>
              <Text style={styles.typesCardTitle}>Natural</Text>
            </View>
            <View style={styles.typesCardBody}>
              <Image source={require('../assets/images/treeIcon.png')} style={styles.bodyIcon}></Image>
            </View>
          </View>
          <View style={styles.typesCard3}>
            <View style={styles.typesCardHeader}>
              <Image source={require('../assets/images/mixedIcon.png')} style={styles.headerIcon}></Image>
              <Text style={styles.typesCardTitle}>Mixed</Text>
            </View>
            <View style={styles.typesCardBody}>
              <Image source={require('../assets/images/shuffleIcon.png')} style={styles.bodyIcon}></Image>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.criterion}>
        <View style={styles.typesHeader}>
          <Text style={globalStyles.boxHeaderText}>
            Criterion
          </Text>
        </View>
        <View style={styles.criterionBody}>
          <FlatList
            data={CRITERION}
            renderItem={({ item }) => <Card id={item.number} content={item.content}></Card>}
            keyExtractor={item => item.id}
          ></FlatList>
        </View>
      </View>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({
  criterion: {

  },
  criterionBody: {
    backgroundColor: "#cfcfcf",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#cfcfcf",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "space-around",
    paddingHorizontal: 34,
    alignItems: "center",
    width: 323,
    height: 448,
  },
  criterionCard: {
    width: 255,
    height: 126,
    backgroundColor: "#f7f7f7",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    flexDirection: "row",
    marginVertical: 15
  },
  criterionCardNumber: {
    width: 37,
    height: 126,
    backgroundColor: "#1592e6",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 2,
      height: 0
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  criterionCardNumberText: {
    height: 29,
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 32,
    letterSpacing: 0,
    color: "#f7f7f7"
  },
  criterionCardBody: {
    justifyContent: "center",
    alignItems: "center",
    marginStart: 17,
    marginEnd: 15,
    width: 186,
  },
  criterionCardBodyText: {
    fontFamily: "HelveticaNeue",
    fontSize: 11,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 12,
    letterSpacing: 0,
    textAlign: "center",
    color: "#707070"
  },
  types: {
    width: 323,
    height: 212,
    backgroundColor: "white",
  },
  typesHeader: {
    width: 323,
    height: 51,
    backgroundColor: "black",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  typesBody: {
    width: 323,
    height: 161,
    backgroundColor: "#cfcfcf",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 19,
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#cfcfcf",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  typesCard1: {
    width: 85,
    height: 108,
    backgroundColor: "#ff9935",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  typesCard2: {
    width: 85,
    height: 108,
    backgroundColor: "#34c759",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  typesCard3: {
    width: 85,
    height: 108,
    backgroundColor: "#ffcd00",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  typesCardHeader: {
    height: 34,
    backgroundColor: "#f7f7f7",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 3,
  },
  headerIcon: {
    width: 14,
    height: 14,
  },
  typesCardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "center",
    marginStart: 3
  },
  typesCardBody: {
    height: 74,
    justifyContent: "center",
    alignItems: "center"
  },
  bodyIcon: {
    width: 51,
    height: 51
  },
  criterion: {
    marginTop: 37
  }
})
