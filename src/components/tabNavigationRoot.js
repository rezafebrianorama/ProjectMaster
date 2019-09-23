import React, { Component } from "react";
import {
  View,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";

import GlobalStyle from "../style/globalStyle";

class CustomTabs extends Component {
  render() {
    const focus = this.props.navigation.state.index;
    return (
      <View
        style={{
          borderTopWidth: 0.3,
          borderColor: "grey"
        }}
      >
        <Footer>
          <FooterTab
            style={{
              backgroundColor: "#f5f5f5"
            }}
          >
            <Button
              vertical
              onPress={() => this.props.navigation.navigate("Home")}
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <Icon
                style={
                  focus == 0
                    ? { color: GlobalStyle.mainColor }
                    : { color: "gray" }
                }
                name="home"
              />
              <View>
                <Text
                  style={
                    focus == 0
                      ? {
                          color: GlobalStyle.mainColor,
                          fontFamily: GlobalStyle.fontRegular,
                          fontSize: 12
                        }
                      : {
                          color: "gray",
                          fontFamily: GlobalStyle.fontRegular,
                          fontSize: 12
                        }
                  }
                >
                  Home
                </Text>
              </View>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate("Tools")}
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <Icon
                style={
                  focus == 1
                    ? { color: GlobalStyle.mainColor }
                    : { color: "gray" }
                }
                name="cash"
              />
              <View>
                <Text
                  style={
                    focus == 1
                      ? {
                          color: GlobalStyle.mainColor,
                          fontFamily: GlobalStyle.fontRegular,
                          fontSize: 12
                        }
                      : {
                          color: "gray",
                          fontFamily: GlobalStyle.fontRegular,
                          fontSize: 12
                        }
                  }
                >
                  Settings
                </Text>
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

export default (CustomTabs);
