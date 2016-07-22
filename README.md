
# react-native-react-native-page-previewer

## Getting started

`$ npm install react-native-react-native-page-previewer --save`

### Mostly automatic installation

`$ react-native link react-native-react-native-page-previewer`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-react-native-page-previewer` and add `RNReactNativePagePreviewer.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativePagePreviewer.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativePagePreviewerPackage;` to the imports at the top of the file
  - Add `new RNReactNativePagePreviewerPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-react-native-page-previewer'
  	project(':react-native-react-native-page-previewer').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-page-previewer/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-react-native-page-previewer')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNReactNativePagePreviewer.sln` in `node_modules/react-native-react-native-page-previewer/windows/RNReactNativePagePreviewer.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Cl.Json.RNReactNativePagePreviewer;` to the usings at the top of the file
  - Add `new RNReactNativePagePreviewerPackage()` to the `List<IReactPackage>` returned by the `Packages` method
      

## Usage
```javascript
import RNReactNativePagePreviewer from 'react-native-react-native-page-previewer';

// TODO: What do with the module?
RNReactNativePagePreviewer;
```
  