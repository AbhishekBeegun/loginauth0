import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
function LoginButton() {
    const { loginWithRedirect ,isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>
            LOG IN OR SIGN UP

        </button>
        )
    );
}

export default LoginButton