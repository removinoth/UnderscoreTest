var _ = require('underscore');
var _string = require("underscore.string");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Execute command? ', (answer) => {
    // TODO: Log the answer in a database
    console.log('This the test underscore');

    testFunc('Object', answer);

    rl.close();
});

function testFunc(type, functions) {
    if (type == 'Array') {
        switch (functions) {
            //returns first element of the array

            case 'first':
                console.log('first returns first element of the array. returns undefined if array is empty');
                console.log(_.first([2, 3, 5, 6, 7]));
                console.log(_.first([undefined, 3, 5, 6, 7]));
                console.log(_.first([]));
                break;
                //returns last element of the array
            case 'last':
                console.log('returns last element of the array. returns undefined if array is empty');
                console.log(_.last([2, 3, 5, 6, 7]));
                console.log(_.last([]));
                break;
                //returns all element of the array except the last element
            case 'initial':
                console.log('returns all element of the array except the last element. returns empty array if array is empty');
                console.log(_.initial([2, 3, 5, 6, 7]));
                console.log(_.initial([]));
                break;

            case 'rest':
                console.log('returns all element of the array except the first element. returns empty array if array is empty');
                console.log(_.rest([2, 3, 5, 6, 7]));
                console.log(_.rest([]));
                break;
            case 'compact':
                console.log('return all the false values removed from the array.  In JavaScript, false, null, 0, "", undefined and NaN are all falsy. ')
                console.log(_.compact([2, 3, 5, 6, 7, '']));
                console.log(_.compact([undefined, 3, 5, 6, 7, '']));
                console.log(_.compact([null, 3, undefined, 6, 7, '']));
                console.log(_.compact([2, 0, 5, 6, test, '']));
                console.log(_.compact([2, 3, false, 6, 7, '']));
                console.log(_.compact([]));
                break;

            case 'flatten':
                console.log('Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level.')
                console.log(_.flatten([1, [2],
                    [3, [
                        [4]
                    ]]
                ], true));
                console.log(_.flatten([
                    [1, [2],
                        [3, [
                            [5]
                        ]]
                    ]
                ], true));
                console.log(_.flatten([
                    [1, [2],
                        [3, [
                            [5]
                        ]]
                    ]
                ], false));
                console.log(_.flatten([
                    [1, [2],
                        [3, [
                            [5]
                        ]]
                    ]
                ]));
                break;

            case 'without':
                console.log(_.without([2, 3, 5, 6, 7], [2, 3]));
                console.log(_.without([2, 3, 5, 6, 7], 2, 3));
                console.log(_.without([2, 3, 5, 6, 7], 11, 3));
                console.log(_.without(['tr', 'ar', 'br', 'sr', 're'], 'ar', 'br'));
                break;
            case 'last':
                console.log(_.last([2, 3, 5, 6, 7]));
                break;
            case 'uniq':
                console.log('returns the array by removing the ')
                console.log(_.uniq([2, 3, 3, 5, 5, 6, 7], true));
                console.log(_.uniq([2, 3, 3, 5, 5, 6, 7], false));
                console.log(_.uniq(['tr', 'ar', 'br', 'sr', 're', 'AR', 'ar']));

                break;
            case 'zip':
                console.log(_.zip(['t1', 't2', 't3'], [2, 3, 5, 6]));
                console.log(_.zip(null, [
                    ['t1', 't2', 't3'],
                    [2, 3, 5]
                ]));
                break;
            case 'unzip':
                console.log(_.unzip([
                    ['t1', 2],
                    ['t2', 3],
                    ['t3', null]
                ]));
                break;
            case 'object':
                console.log(_.object(['t1', 't2', 't3'], [2, 3, 5]));
                console.log(_.object(['t1', 't2', 't3']));
                console.log(_.object(['t1', 't2', 't3'], [2, 3]));
                console.log(_.object([
                    ['t1', 2],
                    ['t2', 3]
                ]));
                break;
            case 'indexof':
                console.log(_.indexOf([2, 3, 5, 6, 7], 5));
                console.log(_.indexOf([2, 3, 6, 5, 7, 5], 5));
                break;
            case 'lastindexof':
                console.log(_.lastIndexOf([2, 3, 5, 6, 7, 5], 5));
                console.log(_.lastIndexOf([2, 3, 5, 6, 7, 5, 5], 5, [2]));
                break;
            case 'sortedindex':
                console.log(_.sortedIndex([2, 3, 5, 6, 7, 8, 10], 8));
                console.log("_.sortedIndex([{'name' : 't1','tn':2 },{'name' : 't2','tn':4 },{'name' : 't3','tn':6 }],{'name' : 't5','tn':5 },'tn'))");
                console.log(_.sortedIndex([{ 'name': 't1', 'tn': 2 }, { 'name': 't2', 'tn': 4 }, { 'name': 't3', 'tn': 6 }], { 'name': 't5', 'tn': 5 }, 'tn'));
                console.log(_.sortedIndex([{ 'name': 't1', 'tn': 2 }, { 'name': 't2', 'tn': 4 }, { 'name': 't3', 'tn': 6 }], { 'name': 't5', 'tn': 5 }, function(key, val) {
                    console.log(key.name);
                    return
                }));
                break;
            case 'findindex':
                //console.log(_.findIndex([2,3,5,6,7,5],isPrime));
                var obj = [{ 'name': 't1', 'tn': 2 }, { 'name': 't2', 'tn': 4 }, { 'name': 't3', 'tn': 6 }, { 'name': 't2', 'tn': 45 }];
                console.log(_.findIndex([2, 8, 4, 6, 7, 5, 5], isOdd));
                console.log(_.findIndex(obj, { 'name': 't2' }));
                break;
            case 'findlastindex':
                var obj = [{ 'name': 't1', 'tn': 2 }, { 'name': 't2', 'tn': 4 }, { 'name': 't3', 'tn': 6 }, { 'name': 't2', 'tn': 45 }];
                console.log(_.findLastIndex(obj, { 'name': 't2' }));
                break;
            case 'range':
                console.log(_.range(2, 5));
                console.log(_.range(-2, 5, 1));
                break;
            case 'string':
                console.log(_string.replaceAll('tester is', 'is', ''));
                var a = 'test';
                console.log(_string.insert(a, a.length, 'er'))
                console.log(_string.numberFormat(10000000, 2));
            case 'file':
                try {
                    fs.mkdir('./scripts/home/', function(err) {

                    });
                } catch (e) {
                    console.log(e);
                }

        }
    } else if (type == 'Object') {
    		var ab = [[{'name':'vinoth','dep':'a'}],[{'name':'a','dep':'a'}],[{'name':'vinoth','dep':'b'}]]

        var obj = [{
            'name': 't1',
            'tn': 2,
            'tnobj': [{
                'test': 'test'
            }]
        }, { 'name': 't2', 'tn': 2 }, { 'name': 't3', 'tn': 6 }, { 'name': 't2', 'tn': 45 }];
        var obj1 = [{ 'name': 't1', 'tn': 3 }, { 'name': 't2', 'tn': 5 }, { 'name': 't3', 'tn': 7 }, { 'name': 't2', 'tn': 9 }];
        var obj3 = [{ 'name': 't1we', 'tn': 2 }, { 'name': 't2ewe', 'tn': 5 }, { 'name': 't3sasssas', 'tn': 7 }, { 'name': 't2saa', 'tn': 94 }];
        var monthArray = ['jan is cool', 'may is hot', 'dec is wint', 'jan is temp'];
        var obj4 = [{ 'name': 't1we', 'plan': 'prepaid' }, { 'name': 't2ewe', 'plan': 'postpaid' }, { 'name': 't3sasssas', 'tn': 'prepaid' }, { 'name': 't2saa', 'tn': 'prepaid' }, { 'name': 't2saa', 'tn': 'no' }];
        switch (functions) {
            case 'keys':
                console.log(_.keys(obj[0]));
                break;
            case 'values':
                console.log(_.values(obj[0]));
                break;
            case 'mapObject':
                console.log(_.mapObject(obj[0], function(value) {
                    return value + 1;
                }));
                break;
            case 'template':
                var template = _.template("<html><head></head><body><h1><%- name %></h1><b><%- name1 %></b></body></html>");

                console.log(template({ 'name': 'Test', 'name1': 'sample' }));
                break;
            case 'date':
                console.log(_.now());
                break;
            case 'invert':
                console.log(_.invert(obj[0]));
                break;
            case 'extend':
                console.log(_.extend(obj[0], { 'td': 3 }));
                break;
            case 'pick':
                console.log(_.pick(obj[0], 'tn'));
                break;
            case 'omit':
                console.log(_.omit(obj[0], 'tn'));
                break;
            case 'isempty':
                console.log('validate empty');
                console.log(_.isEmpty(obj[5]));
                break;
            case 'sort':
                var stooges = [2, 6, 3, 7, 5];
                console.log(_.sortBy(stooges))
                break;
            case 'where':
                console.log('returns the array of object of the list that contains the given object');
                console.log(_.where(obj, { 'tn': 2 }));
                break;
            case 'findwhere':
                console.log('returns the 1st value of the list that contains the given object');
                console.log(_.findWhere(obj, { 'tn': 2 }));
                break;
            case 'filter':
                console.log('it is  to filter, it returns that array of object by filtering the values that was return by the iteratee');
                console.log(_.filter(obj, function(val, key) {
                    return val.tn === 2;
                }));
                console.log(_.filter([1, 2, 3, 4, 5, 6], isOdd));
                break;
            case 'reject':
                console.log('it is opposite to filter, it returns that array of object by rejecting the values that was return by the iteratee');
                console.log(_.reject(obj, function(val, key) {
                    return val.tn === 2;
                }));
                console.log(_.reject([1, 2, 3, 4, 5, 6], isOdd));
                console.log(_.reject(ab, filterOfArrays));
                break;
            case 'every':
                console.log('returns true if all the element passes the predicate')
                console.log(_.every([1, 2, 3, 4, 5, 6], isOdd));
                console.log(_.every(obj1, function(val, key) {
                    return isOdd(val.tn);
                }));
                break;
            case 'some':
                console.log('return true if atleast one value pass the predicate, breaks the loop when 1st instance of the predicate is found.')
                console.log(_.some([1, 2, 3, 4, 5, 6], isOdd));
                console.log(_.some(obj, function(val, key) {
                    return val.tn == 2;
                }));
                break;
            case 'contains':
                console.log(_.contains([], 4));
                console.log(_.contains([1, 2, 3], 3));
                console.log(_.contains([1, 2, 3], 4));
                console.log(_.contains([1, 2, 3, 3, 5, 6, 6, 4], 4, 8));
                console.log(_.contains(['a', 'b', 'c'], 'c'));
                break;
            case 'invoke':
                console.log('');
                console.log(_.invoke([
                    [5, 1, 7],
                    [3, 2, 1]
                ], 'sort'));
                console.log(_.invoke([
                    ['a', 'z', 'c'],
                    ['m', 'x', 'j']
                ], 'sort'));
                console.log(_.invoke([
                    [5, 1, 7]
                ], increment, 0));
                break;
            case 'pluck':
                console.log(_.pluck(obj, 'name'));
                console.log(_.pluck(obj, 't1')); //return undefined if member not found.
                console.log(_.pluck(obj, 'tnobj'));
                break;
            case 'max':
                //non-numerical values will be ignored
                //throws -Infinity while finding max value in non-member 
                console.log(_.max(obj1, function(val) {
                    return val.name1;
                }));
                console.log(_.max(obj1, function(val) {
                    return val.tn;
                }));
                //throws -Infinity while finding max value in string
                console.log(_.max(obj1, function(val) {
                    return val.name;
                }));
                console.log(_.max([1, 2, 3, 3, 5, 6, 6, 4]));
                console.log(_.max([]));
                break;
            case 'min':
                //non-numerical values will be ignored
                //throws Infinity while finding min value inßß non-member 
                console.log(_.min(obj1, function(val) {
                    return val.name1;
                }));
                console.log(_.min(obj1, function(val) {
                    return val.tn;
                }));
                //throws Infinity while finding min value in string
                console.log(_.min(obj1, function(val) {
                    return val.name;
                }));
                console.log(_.min([1, 2, 3, 3, 5, 6, 6, 4]));
                console.log(_.min([1, 2, 3, 3, 5, 6, 6, 4], function(val) {
                    return val % 2;
                }));
                console.log(lzzzzzpz);
                console.log(_.min([]));
                break;
            case 'sortby':
                console.log(_.sortBy([1, 2, 3, 3, 5, 6, 6, 4]).reverse());
                console.log(_.sortBy(['a', 'z', 'i', 'q', 'x']).reverse());
                console.log(_.sortBy(obj1, function(val) {
                    return val.name
                }));
                console.log(_.sortBy(obj1, function(val) {
                    return val.tn % 7
                }));
                break;
            case 'groupby':
                console.log(_.groupBy(obj3, isOddObj));
                console.log(_.groupBy(obj4, group));
                break;
            case 'indexby':
                console.log(_.indexBy(obj1, 'name'));
                break;
            case 'countby':
                //issues with this two.
                console.log(_.countBy(obj4, function(val) {
                    return val.plan === 'prepaid' ? 'prepaid' : 'postpaid';
                }));
                console.log(_.countBy(obj4, function(val) {
                    return val.plan === 'postpaid' ? 'postpaid' : 'prepaid';
                }));
                console.log(_.countBy(obj4, function(val) {
                    if (val.plan === 'postpaid') {
                        return 'postpaid';
                    } else if (val.plan === 'prepaid') {
                        return 'prepaid';
                    } else {
                        return 'nothing';
                    }
                }));
                console.log(_.countBy([1, 2, 3, 4, 5], function(num) {
                    return num % 2 == 0 ? 'even' : 'odd';
                }));
                break;
            case 'shuffle':
                console.log(_.shuffle(obj4));
                break;
            case 'sample':
                console.log(_.sample(obj4));
                break;
            case 'toarray':
                console.log(_.toArray(obj4[0]));
                break;
            case 'size':
                console.log(_.size(obj4[0]));
                console.log(_.size(obj4));
                break;
            case 'partition':
                //splits the odd and even as array
                console.log(_.partition(obj3, isOddObj));
                break;
            case 'bytes':
                console.log(convertBytes());
                break;
case 'repeat':
                repeat();
                break;


        }
    }

}


