const graphql = require('graphql');
const _ = require('lodash');
const { uuid } = require('uuidv4');
const validator = require('validator');
const { GraphQLString, GraphQLNonNull, GraphQLBoolean } = graphql;
const db = require('./db');

const { ShowLinkType } = require('./types');

const addShowLink = {
  type: ShowLinkType,
  args: {
    venue: { type: new GraphQLNonNull(GraphQLString) },
    availability: { type: new GraphQLNonNull(GraphQLBoolean) },
    reason: { type: GraphQLString },
    date: { type: new GraphQLNonNull(GraphQLString) },
    url: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parentValue, { venue, availability, reason, date, url, userId }) {
    if (!validator.isURL(url)) {
      throw new Error('Invalid URL');
    }
    if (!validator.isUUID(userId)) {
      throw new Error('userId is not valid');
    }
    const id = uuid();
    db.showLinks.push({
      id,
      venue,
      availability,
      reason,
      date,
      url,
      userId,
      dateCreated: Date.now()
    });
    return _.find(db.showLinks, { id });
  }
};

module.exports = addShowLink;
