let classes = {
    PG: {
        MBA:50,
        MCA:40,
        MCOM:80
    },
    UG: ["BCOM","BBA","BCA"]
};
let {
    PG:{
        MBA,
        MCA,
        MCOM
    },
    UG:[cl1,cl2,cl3]
} = classes;
console.log(MBA);
console.log(MCA);
console.log(MCOM);
console.log(cl1);
console.log(cl2);
console.log(cl3);