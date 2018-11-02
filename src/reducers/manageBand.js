export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        name: action.name,
        id: Math.floor((Math.random() * 10000) + 1);
      }
      return { ...state, bands: [...state.bands, band] }

    default:
      return state;
  }
};
