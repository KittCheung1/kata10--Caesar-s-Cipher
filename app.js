

function caesarCipher(input, num) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {

        let codedLetter = input.charCodeAt(i) + num;
        // if (codedLetter > 90) {
        //     codedLetter = (codedLetter  - 90) + 64 
            
        // }
        if (codedLetter > 122) {
            codedLetter = (codedLetter  - 122) + 96 
        }
        arr.push(String.fromCharCode(codedLetter))
    }
    console.log(arr)

}
    caesarCipher("middle-Outz", 2) // "okffng-Qwvb"
    caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5) //"Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"