const db = {
  users: [{ id: '96950daf-6d6c-4670-b549-ae00391df4cd', name: 'Amud' }],
  showLinks: [
    {
      id: 'd73a2aa2-6246-4dfd-9e4d-9059607ea2e9',
      venue: 'The Forum, Melbourne',
      availability: true,
      reason: null,
      date: 'Aug 01 2020',
      url: 'https://www.forum-melbourne.com/shows',
      userId: '96950daf-6d6c-4670-b549-ae00391df4cd',
      dateCreated: 1590656388000
    },
    {
      id: 'a6eacdd3-28c8-41d4-8834-36bbda3a7aa7',
      venue: 'Awesome Venue, Canberra',
      availability: false,
      reason: 'sold',
      date: 'Aug 30 2020',
      url: 'https://www.awesomecanberra.com/shows',
      userId: '96950daf-6d6c-4670-b549-ae00391df4cd',
      dateCreated: 1590656388000
    },
    {
      id: 'f19b9069-b292-4696-8abb-e96c89b69c09',
      venue: 'Amazing Venue, Sydney',
      availability: false,
      reason: 'sale not started',
      date: 'Aug 30 2020',
      url: 'https://www.awesomecanberra.com/shows',
      userId: '96950daf-6d6c-4670-b549-ae00391df4cd',
      dateCreated: 1590656388000
    }
  ],
  musicLinks: [
    {
      id: '79e250d8-f6ae-4a3c-8f29-4c8e24597ba7',
      platform: 'Spotify',
      audioPlayer: 'https://www.spotify.com/audio',
      url: 'https://www.spotify.com/amud?songId=12345',
      userId: '96950daf-6d6c-4670-b549-ae00391df4cd',
      dateCreated: 1590006388000
    },
    {
      id: 'ddebc2f8-8c02-4ad1-a97f-2e093f0cde9a',
      platform: 'SoundCloud',
      audioPlayer: 'https://www.soundcloud.com/audio',
      url: 'https://www.soundcloud.com/amud?soundId=12345',
      userId: '96950daf-6d6c-4670-b549-ae00391df4cd',
      dateCreated: 1590656388000
    }
  ],
  classicLinks: [
    {
      id: '810a2c2a-9ff0-4b34-9642-085880a4a764',
      title: 'Twitter',
      url: 'https://www.twitter.com/amud',
      type: 'classic',
      userId: '96950daf-6d6c-4670-b549-ae00391df4cd',
      dateCreated: 1590656388000
    },
    {
      id: 'db3ca395-4b3d-454e-9acd-302e28b13adb',
      title: 'Facebook',
      url: 'https://www.facebook.com/amud',
      type: 'classic',
      userId: '96950daf-6d6c-4670-b549-ae00391df4cd',
      dateCreated: 1588064388000
    }
  ]
};

module.exports = db;
