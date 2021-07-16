import bcrypt from "bcryptjs";

const users = [
    {
        name: "admin User",
        email: "admin@form.com",
        passord: bcrypt.hashSync("123456", 10),
        isAdmin: true
        
    },
    {
        name: "Normal User",
        email: "normaln@form.com",
        passord: bcrypt.hashSync("123456", 10),
        
    },
];

export default users
