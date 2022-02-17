import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addTasks, getUserInfo, getCompleteTasksCount, loggingOut, getIncompleteTasks, getCompleteTasks } from '../services';
import { Searchbar, IconButton } from 'react-native-paper';
//import { getAdditionalUserInfo } from '@firebase/auth';
import "firebase/firestore";
import { firebase } from '../config/firebaseConfig';
//import { doc, updateDoc } from "firebase/firestore";
require('firebase/auth')

const homeScreen = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);
    const [firstName, setFirstName] = useState([]);
    const currentUser = firebase.auth().currentUser;

    let list = []

    const addTask = () => {
        setTaskItems([...taskItems, task])
        setTask("")
        addTasks(task)
        fetchTasks()
    }

    const fetchTasks = async => {
        getCompleteTasks().then((data) => {
            list = data
            console.log(list);
            setTaskItems(list)
        })
    }

    const fetchUser = async => {
        getUserInfo().then((data) => {
            list = data
            console.log(list);
            setFirstName(list)
        })
    }

    useEffect(() => {
        fetchTasks()
        fetchUser()
        getCompleteTasks()
        getCompleteTasksCount()
    }, [])


    const handlePressTask = () => {
        if (!task) {
            alert('Please enter your task.');
        }
        else {
            addTasks(task)
            navigation.navigate('homeScreen');
            setTask('');
        };
    }
    const handlePressProfile = () => {
        navigation.navigate('Profile');
    }

    const handlePressComplete = (id) => {
        getIncompleteTasks(id);
        navigation.navigate('homeScreen');
    }

    return (
        <View style = {styles.container}>
            <View style={styles.container1}>
                <IconButton
                    icon="account"
                    size={50}
                    //color='gold'
                    onPress={handlePressProfile}
                />
                {
                    firstName.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text style={styles.username}>Hello {item.firstname}</Text>
                            </View>
                        )
                    })
                }

                <Searchbar style={styles.input}
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            
            <View style={styles.containerAddTask}>
                <View style={styles.InlineBtns}>
                    <TextInput
                        style={styles.inputTask}
                        placeholder="Enter your task"
                        autoCapitalize="none"
                        value={task}
                        onChangeText={(task) => setTask(task)}
                    />
                    <IconButton
                        style={styles.inputPlus}
                        icon="plus"
                        size={30}
                        onPress={handlePressTask}
                    />
                </View>
                <ScrollView >
                    {
                        taskItems.map((item, index) => {
                            return (
                                <View key={index} style={styles.inputViewTask}>
                                    {/* <TaskView text={item.task} status={'Complete'} /> */}
                                    <Text >  {item.task}</Text>
                                    <Text onPress={() => handlePressComplete(item.id)}>{item.status}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
               
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
     },
    container1: {
        //flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        height: 180,
        width:420,
    },
    containerAddTask: {
        //backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        margin: 5,
        height: 40,
        width: 240,
        borderColor: 'gold',
        borderRadius: 10,
        borderWidth: 2,
        paddingBottom: 10,
    },
    inputTask: {
        margin: 5,
        height: 40,
        width: 300,
        borderColor: 'gold',
        borderRadius: 10,
        borderWidth: 2,
        color: 'grey'
    },
    inputPlus: {
        margin: 5,
        height: 30,
        width: 40,
        borderColor: 'gold',
        borderRadius: 10,
        borderWidth: 2,
    },
    inputViewTask: {
        margin: 5,
        height: 50,
        width: 300,
        borderColor: 'gold',
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor:'gold'

    },
    BtnLogin: {
        flex: 1,
        padding: 10,
        margin: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        textAlign: 'center',
        height: 40,
        width: 150,
    },
    BtnSignup: {
        flex: 1,
        padding: 10,
        margin: 10,
        backgroundColor: 'lime',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'green',
        borderRadius: 10,
        borderWidth: 2,
        textAlign: 'center',
        height: 40,
        width: 90,
    },
    BtnGoogle: {
        flex: 1,
        padding: 10,
        margin: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        textAlign: 'center',
        height: 40,
        width: 240,
    },
    TxtColor: {
        color: 'white',
    },
    InlineBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TxtBoldWeight: {
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 30,
    },

    username: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 25,

    },
    usernameCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default homeScreen