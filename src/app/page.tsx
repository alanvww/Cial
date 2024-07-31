'use client';
// pages/index.js
import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { UploadCloud, Download, Moon, Sun } from 'lucide-react';

export default function Home() {
	const [csvType, setCsvType] = useState('partiful');
	const [parsedData, setParsedData] = useState(null);

	const handleDrop = (e) => {
		e.preventDefault();
		const file = e.dataTransfer.files[0];
		parseCSV(file);
	};

	const handleFileInput = (e) => {
		const file = e.target.files[0];
		parseCSV(file);
	};

	const parseCSV = (file) => {
		Papa.parse(file, {
			header: true,
			complete: (results) => {
				let jsonData;
				switch (csvType) {
					case 'partiful':
						jsonData = results.data.map((row) => {
							const nameParts = row.Name.split(/\s+/);
							return {
								firstname: nameParts[0] || '',
								lastname: nameParts.slice(1).join(' ') || '',
								phone: 'N/A',
								email: 'N/A',
							};
						});
						break;
					case 'luma':
						jsonData = results.data.map((row) => {
							const nameParts = row.name.split(/\s+/);
							return {
								firstname: nameParts[0] || '',
								lastname: nameParts.slice(1).join(' ') || '',
								phone: row.phone_number || '',
								email: row.email || '',
							};
						});
						break;
					case 'eventbrite':
						jsonData = results.data.map((row) => ({
							firstname: row['First Name'] || '',
							lastname: row['Last Name'] || '',
							phone: row['Cell Phone'] || '',
							email: row['Email'] || '',
						}));
						break;
					default:
						jsonData = [];
				}
				setParsedData(jsonData);
			},
		});
	};

	const downloadJSON = () => {
		if (!parsedData) return;

		const jsonString = JSON.stringify(parsedData, null, 2);
		const blob = new Blob([jsonString], { type: 'application/json' });
		const href = URL.createObjectURL(blob);

		const link = document.createElement('a');
		link.href = href;
		link.download = 'parsed_data.json';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(href);
	};

	return (
		<div className={`min-h-screen `}>
			<div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
				<div className="max-w-3xl mx-auto">
					<div className="flex justify-between items-center mb-8">
						<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
							CSV Parser
						</h1>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
							Select CSV Type
						</label>
						<select
							value={csvType}
							onChange={(e) => setCsvType(e.target.value)}
							className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors duration-200"
						>
							<option value="partiful">Partiful</option>
							<option value="luma">Luma</option>
							<option value="eventbrite">Eventbrite</option>
						</select>
					</div>

					<div
						onDrop={handleDrop}
						onDragOver={(e) => e.preventDefault()}
						className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md transition-colors duration-200"
					>
						<div className="space-y-1 text-center">
							<UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
							<div className="flex text-sm text-gray-600 dark:text-gray-400">
								<label
									htmlFor="file-upload"
									className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 dark:focus:ring-offset-gray-900 transition-colors duration-200"
								>
									<span>Upload a file</span>
									<input
										id="file-upload"
										name="file-upload"
										type="file"
										className="sr-only"
										onChange={handleFileInput}
										accept=".csv"
									/>
								</label>
								<p className="pl-1">or drag and drop</p>
							</div>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								CSV files only
							</p>
						</div>
					</div>

					{parsedData && (
						<div className="mt-8">
							<h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
								Parsed Data
							</h2>
							<div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg transition-colors duration-200">
								<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
									<thead className="bg-gray-50 dark:bg-gray-700">
										<tr>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
												First Name
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
												Last Name
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
												Phone
											</th>
											<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
												Email
											</th>
										</tr>
									</thead>
									<tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
										{parsedData.map((item, index) => (
											<tr
												key={index}
												className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
											>
												<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
													{item.firstname}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
													{item.lastname}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
													{item.phone}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
													{item.email}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div className="mt-4 flex justify-end">
								<button
									onClick={downloadJSON}
									className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900 transition-colors duration-200"
								>
									<Download className="mr-2 h-4 w-4" />
									Download JSON
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
