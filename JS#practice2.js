//Cipher using javacript
const letters = {1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h",9:"i",10:"j",11:"k",12:"l",13:"m",
14:"n",15:"o",16:"p",17:"q",18:"r",19:"s",20:"t",21:"u",22:"v",23:"w",24:"x",25:"y",26:"z"};
const eMessage = [];
var letterNum = prompt("Input how many letters are in your eMessage: ")

for (let ind = 0; ind < letterNum; ind++) {
    var NumMessage = prompt("Enter each letter as a number one by one: "); //prompts an input for the eMessage
    eMessage.push(NumMessage);
}

var key = prompt("Enter the corresponding key to your message: "); //prompts an input for the key

const DigitalDecipher = (eMessage, key) => {
    var arrayKey = Array.from(String(key), Number); //Turns individual numbers in the key into an array
    var extra = eMessage.length - arrayKey.length; //extra is for the extra amount of times the key numbers has to be repeated
    for (let k = 0; k < extra; k++) {
        arrayKey.push(arrayKey[k]); //The for loop is to account for a key having less numbers than eMessage
                                   //this will bring the arrayKey's length to be equal to eMessage length
    }
    var decipheredNum = []; //empty array to store the numbers after subtraction
    for (let x = 0; x < eMessage; x++) {
        decipheredNum.push(eMessage[x] - arrayKey[x]); //for loop to push the numbers into the decipheredNum array
    }
    var decipheredMessage = []; //empty array to store the letters converted from the cipher
    for (let y = 0; y < decipheredNum.length; y++) {
        decipheredMessage.push(letters[decipheredNum[y]]); //converts the numbers after subtraction into letters by
                                                          //indexing the decipheredNum array which gives an integer that
                                                          //corresponds to a letter in letters
    }
    var decipheredString =(decipheredMessage.toString()).replace(/,/g,"");
    return decipheredString;
}

console.log(DigitalDecipher(eMessage, key));