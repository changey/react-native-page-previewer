
import { NativeModules } from 'react-native';
var cheerio = require('cheerio-without-node-native');

// const { RNReactNativePagePreviewer } = NativeModules;

var RNReactNativePagePreviewer = {
  getTitle: function() {
    fetch("https://news.ycombinator.com", {method: "GET"})
      .then((response) => {
          console.log("foo response", "POST Response",
          "Response Body -> ")

          var html = response._bodyInit;
          var doc = cheerio.load(html);
          var title = getTitle(doc);
          console.log("foo title", title)
    })
    console.log("foo title");
  },
};

module.exports = RNReactNativePagePreviewer;
