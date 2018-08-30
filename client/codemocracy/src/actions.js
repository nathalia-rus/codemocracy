

export const createTopic = (title) => ({
  type: 'CREATE_TOPIC',
  title
});

export const deleteTopic = () => ({
  type: 'DELETE_TOPIC'
});

export const upvote = () => ({
  type: 'INCREMENT'
});

export const downvote = () => ({
  type: 'DECREMENT'
});
