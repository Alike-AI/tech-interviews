
const nested = {
  a: {
    b: {
      c: 42
    }
  }
};

function path(obj: any, path: string): any {
  return undefined; 
}

console.log(path(nested, 'a.b.c'));