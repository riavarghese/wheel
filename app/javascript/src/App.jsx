import React from "react";

import ErrorBoundary from "Common/ErrorBoundary";
import Main from "components/Main";
import { AuthProvider } from "contexts/auth";
import { UserProvider } from "contexts/user";

const App = props => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <UserProvider>
          <Main {...props} />
        </UserProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
