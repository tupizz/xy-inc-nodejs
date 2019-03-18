module.exports = (err) => {
    delete err._message;
    delete err.name;

    for (const key in err.errors) {
        if (err.errors.hasOwnProperty(key)) {
            let uniqueError = err.errors[key];
            delete uniqueError.name
            delete uniqueError.properties
            delete uniqueError.kind
            delete uniqueError.path
        }
    }
    
    return err;
}