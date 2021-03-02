import { useContext } from "react";
import { createContext } from "react";

/** @context FirebaseContext provides state context for firebase items like firebase auth configuration instance. */
export const FirebaseContext = createContext(null);

export const FirebaseStateProvider = ({ children, value }) => (
    <FirebaseContext.Provider value={value}>
        {children}
    </FirebaseContext.Provider>
);

export const useFirebaseContext = () => useContext(FirebaseContext);

/** @context BrowseContext provides state for browse screen, whether the user is switched to series or films. */
export const BrowseContext = createContext(null);

export const BrowseStateProvider = ({ children, value }) => (
    <BrowseContext.Provider value={value}>
        {children}
    </BrowseContext.Provider>
);

export const useBrowseContext = () => useContext(BrowseContext);

/** @context FeatureContext provides state for features it basically keeps some hooks in it to provide them later anywhere. */
export const FeatureContext = createContext(null);

export const FeatureStateProvider = ({ children, value }) => (
    <FeatureContext.Provider value={value}>
        {children}
    </FeatureContext.Provider>
);

export const useFeatureContext = () => useContext(FeatureContext);
