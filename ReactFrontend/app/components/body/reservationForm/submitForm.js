
// this is a normal javascript class
// which takes form data as constructor parameter
// and makes the post request to an api passed as
// submitData method's parameter

class SubmitForm{

  constructor(formData){
    this.formData = formData;
    this.message  = this.createMessage();
  }

  createMessage(){
      let message = "hello";

      return message;
  }

  submitData(api){
    //console.log(api);
    fetch(api,{
      method:'POST',
      body: this.message,
    });
  }

}

export default SubmitForm;
