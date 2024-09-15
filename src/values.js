export const PRODUCTION = false;
export const LIVE_MODE = false

let DOMAIN_NAME
if (PRODUCTION) 
{
    DOMAIN_NAME = 'https://studentspace.website';
} 
else 
{ 
  DOMAIN_NAME = 'http://127.0.0.1:8000';
}

export {  DOMAIN_NAME };
