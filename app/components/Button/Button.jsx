import Link from 'next/link';

export default function Button({textButton}) {
    return <Link href={""} target='_blank' className='w-fit rounded-full text-black bg-secondaryColor py-3 px-6 hover:bg-secondaryColorLight duration-300' >{textButton}</Link>;
}