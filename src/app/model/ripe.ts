export interface Ripe{
	version: string;
	data_call_status: string;
	cached: boolean;
	data: {
		is_less_specific: boolean,
		announced: boolean,
		asns: [{asn: number,
				holder: string}];
		related_prefixes: [];
		resource: string;
		type: string;
		block: {
			resource: string;
			desc: string;
			name: string;
		};
		actual_num_related: number;
		query_time: string;
		num_filtered_out: number;
	}
	query_id: string;
    process_time: number;
    server_id: string;
    build_version: string;
    status: string;
    status_code: number;
    time: string;
}