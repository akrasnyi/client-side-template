# Client-side architecture

## Front-end part of this add-on is SPA, written in:
* React, with use of ES6
* MobX with its decorators for state management
* Webpack and Babel to transpile all that into plain JavaScript code.
* Code style is primarily based on Standard convention

Each page is, in fact, a React single page application (even the landing ones). In root folder (`client/`) each of them has a React template, which is its content. And `template/` folder contains HTML wrapper for each of those. Then, by means of Webpack, all the JS logic gets bundled to a single plain JS file and gets appended to a concrete HTML template-wrapper. Finally, as a static page, all of them are being distributed by a server.

## Client-side consists of 2 main pages
Static landing page:
* Index page

And root app component
* Project config page - `App.jsx` is entry point to settings from JIRA

Last two reuse many components and only slightly differ.

## Components
`App.jsx` is a root level component, which initializes appState as an observable object by MobX means. On it's componentWillMount we do several calls to JIRA service, to populate application state.

## Services
* Fetch ( `services/api/Addon` )- for calls to our back-end, fetching information about subscriptions and connections, and also to update and delete subscriptions settings.

Services layer uses JWT token, received from queryString, to authorize on the back-end with OAuth 2.0 and create a session.

Also, AP service catches possible errors on data retrieval and notifies a user with corresponding error message.

## Styling
For grid and overall styling AUI 6.0.0 is used with all it's styling classes. And all addon specific style rules are present at ( `app.css` ). We decided not to divide styles for each component as that could be an overkill for this type of project.
