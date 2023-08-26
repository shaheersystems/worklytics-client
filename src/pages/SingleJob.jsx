import { Fragment } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { useParams } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SingleJob() {
  const { id } = useParams();
  return (
    <div className='max-w-[1220px] m-auto'>
      <div className='lg:flex py-10 lg:items-center lg:justify-between'></div>
    </div>
  );
}
