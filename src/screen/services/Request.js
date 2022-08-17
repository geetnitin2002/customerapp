import axios from 'axios';
import { empty, notUndefinedAndNull, undefinedOrNull } from '../../component/utils/Validation';
import { getUser } from './Session';

export async function request(baseUrl){

    let request = axios.create({
        baseURL: baseUrl,
        timeout: 90000, //Default timeout 90 Secs
    });

    request.interceptors.response.use(function(response){
        // Any response falling in the range of 2xx cause this function to trigger

        var data =response.data ;
        console.log("data",data)


        if(notUndefinedAndNull(data.data)){
            data=data.data
        }

        if(typeof data !== "string" && notUndefinedAndNull(data) && !empty(data) && typeof data !=='boolean'){   
            if("data" in data){
                console.log('coming here1 ')
                data = data.data;
            }
            
            var message = null;
            if("message" in data){
                console.log('coming here2 ')
                message = data.bookingrefno;
                console.log('coming here3 ',data)
            }
        }


        return {"status": "success", "message": message, "data": data};
    },function(error){  
        console.log(JSON.stringify(error))

        // Any response failling outside of the range 2xx cause this function to trigger
        var status = null;
        var data = null;
        var message = null;

        if(!("response" in error)){
            status = 'error';
            message = 'There is something wrong at our end, our superminds are on it.';
        }else if(undefinedOrNull(error.response)){

            let code = error.code;

            if(code === 'ECONNABORTED'){
                status = 'error';
                message = 'There seems to be network issue';
            }else{
                status = 'error';
                message = "Oops, something went wrong at our end";
            }

        }else{   
            status = error.response.status;
            if('response' in error && 'data' in error.response){
                data = error.response.data;
            }
            message = error.response.data.message;
    
            if(status === 500){
                if(message === "No message available"){
                    message = "Oops, something went wrong at our end";
                }

            }
            else if ("description" in data){
                message = data.description
            }
        }

        return Promise.reject({"status":"error", "message": message, "data": data});
    });

    let token = await getUser();
    console.log(token)
    if (notUndefinedAndNull(token)) {
        request.defaults.headers.common['x-access-token'] = token.accessToken;
       // request.defaults.headers.common['token'] = token.api_token;
    }
    return request;
}