
const nested = {
  a: {
    b: {
      c: 42
    }
  }
};

function deref_path(obj: any, path_str: string): any {
  return undefined; 
}

console.log(deref_path(nested, 'a.b.c'));