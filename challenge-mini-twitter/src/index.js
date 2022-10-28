const twitter = {
    head : {
      username: 'name',
      numberTweet: 88,
      pagePhoto: 'photo1jpeg',
      profilPhoto: 'photo2jpeg',
      editButton: 'Edit profile',
      userName: '@nafs',
      userBio: 'Twitter',
      dateOfbirtday: '15st may',
      placeOfUser: "place",
      dateOfJoin: 'Joined February 2020',
      numberOfFollowing: 10,
      numberOfFollower: 50,

    },

    body: {
      tweets: [{
        messageBody: 'Good evening to everyone',
        media: 'photo3jpeg',
        comment: [{
          comment: 'good evening',
          retweet: 10,
          quateRetweet:[{
            message: 'good evening',
            comment: 'you too',
            retweet: 50,
            like: 40,
          }],
          like: 1,
        }],
      }],
      tweetsAndReplies: [],
      media:[],
      likes:[],
      messageDirect: [],
      youMightLike:[],
    }
  }
  console.log(twitter);
