
const map =<A, B> (array:Array<A>, f:(a:A)=>B): Array<B> => {
  const result: Array<B> = [];
  for (const value of array) {
    result.push(f(value))
  }  
  return result;
}

type MapType<A, B> = (xs: Array<A>, f: (x: A) => B) => Array<B>;

type MapType1 = MapType<number, number>

type Compose<A, B, C> = (g: (y: B) => C, f: (x: A) => B) => (a: A) => C;

type Compose1 = Compose<string, number, boolean>;