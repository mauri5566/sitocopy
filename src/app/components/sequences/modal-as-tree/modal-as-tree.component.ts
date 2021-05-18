import { Component, OnInit, Inject } from '@angular/core';
import { Options } from 'highcharts';
import * as Highcharts from 'highcharts';
import { Sequence } from 'src/app/model/sequence';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Edge } from 'src/app/model/edge';
import { TreeNode, TreeNodeWithChildren, TreeNodeWithValue } from 'src/app/model/treeNode';
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
  edges: Edge[] = [];

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
				data: [{
					from: 'ciao',
					to: 'buongiorno',
					weight: 2
				},
				{
					from: 'buongiorno',
					to: 'steronzo',
					weight: 2
				}],
				nodes: [{
					id: 'ciao',
					color: 'green',
				},
				{
					id: 'buongiorno',
					color: 'red',
				
				}],
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

	isTreeNodeWithChildren(node: TreeNodeWithChildren|TreeNodeWithValue): node is TreeNodeWithChildren{
		return (node as TreeNodeWithChildren).children !== undefined;
	}

	cleanLabel(name: string){
		name = name.replace('ROOT', '.')
					.replace('AS-', '');
	}

	addEdge(from: string, to: string, edges: Edge[], parent: TreeNodeWithChildren, value: number){
		
	}

	funzioneDellaMadonna(data: TreeNodeWithChildren|TreeNodeWithValue, edges: Edge[], parent: TreeNodeWithChildren){
		const from = data;
		this.cleanLabel(from.name)
		if(this.isTreeNodeWithChildren(data)){
			for (const to of data.children || []){
				if(this.isTreeNodeWithChildren(to)){
					const newParent = this.addEdge(from.name, to.name, this.edges, parent, 1);
				}
				else{
					const newParent = this.addEdge(from.name, to.name, this.edges, parent, to.value);
				}
				this.funzioneDellaMadonna(to, this.edges, newParent);
			}
		}
	}



  constructor(@Inject(MAT_DIALOG_DATA) public data: Sequence) { }

  ngOnInit(): void {
	  this.update = true;
	  this.show = true;

  }

}
