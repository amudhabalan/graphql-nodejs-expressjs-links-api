const graphql = require('graphql');
const _ = require('lodash');
const { uuid } = require('uuidv4');
const validator = require('validator');
const { GraphQLString, GraphQLNonNull } = graphql;
const db = require('./db');

const { MusicLinkType } = require('./types');

const addMusicLink = {
  type: MusicLinkType,
  args: {
    platform: { type: new GraphQLNonNull(GraphQLString) },
    audioPlayer: { type: new GraphQLNonNull(GraphQLString) },
    url: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parentValue, { platform, audioPlayer, url, userId }) {
    if (!validator.isLength(platform, { min: 0, max: 144 })) {
      throw new Error('Platform name is too long');
    }
    if (!validator.isURL(url) || !validator.isURL(audioPlayer)) {
      throw new Error('Invalid URL');
    }
    if (!validator.isUUID(userId)) {
      throw new Error('userId is not valid');
    }
    const id = uuid();
    db.musicLinks.push({
      id,
      platform,
      audioPlayer,
      url,
      userId,
      dateCreated: Date.now()
    });
    return _.find(db.musicLinks, { id });
  }
};

module.exports = addMusicLink;
