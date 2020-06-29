const graphql = require('graphql');
const _ = require('lodash');
const { uuid } = require('uuidv4');
const validator = require('validator');
const { GraphQLString, GraphQLNonNull } = graphql;
const db = require('./db');

const { ClassicLinkType } = require('./types');

const addClassicLink = {
  type: ClassicLinkType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    url: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parentValue, { title, url, userId }) {
    if (!validator.isLength(title, { min: 0, max: 144 })) {
      throw new Error('Title is too long');
    }
    if (!validator.isURL(url)) {
      throw new Error('URL is not valid');
    }
    if (!validator.isUUID(userId)) {
      throw new Error('userId is not valid');
    }
    const id = uuid();
    db.classicLinks.push({
      id,
      title,
      url,
      userId,
      dateCreated: Date.now()
    });
    return _.find(db.classicLinks, { id });
  }
};

module.exports = addClassicLink;
