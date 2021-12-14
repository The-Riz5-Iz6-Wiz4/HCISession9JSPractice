// JS practice #1, blood type compatability checker

const canGiveBlood = (Donater, Recipient) => {
    if (Donater === "O-") {
        return true;
    }
    else if (Donater === "A+" && (Recipient === "A+" || Recipient === "AB+")) {
        return true;
    }
    else if (Donater === "A-" && (Recipient === "A-" || Recipient === "A+" || Recipient === "AB+" || Recipient === "AB-")) {
        return true;
    }
    else if (Donater === "B+" && (Recipient === "B+" || Recipient === "AB+")) {
        return true;
    }
    else if (Donater === "B-" && (Recipient === "B-" || Recipient === "B+" || Recipient === "AB+" || Recipient === "AB-")) {
        return true;
    }
    else if (Donater === "AB+" && Recipient === "AB+") {
        return true;
    }
    else if (Donater === "AB-" && (Recipient === "AB+" || Recipient === "AB-")) {
        return true;
    }
    else if (Donater === "O+" && (Recipient === "O+" || Recipient === "A+" || Recipient === "B+" || Recipient === "AB+")) {
        return true;
    }
    else {
        return false;
    }

    
}

console.log(canGiveBlood("O+", "A+") + " " + canGiveBlood("A-", "B-") + " " + canGiveBlood("A-", "AB+"))