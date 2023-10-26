import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
    auth: {
        // clientId: import.meta.env.VITE_AZURE_EID_APPID,
        // authority: import.meta.env.VITE_AZURE_EID_AUTHORITY_ID,
        clientId: '9e273882-23af-43e4-b412-fb2e233bf1fa',
        authority: 'a75566ba-bef7-4120-a65d-78ffed49b721',
        redirectUri: "/", //uri (uniform resource identifier) distinguished one resource from another. Does not find a url 
        postLogoutRedirectUri: "/", //Redirect to home after logout
        navigateToLoginRequestUrl: false, //If true, nav back to original login url (uniform resource locator)
    }, 
    cache: {
        cacheLocation: "sessionStorage", 
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};
 

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
//Make note. There might me no need for a login page
export const loginRequest = {
    scopes: ["User.Read"]
}; 