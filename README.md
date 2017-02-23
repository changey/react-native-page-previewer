
# react-native-page-previewer

## Getting started

`$ npm install react-native-page-previewer --save`

## Usage
```javascript
import preview from 'react-native-page-previewer';

preview({url:"http://www.google.com"}, function(err, data) {
    if(!err) {
        console.log(data);
    }
});
```

sample return

```
{ url: 'https://www.google.com',
  loadFailed: false,
  title: 'Google',
  description: 'Search the world\'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you\'re looking for.',
  contentType: 'text/html',
  mediaType: 'website',
  images: [ 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png' ],
  videos: undefined,
  audios: undefined }
```
## References
1. https://github.com/myspace/page-previewer
2. https://github.com/oyyd/cheerio-without-node-native
