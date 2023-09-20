function JobDescription({ data, date, title }) {
  return (
    <div className="bg-gradient-to-b from-teal-900 to-teal-600 text-white px-4 py-2 rounded-md my-8 mx-auto">
      <h1 className="text-center text-4xl py-1 mt-4">{title}</h1>
      <h2 className="text-center text-xl py-1 ml-4">{date}</h2>
      <ul className="py-2">
        {data.map((x, index) => {
          return (
            <li key={index} className="mt-5">
              {x}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default JobDescription;
