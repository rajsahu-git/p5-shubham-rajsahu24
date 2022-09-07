    function add(...args){
        return args.reduce(function (acc, cur){
            return acc+ cur
        },0)
    }


    function memoize(fun){
        let cache = []
        return (...args)=>{
            let numbers = args.map(function(n){
                return n
            })
            if (numbers in cache){
                console.log("Cache")
                return cache[numbers]
            }
            else{
                let result = args.reduce((acc,cur)=>fun(acc,cur),0)
                console.log('first')
                cache[numbers]= result;
                return result

            }
    }
    }
    console.time()
    const memoizedAdd = memoize(add)
    console.log(memoizedAdd(100,100))
    console.timeEnd()

    console.time()
    console.log(memoizedAdd(100))
    console.timeEnd()

    console.time()
    console.log(memoizedAdd(100,200))
    console.timeEnd()

    console.time()
    console.log(memoizedAdd(100,100))
    console.timeEnd()




