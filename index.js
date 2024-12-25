const { Observable } = require("rxjs"); 

//Create observable
const observable = new Observable((subscriber) => {
    //emit data here
    subscriber.next(10);
    subscriber.next(11);
    subscriber.next(12);
});

//create Observer
const observer = {
    //process
    next: (value)=> 
        { 
            console.log("Oberver got a value of "+ value) 
        },
        error: (err) => {
            console.log("Observer got an error!" + err); 
    }, 
    complete: () => {
        console.log("Observer got a complete notification.")
    }
};

//Connect observable and oberver
observable.subscribe(observer);