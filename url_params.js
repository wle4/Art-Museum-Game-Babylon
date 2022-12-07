//REFERENCE: https://www.sitepoint.com/get-url-parameters-with-javascript/

//get all paramters + values from URL and write to an object
function getParams(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var params = {};
    keys = urlParams.keys();

    for (const key of keys){
        params[key] = urlParams.get(key);
    }
    console.log(params);
    return params;
}

//add a parameter to HREF
function setParams(href, key, val){
    if(href.indexOf('?') < 0){ //if first param
        href += `?${key}=${val}`;
    } else {
        href += `&${key}=${val}`;
    }
    return href;
}
