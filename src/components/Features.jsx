import {
  MagnifyingGlassIcon,
  ArrowLeftOnRectangleIcon,
  BriefcaseIcon,
  Cog8ToothIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  BuildingOfficeIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Login as Job Seeker",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: ArrowLeftOnRectangleIcon,
  },
  {
    name: "Create your company profile",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: Cog8ToothIcon,
  },
  {
    name: "Search for jobs",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Apply for jobs",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Post jobs as a company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Manage your company profile",
    description:
      "   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Manage your job postings",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: ClipboardDocumentIcon,
  },
  {
    name: "Hire talented job seekers",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: BriefcaseIcon,
  },
];

export default function Features() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            Get your first job faster
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Feature-rich tools to get you hired
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Whether you are a job seeker or a corporation, the system works
            seamlessly.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <feature.icon
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
