         /////Task # 42 ////
//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians
//by adding the phrase the Great to each magician’s name. Call show_magicians()
//to see that the list has actually been modified.

let magician_name: string[] = ["Harry Houdini", "Peter nelson","Azur russel"]
function make_great() {
    magician_name.splice(3, 0, "The Great")
    console.log(magician_name)
}
make_great() 


