const initialState = {
  restaurants: [],
  restaurant: {},
  change: {
    name: "",
    address: {
      street: "",
      city: ""
    }
  }
};

const reducer = (state = initialState, { type, value }) => {
  const stateClone = { ...state };
  let restaurants, index, itemIndex;

  switch (type) {
    case "FETCH_RESTAURANTS_ASYNC":
      stateClone.restaurants = value;
      return stateClone;

    case "FETCH_RESTAURANT_ASYNC":
      stateClone.restaurant = value;
      return stateClone;

    case "POST_RESTAURANT_ASYNC":
      stateClone.restaurants.push(value);
      return stateClone;

    case "UPDATE_RESTAURANT_ASYNC":
      restaurants = [...stateClone.restaurants];
      index = restaurants.findIndex(r => r._id === value._id);

      restaurants[index].name = value.name;
      restaurants[index].address.city = value.address.city;
      restaurants[index].address.street = value.address.street;

      stateClone.restaurants = restaurants;
      return stateClone;

    case "DESTROY_RESTAURANT_ASYNC":
      restaurants = [...stateClone.restaurants];
      index = restaurants.findIndex(r => r._id === value);
      restaurants.splice(index, 1);

      stateClone.restaurants = restaurants;
      return stateClone;

    case "POST_RESTAURANT_ITEM_ASYNC":
      restaurants = [...stateClone.restaurants];

      index = restaurants.findIndex(r => r._id === value.id);

      restaurants[index].menu.push(value.item);

      stateClone.restaurants = restaurants;

      return stateClone;

    case "UPDATE_RESTAURANT_ITEM_ASYNC":
      restaurants = [...stateClone.restaurants];

      index = restaurants.findIndex(r => r._id === value.id);

      itemIndex = restaurants[index].menu.findIndex(i => i._id === value.item);

      restaurants[index].menu[itemIndex].title = value.data.title;
      restaurants[index].menu[itemIndex].description = value.data.description;

      stateClone.restaurants = restaurants;
      return stateClone;

    case "DESTROY_RESTAURANT_ITEM_ASYNC":
      restaurants = [...stateClone.restaurants];

      index = restaurants.findIndex(r => r._id === value.id);

      itemIndex = restaurants[index].menu.findIndex(i => i._id === value.item);
      restaurants[index].menu.splice(itemIndex, 1);

      stateClone.restaurants = restaurants;
      return stateClone;

    default:
      return state;
  }
};

export default reducer;
