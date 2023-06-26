const people = [
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    job: "Software Developer",
  },
  {
    name: "Jimmy Cooks",
    email: "jimmy.cooks@gmail.com",
    job: "UI/UX designer",
  },
  {
    name: "Jimmy Cooks",
    email: "jimmy.cooks@gmail.com",
    job: "UI/UX designer",
  },
  {
    name: "Jimmy Cooks",
    email: "jimmy.cooks@gmail.com",
    job: "UI/UX designer",
  },
  {
    name: "Jimmy Cooks",
    email: "jimmy.cooks@gmail.com",
    job: "UI/UX designer",
  },
  {
    name: "Jimmy Cooks",
    email: "jimmy.cooks@gmail.com",
    job: "UI/UX designer",
  },
  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ApplicationsTable() {
  return (
    <div className=''>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle'>
            <table className='min-w-full border-separate border-spacing-0'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8'
                  >
                    Name
                  </th>

                  <th
                    scope='col'
                    className='sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter'
                  >
                    Job
                  </th>
                  <th
                    scope='col'
                    className='sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8'
                  >
                    <span className='sr-only'>View</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  <tr key={person.email}>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      )}
                    >
                      {person.name}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"
                      )}
                    >
                      {person.email}
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      <a href='/' className='text-gray-600 hover:underline'>
                        {person.job}
                      </a>
                    </td>
                    <td
                      className={classNames(
                        personIdx !== people.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      )}
                    >
                      <button className='text-sm text-indigo-600'>
                        View application
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
