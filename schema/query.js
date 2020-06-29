const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString } = graphql;
const db = require('./db');
const { UserType } = require('./types');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(db.users, { id: args.id });
      }
    }
  }
});

module.exports = Query;
