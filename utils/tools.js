export default class Tools {

    static listErrors(err){
        let errorMessages = {};

        Object.keys(err.errors).map((field) => {
            errorMessages[field] = err.errors[field].message;
        });

        return errorMessages;
    }
}