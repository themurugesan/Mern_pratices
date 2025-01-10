

const Regexcheck = (regexname,details)=>{
    let nameRegex = /^[a-zA-Z]*$/; 

    if (regexname === "name") {
        return nameRegex.test(details)
    }
}

module.exports = Regexcheck