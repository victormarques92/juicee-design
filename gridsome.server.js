// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const benefits = require('./src/data/benefits.json');
const process = require('./src/data/process.json');
const prices = require('./src/data/prices.json');
const showcase = require('./src/data/showcase.json');

module.exports = function(api) {

  api.loadSource(({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    api.loadSource(store => {
      const Benefits = store.addContentType({
        typeName: 'Benefits'
      });

      const Process = store.addContentType({
        typeName: 'Process'
      });

      const Pricing = store.addContentType({
        typeName: 'Pricing'
      });

      const Showcase = store.addContentType({
        typeName: 'Showcase'
      });


      for (const field of process) {
        Process.addNode({
          id: field.id,
          title: field.title,
          body: field.body,
          image: field.image
        });
      }

      for (const benefit of benefits) {
        Benefits.addNode({
          id: benefit.id,
          title: benefit.title,
          body: benefit.body,
        });
      }

      for (const price of prices) {
        Pricing.addNode({
          id: price.id,
          title: price.title,
          bestDeal: price.bestDeal,
          features: price.features,
          price: price.price
        });
      }

      for (const field of showcase) {
        Showcase.addNode({
          id: field.id,
          title: field.title,
          body: field.body,
        });
      }
    })

    api.createPages(({ createPage }) => {
      // Use the Pages API here: https://gridsome.org/docs/pages-api
    })
  })
}