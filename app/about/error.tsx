"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      THis aint laoding up {error.message}
      <button onClick={() => reset()}>Reload me</button>
    </div>
  );
}


// export default function Noop({nthin}:{nthin:string}){
//   return (<>noop</>)
// }