export default function Playground(props: any) {
  return (
    <>
      <h1>여기는 Playground</h1>
    </>
  );
}

export async function getServerSideProps() {
  console.log("Playground 1");
  let rs = await delay(2000);
  console.log("Playground 2", rs);
  return {
    props: {}, // will be passed to the page component as props
  };
}

let delay = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(true);
    }, time);
  });
};
