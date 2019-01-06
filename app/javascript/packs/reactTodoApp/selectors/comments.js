export const getComments = ({ comments, entities }) =>
  comments.ids.map((id) => entities.comments[id])

export const getCommentsLoaded = ({ comments }) =>
  comments.loaded
