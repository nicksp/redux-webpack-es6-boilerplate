type FriendById = {
  id?: number,
  name: string
};

// This is the model of our module state
export type State = {
  friends: number[],
  friendsById: Array<FriendById>
};
