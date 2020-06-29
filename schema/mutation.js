const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType } = graphql;

// @todo: Add updateLink & deleteLink mutations
const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    addClassicLink: require('./add-classic-link'),
    addMusicLink: require('./add-music-link'),
    addShowLink: require('./add-show-link')
  }
});

module.exports = mutation;
