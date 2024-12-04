export const CheckValidData = (email, password, name) => {

const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
const isPassValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

if(!isEmailValid) return "Email ID is not valid";
if(!isPassValid) return "Password is not valid";
 
//null means no error if i have some string inside it means it has some error
return null;
}