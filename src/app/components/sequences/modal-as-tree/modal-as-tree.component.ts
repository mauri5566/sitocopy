import { Component, OnInit, Inject } from '@angular/core';
import { Options } from 'highcharts';
import * as Highcharts from 'highcharts';
import { Sequence } from 'src/app/model/sequence';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Edge } from 'src/app/model/edge';
import { TreeNode } from 'src/app/model/treeNode';
import { trace } from 'console';

@Component({
  selector: 'app-modal-as-tree',
  templateUrl: './modal-as-tree.component.html',
  styleUrls: ['./modal-as-tree.component.css']
})
export class ModalAsTreeComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  highChart!: Highcharts.Chart | null;
  update = false;
  show = false;
  edges: any[] = [];

  chartOptions: Options = {
    chart: {
		type: 'sankey',
				marginLeft: 50,
				marginRight: 50,
				marginBottom: 100,
				marginTop: 100,
				height: 600,
				// width: 400,
				inverted: false
			},
			title: {
				text: 'AS Tree'
			},
			accessibility: {
				point: {
					valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
				}
			},
			series: [{
				dataLabels: {
					enabled: true,
				},
				clip: false,
				// minLinkWidth: 1,
				// minPointLength: 1,
				keys: ['from', 'to', 'weight', 'id'],
				// colors,
				data: [/*{
					from: 'ciao',
					to: 'buongiorno',
					weight: 2
				},
				{
					from: 'buongiorno',
					to: 'steronzo',
					weight: 2
				}*/],
				nodes: [/*{
					id: 'ciao',
					color: 'green',
				},
				{
					id: 'buongiorno',
					color: 'red',
				
				}*/],
				type: 'sankey',
				name: ''
			}]

		}
	
	/*determineType(toBeDetermined: TreeNodeWithChildren|TreeNodeWithValue): toBeDetermined is TreeNodeWithChildren {
  		if((toBeDetermined as TreeNodeWithChildren)){
    		return true
  		}
  		return false
	}

	printType(toBePrinted: TreeNodeWithChildren|TreeNodeWithValue){
  		if(this.determineType(toBePrinted)){
    		console.log(toBePrinted.type) //toBePrinted is an Animal
  }
  else {
    console.log("human")
  }
}*/

/*	isTreeNodeWithChildren(node: TreeNodeWithChildren|TreeNodeWithValue): node is TreeNodeWithChildren{
		return (node as TreeNodeWithChildren).children !== undefined;
	}*/

	cleanLabel(name: string){
		name = name.replace('ROOT', '.')
					.replace('AS-', '');
	}

/*	addValueToParent(parent: TreeNodeWithChildren, value: number){
		if (parent) {
			parent.weight += value;
		return addValueToParent(parent.parent, value);
	}
};*/


	addEdge(from: string, to: string, tree: any[], /*parent: TreeNodeWithChildren*/ value: number){
		const key = parseInt([from, to].sort().join('-'));
		if (!tree[key]) {
			tree[key] = { from, to, weight: value };
		}

		/*if (value > 1) {
			addValueToParent(tree[key].parent, value);
		}

		return tree[key];*/

		tree[0] = {from, to, weight: 1};
	}

	funzioneDellaMadonna(data: TreeNode, edges: any[]/*, parent: TreeNodeWithChildren*/){
		const from = data;
		this.cleanLabel(from.name)
		for (const to of data.children){
					this.addEdge(from.name, to.name, this.edges/*, parent*/, 1);
				this.funzioneDellaMadonna(to, this.edges/*, newParent*/);
		}
	}



  constructor(@Inject(MAT_DIALOG_DATA) public data: Sequence) { }

  ngOnInit(): void {
	  this.update = true;
	  this.show = true;
	  this.funzioneDellaMadonna(this.data.asTreeWithoutAggregator.head, this.edges);
	  this.chartOptions.series = [{
		dataLabels: {
			enabled: true,
		},
		clip: false,
		keys: ['from', 'to', 'weight', 'id'],
		data: this.edges,
		type: 'sankey',
		name: ''
	  }]


  }

  ngAfterViewInit(): void {
	  setInterval(() => {console.log(this.data); }, 1000)
  }

}
