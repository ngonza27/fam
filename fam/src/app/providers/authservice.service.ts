import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {CognitoUserAttribute, CognitoUserPool, AuthenticationDetails, CognitoUser,CognitoUserSession} from 'amazon-cognito-identity-js'

import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { AuthenticationDetails } from 'amazon-cognito-identity-js';
import { CognitoUser } from 'amazon-cognito-identity-js';

import {Observable} from "rxjs/Observable";

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


//clase de usuario que toma los valores con los que se va a hacer la verificacion de usuario


//clase que verifica y realiza el registro de usuario y ademas verifica que el usuario exista

// esta variable POOL_DATA tiene la informacion de amazon cognito necesaria para conectarse ambas variable se encuentran en la pagina de amazon cognito

const POOL_DATA={
  UserPoolId: 'us-east-1_RETCOJQHk',
  ClientId:'6me12i7u744e6s6dnlaerv7qq'
}

//esta variable se usa para crear una instancia de clase aws cognito y toma como variable del contructor a POOL_DATA
const userPool= new CognitoUserPool(POOL_DATA);

// la clase usuario se usa para guardar los valores tomados del la forma html presente en registrypage o en login page
class User {
  username="";
  email="";
  password="";
  phoneNumber="";
}


@Injectable({providedIn: 'root'})
export class AuthserviceService {
  registeredUser:CognitoUser;


  constructor(public http: HttpClient) {
    console.log('Hello AuthserviceProvider Provider');
  }




  // este metodo se usa para registrar un usuario a aws cognito , toma 4 parametros usuario, contrasena, telefono, email
  register(username: string, email: string, password: string,phoneNumber: string){

    // sea crea una instancia de la clase usuario
    const user:User={
      username: username,
      email: email,
      password: password,
      phoneNumber: phoneNumber
    };
    // esta variable crea un array de tipo cognito user array donde se guardan cada uno de los atributos extras de aws como email y telefono
    const attrList: CognitoUserAttribute[]=[];
    // atributo extra de aws cognito la avriable name debe ser llamada email para aws lo reconozca como email
    const emailAttribute= {
      Name: 'email',
      Value: user.email
    };

    const phoneAttribute={
      Name:'phone_number',
      Value:user.phoneNumber
    };

    //se agregan los dos atributos creados arriba al array de atributos
    attrList.push(new CognitoUserAttribute(emailAttribute));
    attrList.push(new CognitoUserAttribute(phoneAttribute));

    //aca se hace el registro en si el primer parametro es usuario, el segundo contrasena el tercero la lista de atibutos el 4 nulo y el quinto una funcion que se llama cuando cuando el metodo sea llamado
    let isRegistered=Observable.create((observer)=>{
      
      userPool.signUp(user.username,user.password,attrList,null,(err,result)=>{

          if(err){
            console.log(err);
            observer.next(err);
            observer.complete();
          }
          else{
            observer.next(true);
            observer.complete();
            this.registeredUser=result.user;
          }
          //hacer algo despues de usuario registrado

        }
      );


    });

    return isRegistered;
  };

  logIn(username :string , password:string){
    const authData={
      Username: username,
      Password: password
    };
    const authDetails= new AuthenticationDetails(authData);
    const userData={
      Username:username,
      Pool: userPool
    };
    const cognitoUser = new CognitoUser(userData);

    //crea un observable que toma valores booleanos en caso de que la autentificacion falle o o no
    const logedIn=Observable.create((observer)=>{
      cognitoUser.authenticateUser(authDetails,{
        onSuccess(result){

          observer.next(true);
          observer.complete();

        },
        onFailure(err){
          observer.next(err);
          observer.complete();
        }


      });
    });

    return logedIn ;
  };

  getAuthenticatedUser(){
    return userPool.getCurrentUser();
  }

  logOut(){
    this.getAuthenticatedUser().signOut();
  }

  isAuthenticated(): Observable<boolean>{
    const user=this.getAuthenticatedUser();
    const obs= Observable.create((observer)=>{
      if(!user){
        observer.next(false);
      }

      else{
        user.getSession((err,session)=>{
          if(err){
            observer.next(false);
          }
          else{
            if(session.isValid()){
              observer.next(true);
            }
            else{
              observer.next(false);
            }
          }

        })
      }
      observer.complete();
    });
    return obs;
  }

  forgotPassword(username:string){
    const userData={
      Username:username,
      Pool:userPool


    };
    const cognitoUser = new CognitoUser(userData);
    const obs= Observable.create((observer)=>
      cognitoUser.forgotPassword({
        onSuccess(result){
          observer.next(true);
          observer.complete();
        

        },
        onFailure(err){
          observer.next(false);
          observer.complete();
    
        }

    }));
  }
  confirmPasswordReset(username:string,verificationCode:string,newPassword:string){
    const userData={
      Username:username,
      Pool:userPool

    }
    const cognitoUser = new CognitoUser(userData);
    const obs= Observable.create((observer)=>
    cognitoUser.confirmPassword(verificationCode, newPassword, {
        onFailure(err) {
            observer.next(true);
            observer.complete();
        },
        onSuccess() {
            observer.next(false);
            observer.complete();
        },
  }));
  }


}
