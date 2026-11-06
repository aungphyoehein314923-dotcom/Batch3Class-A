try{
    let number="abc";
    let result = number*2;
    console.log("result",result);

    console.log (undeclareedVariable);
    console.log("this line will not be executed if an error occcurs above.");}

    catch (error ){
        console.log (" Error Found");
        console.log ( "Error name:", error.name);
        console.log("Error message:",error.message);

    }
    finally{
        console.log("Code finish running ( with or without error). ");
    }