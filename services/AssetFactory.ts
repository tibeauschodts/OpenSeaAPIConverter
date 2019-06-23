import { Asset as Asset } from '../classes/Asset';

// Function to create an array of asset objects using a JSON object.
export function createAssets(jsonObject: any) {
    if (isEmptyJSON(jsonObject)) {
        // If the JSON object is empty, return a new error.
        return new Error('JSON Object is empty.');
    } else {
        let assets: Asset[] = [];

        for (var key in jsonObject.assets) {
            // Creata a new Asset object for each asset in the JSON object and add it to the array.
            assets.push(createNewAsset(jsonObject.assets[key]));
        }

        return assets;
    }
}

// Function to create a new Asset using a JSON object.
function createNewAsset(jsonObject: any) {

    /**
     * Some values (like token_id, symbol and created_date) are always provided in the JSON data.
     * Other values are empty sometimes, so we have to get the values from somewhere else. 
     */
    let token_id: string = jsonObject.token_id;
    let name: string = getNameFromObject(jsonObject);
    let description: string = getDescriptionFromObject(jsonObject);
    let symbol: string = jsonObject.asset_contract.symbol;
    let created_date: Date = jsonObject.asset_contract.created_date;
    let image_url: string = getImageFromObject(jsonObject);
    let external_link: string = getExternalLinkFromObject(jsonObject);
    let permalink: string = jsonObject.permalink;

    let asset = new Asset(
        token_id,
        name,
        description,
        symbol,
        created_date,
        image_url,
        external_link,
        permalink
    );

    // A new Asset object is created above and will be returned by this function.
    return asset;
}

// Function to check if given JSON object is empty or not.
function isEmptyJSON(jsonObject: any) {
    for (var key in jsonObject) {
        if (jsonObject.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
}

// Function to check if given value is empty or not.
function isEmptyValue(value: any) {
    if (value === '' || value === null || value === undefined || value === 0) {
        return true;
    }

    return false;
}

// Function to get the name of the JSON object.
function getNameFromObject(jsonObject: any) {
    let { name } = jsonObject;

    // If the standard name value is empty, try getting the contract name.
    if (isEmptyValue(name)) {
        name = jsonObject.asset_contract.name;
    }

    return name;
}

// Function to get the description of the JSON object.
function getDescriptionFromObject(jsonObject: any) {
    let { description } = jsonObject;

    // If the standard description value is empty, try getting the contract description.
    if (isEmptyValue(description)) {
        description = jsonObject.asset_contract.description;
    }

    return description;
}

// Function to get the image URL of the JSON object.
function getImageFromObject(jsonObject: any) {
    let { image_url } = jsonObject;

    // If the standard image URL value is empty, try getting the contract image URL.
    if (isEmptyValue(image_url)) {
        image_url = jsonObject.asset_contract.image_url;
    }

    return image_url;
}

// Function to get the external link of the JSON object.
function getExternalLinkFromObject(jsonObject: any) {
    let { external_link } = jsonObject;

    // If the standard external link value is empty, try getting the contract external link.
    if (isEmptyValue(external_link)) {
        external_link = jsonObject.asset_contract.external_link;
    }

    return external_link;
}