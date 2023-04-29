const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
//creating user schema
const CustomerSchema = mongoose.Schema({
    customerfirstname: {
        type: String,
        require: true
    },
    customerlastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    }
}, { timestamps: true });

// pre hook for encrypt password and To convert name in Title case while adding customer
CustomerSchema.pre('save', async function (next) {
    this.customerfirstname = await this.customerfirstname.charAt(0).toUpperCase() +
        this.customerfirstname.slice(1);
    this.customerlastname = await this.customerlastname.charAt(0).toUpperCase() +
        this.customerlastname.slice(1);
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

//pre hook for encrypt password and convert name into Title case while updating
CustomerSchema.pre('findOneAndUpdate', async function (next) {
    try { 
        /*
        In the pre-update hook function, this refers to the Mongoose query object that 
        triggers the hook. this._update gives us access to the update object,
         which contains the fields and values that will be updated in the document. 
        */
        const update = this._update;
        update.customerfirstname = await update.customerfirstname.charAt(0).toUpperCase() +
        update.customerfirstname.slice(1);
        update.customerlastname = await update.customerlastname.charAt(0).toUpperCase() +
        update.customerlastname.slice(1);
        update.password = await bcrypt.hash(update.password, 10);
        next();
    } catch (err) {
        next(err)
    }
});

//post hook to send email to logined user
CustomerSchema.post('save', async function(){
    try{
    //set up transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '<add your email address here>',
            pass: '<add your password here>'
        }
    });
    
    // send mail 
    let info = await transporter.sendMail({
        from: '"Name of sender"  sender email address', 
        to: this.email, 
        subject: 'Hello !!!', 
        text: 'Registered Successfully', 
        html: `<b> Hello ${this.customerfirstname} ${this.customerlastname} !! You are registered 
        successfully to RESTAPI</b>` 
    });
    console.log(info.messageId);
    
}catch(err){
   console.log(err);
}
});

// //now adding pre-hooks
// CustomerSchema.pre('save', async function (next) {
//     const customer = this.constructor;
//     const existingCustomer = await customer.findOne({ email: this.email })
//     console.log(existingCustomer);
//     if (existingCustomer.length > 0) {
//         const error = new Error('Customer already exists');
//         next(error);
//     } else {
//         next();
//     }
// });

//to save customer


module.exports = mongoose.model('Customer', CustomerSchema);