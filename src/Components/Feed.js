import React, {Component} from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";
import {
    incrementAction,
    decrementAction,
    navigateToLogoutScreen
} from "../Actions/actionCreator";
import {connect} from "react-redux";
const mapStateToProps = state => ({
    counterCount: state.CounterReducer.counter,
    counterString: state.CounterReducer.counterString
});

const mapDispatchToProps = {
    incrementAction,
    decrementAction,
    navigateToLogoutScreen
};

class FeedView extends Component {
    render() {
        const {
            counterCount,
            incrementAction,
            decrementAction,
            counterString
        } = this.props;
        return ( <View style={styles.contentStyle}>
            <Text>{'fadfsafsa'}</Text>
            <Text>{counterCount}</Text>
            <Text>{counterString}</Text>
        </View>)
    }
}

const Feed = connect(mapStateToProps, mapDispatchToProps)(FeedView);

export default Feed;

const styles = StyleSheet.create({
    contentStyle: {
        flex: 1,
        backgroundColor: "yellowgreen",
        justifyContent: "center",
        alignItems: "center"
    }
});