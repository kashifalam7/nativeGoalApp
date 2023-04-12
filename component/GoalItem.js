import { StyleSheet } from "react-native";

function GoalItem (props) {
return (
    <View style={styles.goalsContainer}>
    {courseGoals.map((goal)=>
          <View style = {styles.goalItem} key={goal}>
      <Text style = {styles.goalText}>{goal}</Text>
     </View>
    )
  }
  </View>
    
);
}

const styles = StyleSheet.create({
    TextInput:{
        borderWidth:1,
        borderColor: 'grey',
        width:'70%',
        marginRight: 8,
        padding:8,
    
      },
      goalsContainer: {
        flex:45,
        marginTop:20,
      },
})
export default GoalItem
