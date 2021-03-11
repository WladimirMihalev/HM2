

function makeObjectDeepCopy(obj) {
    if ('object' === typeof obj) {
        if (obj instanceof Array) {
            let length = obj.length
            let newObj = new Array(length)
            for (let i = 0; i < length; i++) {
                newObj[i] = (makeObjectDeepCopy(obj[i]))
            }
            return newObj
        } else {
            let newObj = {}
            if (obj.prototype) {
                newObj.prototype = obj.prototype
            }
            for (let key in obj) {
                newObj[key] = makeObjectDeepCopy(obj[key])
            }
            return newObj
        }
    }
    return obj
}

function selectFromInterval(arr, a, b) {
    const max = a >= b ? a : b;
    const min = !(a >= b) ? a : b;
    let resultArr = []
    if (!Array.isArray(arr) || typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('error message')
    }
    arr.forEach(element => {
        if (typeof element !== 'number') {
            throw new Error('error message')
        }
        if (element <= max && element >= min) {
            resultArr.push(element)
        }

    });
    return resultArr
}


let myIterable = {
    from: 1,
    to: 4,

    [Symbol.iterator]() {
        if (typeof this.from !== 'number' || typeof this.to !== 'number') {
            throw new Error('Error: arg must be a number')
        }
        if (this.from === undefined || this.to === undefined) {
            throw new Error('Error: arg cant be a undefined')

        }
        if (this.from > this.to) {
            throw new Error('Error: from bigger than to')
        }

        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let item of myIterable) {
    console.log(item);
};