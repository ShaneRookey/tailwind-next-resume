function JobDescription({data, date, title}) {
    return ( 
        <div className="bg-gradient-to-r from-teal-900 to-teal-600 text-white px-4 py-2 rounded-md ml-8 mt-8 mb-4">
            <h1 className='text-4xl py-1 mt-4'>{title}</h1>
            <h2 className="text-xl py-1 ml-4">{date}</h2>
            <ul className="py-2">
                {data.map((x, index) => {
                    return <li key={index} className="mt-5">{x}</li>
                })}
            </ul>
        </div>
    );
}

export default JobDescription;