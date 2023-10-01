function reverseString(str) {
    return str.split("").reverse().join("");
}

const encryptedMessage = "D: !iru-zziuq ed leftsa aerc iam iov rotiiv urtnep is erazilaicos ed eleleter ep amrofni itop am aenemesa eD !apate auod a-ed a-ec is tasinif ia ,iraticileF";

const decryptedMessage = reverseString(encryptedMessage);
console.log(decryptedMessage);
