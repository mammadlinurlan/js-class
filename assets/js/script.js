class customMatch {
    constructor(num){
        this.num = num;
    }
   

   plus(number) {
       
       this.num+=number;
       return this
    }
   
   minus(number) {
       this.num-=number;
       return this
   }

   multiply(number){
       this.num*=number;
       return this;
   }

   divide(number){
    this.num/=number;
    return this;
}
   
}


var result = new customMatch(50).plus(6).minus(30).multiply(3).divide(2)
console.log(Object.values(result));



