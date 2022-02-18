const arr = ['Peter', 'Alex', 'Mark', 'awfawf'];

function likes(names) {
  const result = [];
  switch (names.length) {
    case 0:
      result.push(`no one likes this`);
      break;
    case 1:
      result.push(`${names[0]} likes this`);
      break;
    case 2:
      result.push(`${names[0]} and ${names[1]} like this`);
      break;
    case 3:
      result.push(`${names[0]}, ${names[1]} and ${names[2]} like this`);
      break;
    default: 
    result.push(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`);
      break;
  }return result.join('').toString();
}

likes(arr);