
# Topic
- Auth Management.
- Navigation between Pages.

# Plugin

- React Navigation (4.X)
    - $ yarn add react-navigation
    - $ yarn add react-native-reanimated react-native-gesture-handler react-native-screens@^1.0.0-alpha.23
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
        - Issue
            - issue with react-native-reanimated
                - One workaround for the time being if you're on RN 0.61, add back supportLibVersion = "28.0.0" to android/build.gradle under buildscript.ext.
                - https://github.com/kmagiera/react-native-reanimated/issues/280#issuecomment-535089550