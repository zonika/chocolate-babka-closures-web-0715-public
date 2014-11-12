---
  tags: closures, scope
  languages: JavaScript, js
  resources: 1
---

# Chocolate Babka
You're running late to a dinner party, you need to bring something.  Why not a chocolate babka? Sure, cinnamon has it's good qualities but you want chocolate.  The only problem is the bakery's ticket machine is broken.  You're smart, enterprising engineer, so you make a deal with the owner that if you get it working you can have your Babka free of charge.

![Yeah, yeah this photo isn't from the right episode.](http://www.quickmeme.com/img/27/27aa816144b2b20b96d7fdeb5e1cc1a1ebbe868ccbecea807fd75761e6ac2a79.jpg)

This is your moment to shine, no Pepsi and Ring Dings for you.  You're an adult you're gonna get a chocolate babka and a nice bottle of wine to impress your friends.  You just need to understand JavaScript closures first.

# Closures
Closures are like small snapshots of the scope of a function at a certain place in time.  This is achieved by returning an anoymous function from within a function.  Variables defined within that outer function will be within scope for the inner function that is returned.  We can then call the returned inner function, which will access the variable stoed in its closure.

ex.
```javascript
function idMaker(phrase) {
  var greeting = phrase;
  
  // this inner function has access to the outer function's variables including the parameter
  return function(firstName, lastName){
    return greeting + firstName + ' ' + lastName + '.';
  };
}

var labelMaker = idMaker('Hello, my name is ');

labelMaker('Tristan', 'Siegel');
// -> 'Hello, my name is Tristan Siegel'

labelMaker('Steven', 'Nunez');
// -> 'Hello, my name is Steven Nunez'
```

The code above works because we saved the returned function to a variable, making it a function expression. And we store in a variable, along with the returned inner function, the `greeting` variable.  Therefore, the returned function now has saved access to the `greeting` variable that is out of direct scope to us.

# Requirements
Your counter will need to start at a number based on what is passed in. It must then return a function that, when called, will increment number that was passed in.

Also, the baker has realized that she will need a seperate counter for the babkas since they are so popular.  This __doesn't__ mean you need to make a new function for the babka counter. However, to make sure customers know which number is being served, you will need to make a second function that accepts the returned closure as an argument as well as a string to announce which line is being served.

##Before You Start
Install jasmine:
  ```shell
  $ gem sources -a http://flatiron:33west26@gems.flatironschool.com
  $ gem install ironboard
  ```
Run Jasmine test suite:
  ```shell
  $ ironboard  # runs only in the terminal
  $ ironboard -b # runs also in the browser
  ```

## Resources
* [Closures](http://javascriptissexy.com/understand-javascript-closures-with-ease/)