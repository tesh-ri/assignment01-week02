import { Injectable, Patch } from '@nestjs/common';
import { user } from '../interface/user.interface';

@Injectable()
export class UserServices {
  private usersData: user[] = [];
  //fetch all the user data
  getUsers() {
    try {
      const data = this.usersData;
      return {
        status: 200,
        data,
      };
    } catch (err) {
      return {
        message: err.message,
        status: err.status,
      };
    }
  }
  //fetch data by id

  getUserById(id: any) {
    try {
      const val = this.usersData.find((u) => u.id === id);
      console.log(val);
      if (!val) {
        return {
          status: 404,
          message: 'User not found',
        };
      }
      return {
        status: 200,
        val,
      };
    } catch (error) {
      return {
        status: error.status,
        message: error.message,
      };
    }
  }

  //create user data here
  createuser(data) {
    try {
      if (!data) {
        return {
          status: 501,
          message: 'user data required',
        };
      }
      //checking whether user already exist or not?
      let u=this.usersData.find(u=>u.email===data.email)
       if(u){
        return{
          status:400,
          message:"User already exist"
        }
       }


      if (data.name.trim() === null) {
        return {
          status: 400,
          message: 'name not to be empty',
        };
      }
      const userData = { ...data, id: this.usersData.length };
      console.log(userData);
      this.usersData.push(userData);
      return {
        status: 201,
        message: 'User created Successfully',
      };
    } catch (error) {
      return {
        status: error.status,
        message: error.message,
      };
    }
  }

  //updating the data present in array
  updateUserData(id: number, body) {
    try {
        const index = this.usersData.findIndex((u) => u.id === id);
        if (index === -1) {
          return { message: 'User not found', status: 404 };
        }
        
        this.usersData[index] = {
          ...this.usersData[index],
          ...body,
        };
        
        return {
          message: 'User updated successfully',
          data: this.usersData[index],
        };
    } catch (error) {
      return {
        status: error.status,
        message: error.message,
      };
    }
  }
}
