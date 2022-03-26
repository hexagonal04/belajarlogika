let arr1 = [];
$.ajax({
    url: 'array1.json',
    async: false,
    dataType: 'json',
    success: function(data) {
        arr1 = data;
    }
});

let arr2 = [];
$.ajax({
    url: 'array2.json',
    async: false,
    dataType: 'json',
    success: function(data) {
        arr2 = data;
    }
});

let arr3 = []
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (_.isEqual(arr1[i].nama, arr2[j].nama) === true) {
            arr3.push(arr2[i])
        } else if (_.isEqual(arr1[i].telepon, arr2[j].telepon) === true) {
            arr3.push(arr2[i])
        } else if (_.isEqual(arr1[i].alamat, arr2[j].alamat) === true) {
            arr3.push(arr2[i])
        }

    }
}

console.log(arr3);