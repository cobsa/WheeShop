
# WheeShop 

Built with React, Redux and Sass on top of [create-react-app](https://github.com/facebook/create-react-app). Tested with desktop version of Firefox and Chrome, and with Huawei P9 (1080 x 1920 px), but should look okay for other browsers&devices. Redux components and helpers are tested, storybook is used to visually examine the ui components.

## Limitations/TODOS

1. Server response are trusted and not checked for data correctness
2. Response to user actions (animations/transitions) are minimal
3. Site metadata, favicon etc are not customized


## Setting up the development build

1. `npm install`
2. `npm start`
3. and optionally  `npm run storybook`


## Setting up the production build

1. Create .env file in root of the project
2. Define REACT_APP_PROD_BACKEND variable in .env file as the ip/domain of the backend
3. `npm  run build`
