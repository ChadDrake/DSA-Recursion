function countSheep(sheep) {
  if (sheep === 0) {
    console.log("All sheep jumped over the fence");
    return;
  }
  console.log(`${sheep}: Another sheep jumps over the fence`);
  countSheep(sheep - 1);
}

//countSheep(3)

function powerCalculator(base, exponent) {
  if (exponent < 0) {
    return "exponent must be greater than 0";
  }
  if (exponent === 0) {
    return 1;
  }
  return base * powerCalculator(base, exponent - 1);
}

//powerCalculator(10, 3)

function reverseString(string) {
  if (string.length <= 1) {
    return string;
  }
  const newChar = string[0];
  return reverseString(string.slice(1)) + newChar;
}

//reverseString('Chad Drake')

function triangleNumber(num) {
  if (num <= 1) {
    return num;
  }
  return num + triangleNumber(num - 1);
}

//triangleNumber(13)

function stringSplitter(string, seperator, result = [""]) {
  if (string === "") {
    return result;
  }
  if (string[0] === seperator) {
    result.push("");
  } else {
    result[result.length - 1] += string[0];
  }
  return stringSplitter(string.slice(1), seperator, result);
}

//stringSplitter('02/20/2020', '/')

function fibonacci(num, result = []) {
  if (num <= 0) {
    return num;
  }
  let total = result[result.length - 1] + result[result.length - 2];
  if (!total) {
    result.push(1);
  } else {
    result.push(total);
  }
  fibonacci(num - 1, result);
  return result;
}

//fibonacci(7)

function factorial(num) {
  if (num === 1) {
    return num;
  }
  return num * factorial(num - 1);
}
//factorial(5)

function aWayOut(maze) {
  function pathFinder(column, row, path) {
    if (maze[column][row] === "e") {
      console.log(path);
      return path;
    } else if (maze[column][row] === " ") {
      console.log(column, row, path);
      maze[column][row] = "d";
      if (column < maze.length - 1) {
        path = path + "D";
        return pathFinder(column + 1, row, path);
      }
      if (row < maze[column].length) {
        path = path + "R";
        return pathFinder(column, row + 1, path);
      }
      if (column > 0) {
        path = path + "U";
        return pathFinder(column - 1, row, path);
      }
      if (row > 0) {
        path = path + "L";
        return pathFinder(column, row - 1, path);
      }
    }
    console.log("final", path);
    return path;
  }
  return pathFinder(0, 0, "");
}

// aWayOut([
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ])

function allWaysOut(maze) {
  function pathFinder(column, row, path, result) {
    if (maze[column][row] === "e") {
      result.push(path);
      path = "";

      maze[0][0] = " ";
      console.log(maze);
      pathFinder(0, 0, path, result);
      return result;
    } else if (maze[column][row] === " ") {
      console.log(column, row, path);
      maze[column][row] = "d";
      if (column < maze.length - 1) {
        path = path + "D";
        return pathFinder(column + 1, row, path, result);
      }
      if (row < maze[column].length) {
        console.log("called");
        path = path + "R";
        return pathFinder(column, row + 1, path, result);
      }
      if (column > 0) {
        path = path + "U";
        return pathFinder(column - 1, row, path, result);
      }
      if (row > 0) {
        path = path + "L";
        return pathFinder(column, row - 1, path, result);
      }
    }
    return result;
  }
  return pathFinder(0, 0, "", []);
}

//allWaysOut([
// [' ', ' ', ' '],
// [' ', '*', ' '],
// [' ', ' ', 'e']])

function anagrams(str) {
  let results = [];
  function traverse(str, checked = "") {
    if (!str) {
      results.push(checked);
    }
    for (let i = 0; i < str.length; i++) {
      traverse(str.slice(0, i) + str.slice(i + 1), checked + str[i]);
    }
  }
  traverse(str);
  return results;
}
anagrams("east");
