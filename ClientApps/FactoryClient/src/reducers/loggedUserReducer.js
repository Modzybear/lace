/* Team B is comprised of the following individuals:
    - Roberto Avila
    - Andrew Burnett
    - Jeff De La Mare
    - Nick Nation
    - Phillip Nguyen
    - Anthony Tran
    - Joseph Venetucci

[This program is licensed under the "MIT License"]
Please see the file LICENSE.md in the 
source distribution of this software for license terms.

This software also makes use of Hyperledger Sawtooth which is
licensed under Apache 2.0. A copy of it's license and copyright
are contained in sawtooth-license.md and sawtooth-copyright.md */


const initialState = {
    pending: true,
    logged: false
  }
  
  const loggedUserReducer = (state = initialState, action) => {
    
    if (action.type === 'GET_LOGGED_USER') {
      return Object.assign({}, state, {
        pending: false
      })
    }
    
    if (action.type === 'SET_LOGGED_USER') {
      return Object.assign({}, state, {
        pending: false,
        logged: action.logged
      })
    }
    
    return state
  }
  
  export default loggedUserReducer