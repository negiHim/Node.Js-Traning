// function add customer
const addCustomer = async (req,res)=>{
    res.status(200).json({msg:'Customer Added successfully'});
};

// this function only for testing purpose
const addCustomerTesting = async (req,res)=>{
    res.status(200).json({msg:'Customer Added successfully'});
};

//now exporting 
module.exports ={addCustomer,addCustomerTesting};
