import firebase from "../../firebase";
export const SignUp = async(email,password)=>{
    try{
        return await firebase.auth().createUserWithEmailAndPassword(email,password);
    }
    catch(error){
        return error;

    }
}
