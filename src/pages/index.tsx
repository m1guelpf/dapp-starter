import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'

const Home: FC = () => {
	return (
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
				<div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
					<h1 className="text-6xl font-bold dark:text-white">{APP_NAME}</h1>
				</div>

				<div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
					<div className="grid grid-cols-1 md:grid-cols-2">
						<div className="p-6">
							<div className="flex items-center">
								<BookOpenIcon className="w-8 h-8 text-gray-500" />
								<div className="ml-4 text-lg leading-7 font-semibold">
									<a
										href="https://laravel.com/docs"
										className="underline text-gray-900 dark:text-white"
									>
										Next.js Docs
									</a>
								</div>
							</div>

							<div className="ml-12">
								<div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
									Next.js gives you the best developer experience with all the features you need for
									production: hybrid static &amp; server rendering, TypeScript support, smart
									bundling, route pre-fetching, and more. No config needed.
								</div>
							</div>
						</div>

						<div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
							<div className="flex items-center">
								<BookOpenIcon className="w-8 h-8 text-gray-500" />
								<div className="ml-4 text-lg leading-7 font-semibold">
									<a href="https://laracasts.com" className="underline text-gray-900 dark:text-white">
										wagmi Docs
									</a>
								</div>
							</div>

							<div className="ml-12">
								<div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
									wagmi is a collection of React Hooks containing everything you need to start working
									with Ethereum. wagmi makes it easy to display ENS and balance information, sign
									messages, interact with contracts, and much more — all with caching, request
									deduplication, and persistence.
								</div>
							</div>
						</div>

						<div className="p-6 border-t border-gray-200 dark:border-gray-700">
							<div className="flex items-center">
								<BookOpenIcon className="w-8 h-8 text-gray-500" />
								<div className="ml-4 text-lg leading-7 font-semibold">
									<a
										href="https://laravel-news.com/"
										className="underline text-gray-900 dark:text-white"
									>
										Tailwind Docs
									</a>
								</div>
							</div>

							<div className="ml-12">
								<div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
									Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of
									the building blocks you need to build bespoke designs without any annoying
									opinionated styles you have to fight to override.
								</div>
							</div>
						</div>

						<div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
							<div className="flex items-center">
								<CodeIcon className="w-8 h-8 text-gray-500" />
								<div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
									About this Template
								</div>
							</div>

							<div className="ml-12">
								<div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
									This starter kit is composed of{' '}
									<a href="https://nextjs.org" className="underline" target="_blank" rel="noreferrer">
										Next.js
									</a>{' '}
									and{' '}
									<a
										href="https://tailwindcss.com"
										className="underline"
										target="_blank"
										rel="noreferrer"
									>
										Tailwind CSS
									</a>
									, with{' '}
									<a
										href="https://rainbowkit.com"
										className="underline"
										target="_blank"
										rel="noreferrer"
									>
										RainbowKit
									</a>
									,{' '}
									<a href="https://ethers.org" className="underline" target="_blank" rel="noreferrer">
										ethers
									</a>{' '}
									&amp;{' '}
									<a href="https://wagmi.sh" className="underline" target="_blank" rel="noreferrer">
										wagmi
									</a>{' '}
									for all your web3 needs. It uses{' '}
									<a
										href="https://www.typescriptlang.org/"
										className="underline"
										target="_blank"
										rel="noreferrer"
									>
										Typescript
									</a>{' '}
									and an opinionated directory structure for maximum dev confy-ness. Enjoy!
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center mt-4 sm:items-center sm:justify-between">
					<div className="text-center text-sm text-gray-500 sm:text-left">
						<div className="flex items-center">
							<ShareIcon className="-mt-px w-5 h-5 text-gray-400" />

							<a href="https://twitter.com/m1guelpf" className="ml-1 underline">
								Share
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
