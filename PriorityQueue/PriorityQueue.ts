interface QueueInterface{
    print():void;
    enqueue(input:Array<any>):void;
    dequeue():Array<any>;
    front():Array<any>;
    size():number;
    isEmpty():boolean;
}

class PriorityQueue implements QueueInterface{
    
    private collection:Array<any>;

    constructor(){
        this.collection = new Array();
    }

    print = ():void => {
        console.log(this.collection);
    }
    
    enqueue = (input:Array<any>):void => {
        if(this.collection.length === 0){
            this.collection.push(input);
        }else{
            for(let i=0; i<this.collection.length; i++){
                if(input[0] <= this.collection[i][0]){
                    this.collection.splice(i,0,input);
                    return;
                }
                
            }
            this.collection.push(input);
        }
        
    }

    dequeue(): Array<any> {
        return this.collection.shift();
    }

    front(): Array<any> {
        return this.collection[0];
    }

    size(): number {
        return this.collection.length;
    }

    isEmpty(): boolean {
        return this.collection.length === 0;
    }

    

}

class Main{
    public static main = ():void => {
        let PQueue = new PriorityQueue();
        PQueue.enqueue([10,"shihara"]);
        PQueue.enqueue([7,"dilshan"]);
        PQueue.enqueue([11,"shihara"]);
        PQueue.enqueue([8,"dilshan"]);
        PQueue.dequeue();

        PQueue.print();
    }
}


Main.main();
