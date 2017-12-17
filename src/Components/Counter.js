import React, {Component} from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";
import {connect} from "react-redux";
import {incrementAction, decrementAction, navigateToLogoutScreen} from "../Actions/actionCreator";
const mapStateToProps = state => ({
    counterCount: state.CounterReducer.counter,
    counterString: state.CounterReducer.counterString
});

const mapDispatchToProps = {
    incrementAction,
    decrementAction,
    navigateToLogoutScreen
};

class CounterView extends Component {
    navigate = () => {
        this.props.navigateToLogoutScreen();
    };

    render() {
        const {
            counterCount,
            incrementAction,
            decrementAction,
            counterString
        } = this.props;
        return (
            <View
                style={styles.contentStyle}
            >
                <Text>{counterCount}</Text>
                <Text>{counterString}</Text>
                <View style={{ height: 100, flexDirection: "row" }}>
                    <TouchableOpacity
                        onPress={() => incrementAction()}
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                    >
                        <Text
                            style={{ textDecorationLine: "underline", fontWeight: "600" }}
                        >
                            INCREMENT
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => decrementAction()}
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                    >
                        <Text
                            style={{ textDecorationLine: "underline", fontWeight: "600" }}
                        >
                            DECREMENT
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
            paddingVertical: 15,
            paddingHorizontal: 40,
            backgroundColor: "indigo"
          }}
                    onPress={this.navigate}
                >
                    <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                        Navigate to the last tab programmatically: "Logout"
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterView);

export default Counter;

const styles = StyleSheet.create({
    contentStyle: {
        flex: 1,
        backgroundColor: "yellowgreen",
        justifyContent: "center",
        alignItems: "center"
    }
});
