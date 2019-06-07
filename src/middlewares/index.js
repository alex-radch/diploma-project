export function loggerMiddleware({ getState }) {
  return function(next) {
    return function(action) {
      console.log('dispatching', action);
      var result = next(action);
      console.log('new state', getState());
      return result;
    };
  };
}
