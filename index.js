
import { NativeModules } from 'react-native';

const { RNReactNativePagePreviewer } = NativeModules;

var RNReactNativePagePreviewer = {
  getTitle: function() {
    console.log("foo title");
  },
};

export default RNReactNativePagePreviewer;
