export default function Titulo(props) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-5 p-y-2 text-2xl">
        {props.children}
      </h1>
      <hr className="border-2 border-purple-500"/>
    </div>
  );
}
