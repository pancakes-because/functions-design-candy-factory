/* 

    You will be defining some functions that perform the individual tasks 
    involved in producing candy. Sweet little minions that will 
    do all the tasks involved with making sugary treats.

    Time to deconstruct the process of making candy.

    Buy some milk chocolate
    Add some mint flavoring
    Combine the chocolate and mint
    Bake the mixture
    Break the hardened sheet into 6 pieces
    🍫 🍫 🍫 🍫 🍫 🍫 Enjoy!

*/ 

/*

    Buy Chocolate

    Define a function named buyChocolate. The function needs no parameters. 
    It should return an object with a type property whose value is "Milk chocolate".

*/ 

const buyChocolate = () => {
    const chocoObject = {type: "Milk chocolate"} 
    return chocoObject
}

let chocolate = buyChocolate()
console.log(chocolate) // logs {type: 'Milk chocolate'}

/* 

    Add Flavoring 

    Define a function named addFlavoring. 
    The function needs one parameter to accept an object as input.
    It should add a new flavor property to the object with a value of "Mint".

*/ 

const addFlavoring = (chocoObject) => {
    chocoObject.flavor = "Mint"
    return chocoObject
}


let mintMilkChocolate = addFlavoring(chocolate)
console.log(mintMilkChocolate) // logs {type: 'Milk chocolate', flavor: 'Mint'}

/* 

    DIYA'S NOTE ABOUT THE EXERCISE: 

    You are always passing on the newest variable, 
    which contains the most updated information, 
    as the argument for the new function that comes next.  

    For example, the "mintMilkChocolate" variable will be used as the argument 
    in the makeBarkMixture() coming up next, which will be stored in 
    another new variable to be used for the next function after that. 

*/ 

/* 

    Create Mixture 

    Define a function named makeBarkMixture. 
    It should have one parameter for an incoming object to be stored for use in the function.

    Time for another if block. This time, you will also need a corresponding else block.
    The function must verify that the right flavor is being used to make the mixture. 

    If the flavor property on the object is equal to "Mint", then you should add a 
    new mixed property to the object with a value of true. 

    If the flavor is not "Mint" then the property value should be false.

*/ 

// We're adding the chocoObject.mixed property here 


const makeBarkMixture = (chocoObject) => {
    if (chocoObject.flavor === "Mint") {
        chocoObject.mixed = true 
    } else {
        chocoObject.mixed = false 
    } 

    return chocoObject
}

let mintMilkChocolateMixture = makeBarkMixture(mintMilkChocolate)
console.log(mintMilkChocolateMixture)

/* 

    Bake the Mixture 

    Define a function named bakeCandy. 
    It should have one parameter for an incoming object to be stored for use in the function.

    Time for another if block. This time, you will also need a corresponding else block.
    The function should check if the mixed property on the incoming object has a value of true.

    If it does, then add a baked property to the object with a value of true.
    If the mixed property is not true, then add a baked property with a value of false. 

*/ 

// We're adding the chocoObject.baked property here 

const bakeCandy = (chocoObject) => {
    if (chocoObject.mixed === true) {
        chocoObject.baked = true 
    } else { 
        chocoObject.baked = false 
    }

    return chocoObject
}

let bakedMintChocolate = bakeCandy(mintMilkChocolateMixture)
console.log(bakedMintChocolate)

/* 

    Break the Bark 

    Define a function named breakBark. 
    It should have one parameter for an incoming object to be stored for use in the function.

    Time for another if block. No else block needed this time.

    If the incoming object's baked property is true, the function should 
    return a new array with 6 strings in it. Each string should be "Mint Chocolate Bark Piece".

    If the baked property value is false, the function should not return anything. 
    This means that the return statement should be inside the if block instead of outside of it.

*/ 

const breakBark = (chocoObject) => {
    if (chocoObject.baked === true) {
        return mintChocoBees = [
                                "Mint Chocolate Bark Piece", 
                                "Mint Chocolate Bark Piece", 
                                "Mint Chocolate Bark Piece", 
                                "Mint Chocolate Bark Piece", 
                                "Mint Chocolate Bark Piece", 
                                "Mint Chocolate Bark Piece"
                               ]
    } 
} 

const prepareChocolate = breakBark(bakedMintChocolate)
console.log(prepareChocolate)

