import Image from 'next/image';
import { getJob } from '@/sanity/sanity.query';
import type { JobType } from '@/types';
// Define the date type for better type checking
type DateType = string;

export default async function Job() {
	const job: JobType[] = await getJob();
	// Sort jobs chronologically with the most recent job first
	const sortedJobs = job.sort((a, b) => {
		const dateA = new Date(a.endDate || '9999-12-31').getTime();
		const dateB = new Date(b.endDate || '9999-12-31').getTime();
		return dateB - dateA;
	});

	// Add a function to format the date
	function formatDate(date: DateType): string {
		// Check if the date is available and not "present"
		if (date && date !== 'present') {
			// Use a date formatting library or JavaScript Date methods
			// Example using Intl.DateTimeFormat
			return new Intl.DateTimeFormat('en-US', {
				year: 'numeric',
				month: 'short',
			}).format(new Date(date));
		} else {
			// If the date is not available or set to "present"
			return 'Present';
		}
	}

	return (
		<section className="mt-32">
			<div className="mb-16">
				<h2 className="font-semibold text-4xl mb-4">Work Experience</h2>
			</div>

			<div className="flex flex-col gap-y-12">
				{job.map((data) => (
					<div
						key={data._id}
						className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[4.5rem] before:left-7 before:w-[1px] before:h-[calc(100%-50px)] before:bg-zinc-800"
					>
						<a
							href={data.url}
							rel="noreferrer noopener"
							className="min-h-[60px] min-w-[60px] rounded-md overflow-clip relative"
						>
							<Image
								src={data.logo}
								className="object-cover"
								alt={`${data.name} logo`}
								fill
							/>
						</a>
						<div className="flex flex-col items-start">
							<h3 className="text-xl font-bold">{data.name}</h3>
							<p>{data.jobTitle}</p>
							<small className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
								{formatDate(data.startDate)} -{' '}
								{data.endDate ? formatDate(data.endDate) : 'Present'}
							</small>
							<p className="text-base text-zinc-400 my-4">{data.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