function isOdd(val) {

    if ((val % 2) !== 0) {
        return true;
    } else {
        return false;
    }
}

function percenatageCompare(a, b) {
    /*var a = 84.7;
    var b = 46.6;*/
    var diff = a - b;
    return ((diff / a) * 100).toFixed(2);
}

function isOddObj(val) {

    if ((val.tn % 2) !== 0) {
        return true;
    } else {
        return false;
    }
}

function group(val) {

    return val.plan == 'prepaid';
}

function time(time) {


    time = Number(time);
    var h = Math.floor(time / 3600);
    var m = Math.floor(time % 3600 / 60);
    var s = Math.floor(time % 3600 % 60);
    return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);


}

function convertBytes(size, time) {
    var oneMB = 1048576;
    var mb = size;
    var mins = time.toString();
    var mbToBytes = mb;
    //var mbToBytes = oneMB * mb;
    console.log(mbToBytes);
    var seconds = (parseInt(mins.split(':')[0]) * 60) + parseInt(mins.split(':')[1]);
    console.log(seconds);
    //toolbox_open_closeorg
    return mbToBytes / seconds;
}

function convertMBtoBytes(size) {
    var oneMB = 1000000;
    //size =75475004;
    //var mbToBytes = size/oneMB;
    //var mbToBytes = oneMB * mb;
    //console.log(mbToBytes.toFixed(1));
    //toolbox_open_closeorg
    return (size / oneMB).toFixed(1);
}

function convertbytesToKB(size) {
    var oneMB = 1024;
    return (size / oneMB).toFixed(1);
}


function filterOfArrays(val){
	console.log(val);
	//var ab = [[{'name':'vinoth','dep':'a'}],[{'name':'a','dep':'a'}],[{'name':'vinoth','dep':'b'}]]
	if (val[0].dep === 'b') {
        return true;
    } else {
        return false;
    }
}
function repeat(){
    var ab = 0;
    var a = [1,2,3,4,6,2,3,4,6,3,4,6,4,6,6];
    var b = _.groupBy(a, function(num){ return Math.floor(num); });
    console.log(b);
    var c = _.mapObject(b,function(val,key){console.log(val,key,ab);

        return val.length;
        //return val.length;
        //console.log(key,val)
    });
    console.log(_.max(c, function(o){return o;}));
        console.log(_.max(b, function(o){return o}));

console.log(c);
    
}

function length(val) {

    return val.name.length;
}

function increment(val, a) {

    console.log(val, a);
    return val + 2;
}
