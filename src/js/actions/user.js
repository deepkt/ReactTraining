export function selectUser(user) {
  return {
    type: 'SELECT_USER',
    user:user
  }
}
export function addToFriends(friend) {
  return {
    type: 'ADD_TO_FRIENDS',
    friend:friend
  }
}
