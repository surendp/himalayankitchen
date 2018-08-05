
// this is a normal javascript class
// which takes form data as constructor parameter
// and makes the post request to an api passed as
// submitData method's parameter

class SubmitForm{

  // constructor takes formData object as input
  constructor(formData){
    this.formData = formData;
    this.message  = this.createMessage();
  }

  // create a string message from the form data
  createMessage(){
      let message =  ((this.formData.name        !=="") ? ("Mr/Ms "+this.formData.name+ " wants to make a reservation,") : "")
                    +((this.formData.partySize   !=="") ? ("for "+this.formData.partySize+" people.\n") : "")
                    +((this.formData.email       !=="") ? ("Email: "+ this.formData.email+"\n") :"")
                    +((this.formData.phoneNumber !=="") ? ("Contact number: "+this.formData.phoneNumber+"\n") : "")
                    +((this.formData.date        !=="") ? ("Date: "+ this.formData.date+"\n") : "")
                    +((this.formData.message     !=="") ? ("Message: "+this.formData.message) : "");

      return message;
  }

  // submitData method takes api as parameter
  // and makes post request to the api with
  // message property as body of the request
  submitData(api){
    console.log(this.message);
    if(this.message === ""){
      console.log("cannot submit the form!!")
      return false;
    }

    fetch(api,{
      method:'POST',
      body: this.message,
    });

    return true;
  }

}

export default SubmitForm;

