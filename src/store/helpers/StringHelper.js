/**
 * It determines if a string is null or empty
 *
 * @export
 * @param {string} value String to verify if it is null or empty
 */
 export function isNullOrEmpty(value) {
    if (!value) {
        return true;
    }
    let trimmed = value.trim();
    if (trimmed.length === 0) {
        return true
    }
    return false;
}

/**
 * Method to splite lines from string to array taking each line as a new element.
 * 
 * @param {string} str 
 */
export const splitLines = (str) => isNullOrEmpty(str) ? [] : str.split(/\r?\n/);

/**
 * Method to take input array an it returns a new array with only unique values.
 * 
 * @param {values} arrayValues Array of values
 */
export const removeRepeatingValues = (arrayValues) => !arrayValues ? [] : [...new Set(arrayValues)];

/**
 * Method to take input array, it remove leading zeros from each values on input array
 * and it returns a new array.
 * 
 * @param {values} arrayValues Array of values
 */
export const removeLeadingZeros = (arrayValues) => !arrayValues ? [] : arrayValues.map((val) => val.replace(/^0+/, ''));

/**
 * Create new string guid token 
 * 
 * @export
 * @returns 
 */
export function genereteStringGuid() {
    function random() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return random() + random() + "-" + random() + "-" + random() + "-" + random() + "-" + random() + random() + random();
}

export const capitalize = (str) => {
    if (typeof str !== 'string') {
        return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Function to get description status from service
 * @param {*} status 
 */
export function getDescriptionStatusService(status){
    let statusDescription = "";
    switch(status){
        case "10":
            statusDescription =  "NUEVO";
            break;
        case "11":
            statusDescription =  "ACEPTADO";
            break;
        case "12":
            statusDescription =  "RECHAZADO";
            break;
        case "13":
            statusDescription =  "ENVIADO A SAP";
            break;
        case "14":
            statusDescription =  "EN PEDIDO";
            break;
        case "15":
            statusDescription =  "FACTURADO";
            break;
        case "16":
            statusDescription =  "ERROR";
            break;
        case "17":
            statusDescription =  "INCOBRABLE";
            break;
        default:
            statusDescription =  "NO ASIGNADO";
            break;
    }
    return statusDescription;
}

/**
 * Function to get evend description to hystory
 * @param {*} eventEnum 
 */
export function getStatusEventHistory(eventEnum){
    let descriptionEvent = "";
    switch(eventEnum){
        case 1:
            descriptionEvent =  "Servicio aprobado";
            break;
        case 2:
            descriptionEvent =  "Servicio rechazado";
            break;
        case 3:
            descriptionEvent =  "Servicio para reasignar";
            break;
        case 4:
            descriptionEvent =  "Servicio en pedido";
            break;
        default:
            descriptionEvent =  "Servicio notificado";
            break;
    }
    return descriptionEvent;
}