import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button, Modal, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import * as Animatable from 'react-native-animatable';

class Reservation extends Component {

  constructor(props){
    super(props);
    this.state = {
      guests: 1,
      smoking: false,
      date: '',
      showModal: false
    }
  }

  static naviagtionOptions = {
    title: 'Reserve Table'
  }

  toggleModal() {
    this.setState({showModal: !this.state.showModal })
  }

  handleReservation() {
    console.log(JSON.stringify(this.state));
    Alert.alert(
      'Your Reservation OK?',
      'Number of Guests: ' + this.state.guests + '\nSmoking? ' + this.state.smoking + '\nDate and Time: ' + this.state.date,
      [
        {text: 'Cancel', onPress: () => this.resetForm(), style: 'cancel'},
        {text: 'OK', onPress: () => this.resetForm()},
      ],
      { cancelable: false }
    );
  }

  resetForm(){
    this.setState({
      guests: 1,
      smoking: false,
      date: ''
    })
  }

  render(){
    return(
      <ScrollView>
      <Animatable.View animation="zoomIn" duration={2000}>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Number of Guest</Text>
          <Picker
            style={styles.formItem}
            selectedValue={this.state.guests}
            onValueChange={(itemValue, itemIndex) => this.setState({ guests: itemValue })}
            >
            <Picker.Item label='1' value='1' />
            <Picker.Item label='2' value='2' />
            <Picker.Item label='3' value='3' />
            <Picker.Item label='4' value='4' />
            <Picker.Item label='5' value='5' />
            <Picker.Item label='6' value='6' />
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Smoking/Non-Smoking?</Text>
          <Switch
            style={styles.formItem}
            value={this.state.smoking}
            trackColor = '#512DA8'
            onValueChange = {(value) => this.setState({ smoking: value})}
            >
          </Switch>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date and Time</Text>
          <DatePicker
            style={{flex: 2, marginRight: 20}}
            date={this.state.date}
            format=''
            mode='datetime'
            placeholder='select date and time'
            minDate='2020-09-02'
            confirmBtnText='Confirm'
            customStyles={{
              dateIcon:{
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
            />
        </View>
        <View style={styles.formRow}>
          <Button
            title = 'Reserve'
            color = '#512DA8'
            onPress = {() =>  this.handleReservation() }

            accessibilityLabel = 'Learn more..'
            />
        </View>
        </Animatable.View>
        <Modal

          animationType={'slide'}
          transparent={false}
          visible={this.state.showModal}
          onDismiss={() => {this.toggleModal(); this.resetForm();}}
          onRequestClose={() =>{this.toggleModal(); this.resetForm();}}
        >
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>Your Reservation</Text>
              <Text style={styles.modalText}> Number of Guest: {this.state.guests}</Text>
              <Text style={styles.modalText}> Smoking: {this.state.smoking ? 'Yes':'No'}</Text>
              <Text style={styles.modalText}> Date & Time: {this.state.date}</Text>
              <Button
                onPress={() =>{this.toggleModal(); this.resetForm();}}
                title="Close"
                color="#512DA8"
                />
            </View>
        </Modal>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20
  },
  formLabel: {
    fontSize: 18,
    flex: 2
  },
  formItem: {
    flex: 1
  },
  modal: {
    justifyContent: 'center',
    margin: 20
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#512DA8',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20
  },
  modalText: {
    fontSize: 18,
    margin: 10
  }
})


export default Reservation;
