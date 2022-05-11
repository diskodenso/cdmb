// import all (*) from contentful
import * as contentful from "contentful";

// create a variable called client, 
// which creates a client and saves the space id and access token of contentful
// the actual token is save in the .env file to access it you need 
// to call process.env.NameOfVariableWhichStoresTheIDorToken
export const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
