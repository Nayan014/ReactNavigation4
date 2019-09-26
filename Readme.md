
# Topic
- Auth Management.
- Navigation between Pages.

# Plugin

- React Navigation (4.X)
    - $ yarn add react-navigation
    - $ yarn add react-native-gesture-handler react-native-screens@^1.0.0-alpha.23
        - Note: Issue with react-native-reanimated, we have skip it
    - $ npm install react-navigation-stack
        - (Need to install each manually)
    - $ yarn install
    - $ npm install
        - IOS
            - cd ios
            - pod install
            - cd ..
        - android/app/build.gradle
            - implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
            - implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'