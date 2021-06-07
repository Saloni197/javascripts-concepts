var Name = ['Kavita', 'Rohini', 'Mamta', 'Akshi'];
Name.sort(function (first, second) {
   if (first > second) return 1;
   else if (first < second) return -1;
   else return 0;
});
console.log(Name)