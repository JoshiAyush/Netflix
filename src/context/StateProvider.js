import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

/** 
 * @context FirebaseContext provides state context for firebase items like firebase auth configuration instance. 
 */
export const FirebaseContext = createContext(null);

export const FirebaseStateProvider = ({ children, value }) => (
    <FirebaseContext.Provider value={value}>
        {children}
    </FirebaseContext.Provider>
);

export const useFirebaseContext = () => useContext(FirebaseContext);

/** 
 * @context BrowseContext provides state for browse screen, whether the user is switched to series or films. 
 */
export const BrowseContext = createContext(null);

export const BrowseStateProvider = ({ children, value }) => (
    <BrowseContext.Provider value={value}>
        {children}
    </BrowseContext.Provider>
);

export const useBrowseContext = () => useContext(BrowseContext);

/** 
 * @context FeatureContext provides state for features it basically keeps some hooks in it to provide them later anywhere. 
 */
export const FeatureContext = createContext(null);

export const FeatureStateProvider = ({ children, value }) => (
    <FeatureContext.Provider value={value}>
        {children}
    </FeatureContext.Provider>
);

export const useFeatureContext = () => useContext(FeatureContext);

/** 
 * @context SignUpContext provides state for SignUp component it basically keeps the fields require during sign up. 
 */
export const SignUpContext = createContext(null);

export const SignUpStateProvider = ({ children, initialState, reducer }) => (
    <SignUpContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </SignUpContext.Provider>
);

export const useSignUpContext = () => useContext(SignUpContext);

/** 
 * @context PlayerContext provides state to our Player component. 
 */
export const PlayerContext = createContext(null);

export const PlayerStateProvider = ({ children, value }) => (
    <PlayerContext.Provider value={value}>
        {children}
    </PlayerContext.Provider>
);

export const usePlayerContext = () => useContext(PlayerContext);