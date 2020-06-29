const graphql = require('graphql');
const _ = require('lodash');
const validator = require('validator');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean
} = graphql;
const db = require('./db');
const compareValues = require('./utils');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    classicLinks: {
      type: new GraphQLList(ClassicLinkType),
      args: { orderByDateCreatedAsc: { type: GraphQLBoolean } },
      resolve(parentValue, args) {
        return _.filter(db.classicLinks, { userId: parentValue.id }).sort(
          compareValues('dateCreated', args.orderByDateCreatedAsc)
        );
      }
    },
    musicLinks: {
      type: new GraphQLList(MusicLinkType),
      args: { orderByDateCreatedAsc: { type: GraphQLBoolean } },
      resolve(parentValue, args) {
        return _.filter(db.musicLinks, { userId: parentValue.id }).sort(
          compareValues('dateCreated', args.orderByDateCreatedAsc)
        );
      }
    },
    showLinks: {
      type: new GraphQLList(ShowLinkType),
      args: { orderByDateCreatedAsc: { type: GraphQLBoolean } },
      resolve(parentValue, args) {
        return _.filter(db.showLinks, { userId: parentValue.id }).sort(
          compareValues('dateCreated', args.orderByDateCreatedAsc)
        );
      }
    }
  })
});

const ClassicLinkType = new GraphQLObjectType({
  name: 'ClassicLink',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    url: { type: GraphQLString },
    dateCreated: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return new Date(parentValue.dateCreated).toDateString();
      }
    },
    user: {
      type: UserType,
      resolve(parentValue, args) {
        return _.find(db.users, { id: parentValue.userId });
      }
    }
  }
});

const MusicLinkType = new GraphQLObjectType({
  name: 'MusicLink',
  fields: {
    id: { type: GraphQLString },
    platform: { type: GraphQLString },
    audioPlayer: { type: GraphQLString },
    url: { type: GraphQLString },
    dateCreated: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return new Date(parentValue.dateCreated).toDateString();
      }
    },
    user: {
      type: UserType,
      resolve(parentValue, args) {
        return _.find(db.users, { id: parentValue.userId });
      }
    }
  }
});

const ShowLinkType = new GraphQLObjectType({
  name: 'ShowLink',
  fields: {
    id: { type: GraphQLString },
    venue: { type: GraphQLString },
    availability: { type: GraphQLBoolean },
    reason: { type: GraphQLString },
    date: { type: GraphQLString },
    url: { type: GraphQLString },
    dateCreated: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return new Date(parentValue.dateCreated).toDateString();
      }
    },
    user: {
      type: UserType,
      resolve(parentValue, args) {
        return _.find(db.users, { id: parentValue.userId });
      }
    }
  }
});

module.exports = { UserType, ClassicLinkType, MusicLinkType, ShowLinkType };
