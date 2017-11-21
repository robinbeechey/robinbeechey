# Prismic / React / Firebase Starter

## Includes sitemaps, some open graph stuff, Prismic Custom Types, and a flexible templating system.

This starter will help you get setup with Prismic and React. 

Webpack is setup so you can use a bunch of es2015 stuff, and it supports Sass, to make styling faster. It's built on redux and includes react-router.

This project is also setup to make it easy to deploy to Firebase, including a single Firebase Cloud Function that will generate a sitemap.xml file for you.

*NOTE:* For the cloud function to work properly, you will need to be on a paid plan with Firebase, because only Google services are reachable from a function on the free plan (i.e. you can't make calls to Prismic without a paid Firebase plan). That being said, if you use he Blaze plan, you get 2 million function calls for free every month.

### Installation

Clone this repo and run:

`npm install && cd functions && npm install && cd ..`

That will install dependencies in the root project and the functions (which are useful if you want to deploy to Firebase and have a sitemap.xml available)

To setup the Prismic types that I setup for this starter, you can take a look [here](./prismic_types). Each JSON file corresponds to a different type, where the API ID for the type is the same as the filename, without the extension.

This starter is setup to play nice with [Firebase](https://firebase.google.com/). If you want to take advantage of that, you'll want to check out the [.firebaserc](.firebaserc) file and change the default Firebase project to the ID of your Firebase project.

### Routing

The way the starter is setup, you will need a document of type "homepage" to render at the root url. To change the way it looks, modify the component at /src/components/homepage.js. Routing is in the format /:type/:uid. If you have a "single" type with the API ID "about", then loading the the url /about will load that document. If you have a "repeatable" type with the API ID "products", then loading the url /products will load the full list of products. If you load the url /products/potato-canon then the app will load just the document of type "products" with the UID "potato-canon". NOTE: *Your repeatable types must have UIDs to work with this starter project*.

### Templating

Whether you have "single" or repeatable types, the appropriate template to render individual documents should be found at /src/components/\[type's API ID\].js. 

*If a type is repeatable, you must give it a UID field*, otherwise this starter won't work. If a type is repeatable, you can also create an index component named in the following format which will receive a full list of your repeatable type: /src/components/\[type's API ID\]-index.js.

Templates are loaded automatically based on the naming conventions above, and are passed the content through a prop named "content". The full document is passed, not just the data, so if you are rendering an individual document (as opposed to an index) that has a title field, you will need to access it through `this.props.content.data.title`. `prismic-reactjs` is included in the starter, so you can render rich text elements like Title fields, or Rich Text fields as follows:

```
import React from "react";
import {RichText} from "prismic-reactjs";

class Homepage extends React.Component {
  render() {
    let page = this.props.content.data;
    return <article>
      <header>
        {page.title && RichText.render(page.title)}
      </header>
    </article>
  }
}

export default Homepage;
```

A check is performed before rendering your template components, so access to `this.props.content.data` is guaranteed.

### Development

Run `npm run start` to get the dev server up and running.

### Deployment

I just added Firebase support. So you can go in and replace the firebase "default" project ID (currently raphaeltm-b740e) with your own firebase project id.

Make sure to have the Firebase tools installed globally using:

`npm install -g firebase-tools`

Then run `npm run deploy` to deploy your app.