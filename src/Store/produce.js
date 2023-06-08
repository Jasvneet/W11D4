import produceData from "../mockData/produce.json"

export default function produceReducer(state = {}, action) {
    // Object.freeze(state)
    // // make existing state properties non-writeable
    // // state must be read-only
  
  
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach(produce => {
              newState[produce.id] = produce;
            });
            return newState;
      default:
        return state;
    }
  }


export const POPULATE = "produce/POPULATE";

export const populateProduce = produce => {
    return {
        type: POPULATE,
        produce: produceData
}
}

