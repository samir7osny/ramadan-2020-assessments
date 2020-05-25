var VideoRequest = require('./../models/video-requests.model');

module.exports = {
  createRequest: (vidRequestData) => {
    let newRequest = new VideoRequest(vidRequestData);
    return newRequest.save();
  },

  getAllVideoRequests: (top) => {
    return VideoRequest.find({}).sort({ submit_date: '-1' }).limit(top);
  },

  searchRequests: (topic) => {
    return VideoRequest.find({ topic_title: topic })
      .sort({ addedAt: '-1' })
      .limit(top);
  },

  getRequestById: (id) => {
    return VideoRequest.findById({ _id: id });
  },

  updateRequest: (id, status, resVideo) => {
    const updates = {
      status: status,
      video_ref: {
        link: resVideo,
        date: resVideo && new Date(),
      },
    };

    return VideoRequest.findByIdAndUpdate(id, updates, { new: true });
  },

  updateVoteForRequest: async (id, vote_type, author_id) => {
    const oldRequest = await VideoRequest.findById({ _id: id });
    const other_type = vote_type === 'ups' ? 'downs' : 'ups';
    let object = {}
    object['users.' + vote_type] = author_id
    await VideoRequest.findByIdAndUpdate(
        { _id: id },
        {
            '$pull': { 'users.ups': author_id , 'users.downs': author_id },
        },
        {new: true},
    );
    return VideoRequest.findByIdAndUpdate(
        { _id: id },
        {
            '$push': object,
        },
        {new: true},
    );
  },

  deleteRequest: (id) => {
    return VideoRequest.deleteOne({ _id: id });
  },
};
