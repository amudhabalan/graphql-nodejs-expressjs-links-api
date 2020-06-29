const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: require('./query'),
  mutation: require('./mutation')
});
