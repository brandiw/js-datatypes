

* Determine the total cumulative gross of the Bond franchise, and console.log the result. _hint_ To make the grosses into usable numbers, look into the `.replace` Javascript method (there are many ways to do this, however). Look into `parseInt` also.

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"7th commit - determined the bond films gross".
<hr>


# CSS

You will be using these CSS skills for tomorrow’s Morning Exercise. You watched these videos this weekend, but we recommend reviewing them again before morning exercise.

* [Box Model](https://www.youtube.com/watch?v=HNgdhp1_kEE&index=6&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 7:17

* [CSS Display](https://www.youtube.com/watch?v=qjSe_K3agYc&index=7&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 6:24

* [Positioning](https://www.youtube.com/watch?v=zH8kjJdvmOs&index=8&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 11:57

* [Units of measure I](https://www.youtube.com/watch?v=5axuSSBIMuQ&index=9&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 10:25

* [Units of measure II](https://www.youtube.com/watch?v=ZfxNpQm6m2g&index=10&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 14:27

#### Congrats! You have completed the homework

<br>
<hr>

# Hungry For More?

CHALLENGE

`bondFilms` again!

- Console log the single movie **object** that contains the actor who starred in the least number of films.

Expected result:

```
{ "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" }
```

You should arrive at this result by comparing the frequency of actors.

_hint:_ Objects by definition have **unique** keys. Later in the problem you could create a new object wherein all the Bond actors are keys, and unique, with no doubles.

_another hint:_ You might come to a place where you will want to iterate over an object. You can iterate over arrays, but did you know you can iterate over objects?

You can either use `Object.keys()`, documentation [here - Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

Or, you can use a `for ... in` loop, documentation [here - for ... in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

<br>

### More on `for ... in`

The syntax for iterating over an object with `for ... in` is:

```
for (let key in obj) {
    // stuff, such as console.log(key)
}
```

Where `key` is a variable that instantiates for the keys in object, and `obj` is the name
of the object you are iterating over. So, if you just wanted to console.log all the **keys** in the first bondFilms object, you could write:

```
for (let key in bondFilms[0]) {
    console.log(key);
}
```

Also remember, you can use a variable to access a key in an object, with bracket notation:

`obj[key]` will look for the property in the object that corresponds to whatever the
variable `key` is. This is very different to the syntax `obj['key']` (notice the quotes) that will look for a key _named_ key, rather than a variable.

To print all of the **values** in the first bondFilms object, you could write:

```
for (let key in bondFilms[0]) {
    console.log(bondFilms[0][key]);
}
```
Good luck!

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"8th commit - Humdinger".
<hr>

## Hungry For Even More?

* Complete this morning's lab

* Complete this afternoon's lab
