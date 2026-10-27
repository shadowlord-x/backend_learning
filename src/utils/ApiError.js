class ApiError extends Error{
  constructor(
    statusCode,
    message="Something went wrong", //default if none given
    errors=[], //array of error
    stack="" //error stack
  ){
    super(message) //super has to be called for overwriting
    this.statusCode=statusCode
    this.data=null
    this.message=message
    this.success=false
    this.errors=errors
    if(stack){
      this.stack=stack
    }else{
      Error.captureStackTrace(this,this.constructor)
    }
  }
}

export {ApiError}