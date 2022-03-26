# instruksi 

Hilangkan Duplikasi data
level:it's fucking so hard :v

akan ada duah buah array ,gabungkan 2 array tersebut menjadi 1 array tetapi jika ada value yang sama pada 2 array tersebut di object apapun itu baik nama,telepon,maupun alamat,maka akan dipilih di array2

data sudah disiapkan di file array1.js dan array2.js
silahkan di import file nya di index.js lalu index js nya di panggil di file HTML tampilkan hasilnya di console.log saja


# contoh

array1=[
    {
        nama:rangga,
        telepon:1101,
        alamat:jakarta, 
    },
    {
        nama:dea,
        telepon:1103,
        alamat:Medan,
    },
    {
        nama:dora,
        telepon:1104,
        alamat:Makasar,
    }
]



array2=[
    {
        nama:budi,
        telepon:1105,
        alamat:Bandung,
    },
    {
        nama:lolita,
        telepon:1103,
        alamat:aceh,
    },
    {
        nama:zilong,
        telepon:1106,
        alamat:jakarta,
    }
]


====
Note : Rangga dan dea di nyatakan sebagai duplikat data karena alamat di object rangga sama dengan alamat di object zilong,telepon di object dea sama dengan telepon di object lolita,maka dari itu dea dan rangga tidak muncul di output

output=[
    {
        nama:zilong,
        telepon:1106,
        alamat:jakarta,
    },
   {
        nama:lolita,
        telepon:1103,
        alamat:aceh,
    },
    {
        nama:dora,
        telepon:1104,
        alamat:Makasar,
    },
     {
        nama:budi,
        telepon:1105,
        alamat:Bandung,
    },
]

