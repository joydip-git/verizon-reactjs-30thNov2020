export const useStateHook = (state) => {
    const stateRepo = [state];
    //{count:0, value:0}
    // const updateState = (newState) => {
    //     console.log(stateRepo[0])
    //     stateRepo[0] = newState;
    //     console.log(stateRepo[0])
    // }   
    const setState = (callback) => {
        let newState = callback(stateRepo[0])
        // let temp = {
        //     ...stateRepo[0],
        //     ...newState
        // }
        // //{count:0}
        // stateRepo[0] = temp;
        //{count:1, value:0}
        stateRepo[0] = newState;
    }
    return [stateRepo[0], setState];
}
