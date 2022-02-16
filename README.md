# JavaScript Sudoku for Kids

The project is a simplified version of normal sudoku, with two levels, level one being a 4x4 grid and level two being a more challenging 9x9 grid

## How to play?

You can start by installing the project and run the "index.html" file in the HTML folder

![1](https://github.com/AhmedOkila/Sudoku-for-Kids/blob/main/Demo/1.png)

Then you get to the login page or where you write your username for us and your desired level to start playing!

![2](https://github.com/AhmedOkila/Sudoku-for-Kids/blob/main/Demo/2.png)

You're all set, you just need to choose a group of images that you would like to play the game with

![3](https://github.com/AhmedOkila/Sudoku-for-Kids/blob/main/Demo/3.png)

Now let's play!


![4](https://github.com/AhmedOkila/Sudoku-for-Kids/blob/main/Demo/4.png)

## Using localStorage

```javascript
localstorage.setItem("username"+"level",JSON.stringify(userInfo));

//To be used in 2 levels with an object
//Object:

let userInfo = {
  //userinfo as object for local storage
  username: userName,
  score: time,
  lastplayed: date + ":" + exacttime,
  highscore: highscore,
  level: level,
};

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.