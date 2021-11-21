import { Component, NgModule, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';
import { ExpensesService } from '../services/expenses-service';

@Component({
  selector: 'dashboard',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

@NgModule({
  declarations: [
  ],
  providers: [ExpensesService]
})
export class DashBoardComponent implements OnInit {

  public title = 'Line Chart';
  private data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];
  private svg;
  private svgtwo;
  private margin = 50;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;
  private colors;
  dataArray;

  
  
  constructor(private expenseService : ExpensesService) { 
  }

  ngOnInit() {
    // load data into array
    this.loadData();

    this.createSvg();
    this.createColors();
    this.drawChart();

    //create second svgtwo
    this.createSvgTwo();
    this.drawBarChart();
  }

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2 + ")"
    );
}

private createSvgTwo() {
  this.svgtwo = d3.select("figure#barchart")
  .append("svg")
  .attr("width", this.width)
  .attr("height", this.height);
}

private createColors(): void {
  this.colors = d3.scaleOrdinal()
  .domain(this.data.map(d => d.Stars.toString()))
  .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
}

private drawChart(): void {
  // Compute the position of each group on the pie:
  const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

  // Build the pie chart
  this.svg
  .selectAll('pieces')
  .data(pie(this.data))
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(0)
    .outerRadius(this.radius)
  )
  .attr('fill', (d, i) => (this.colors(i)))
  .attr("stroke", "#121926")
  .style("stroke-width", "1px");

  // Add labels
  const labelLocation = d3.arc()
  .innerRadius(100)
  .outerRadius(this.radius);

  this.svg
  .selectAll('pieces')
  .data(pie(this.data))
  .enter()
  .append('text')
  .text(d => d.data.Framework)
  .attr("transform", d => "translate(" + labelLocation.centroid(d) + ")")
  .style("text-anchor", "middle")
  .style("font-size", 15);
}
  private drawBarChart() {

    // this appends all the rect based on the array that was passed in the data
    this.svgtwo.selectAll("rect")
    .data(this.dataArray)
    .enter()
    .append("rect")
    .attr( "fill", "#0080FF")
    .attr("height", function(d, i) {return (d *10)})
    .attr("width","40")
    .attr("x", function(d, i) {return i * 60;})
    .attr("y",function(d, i) {return 400 - (d * 10)})
    .attr("stroke", "black")
    .attr("stroke-width", "3");


    //this controls the numbers at the top of the chart
    this.svgtwo.selectAll("text")
    .data(this.dataArray)
    .enter().append("text")
    .text(function(d) {return d;})
    .attr("x", function(d, i) {return (i * 60) + 10})
    .attr("y", function(d, i) {return 400 - (d * 10 + 5)});
  }

  loadData() {
    this.expenseService.getExpensesByCategoryCode().subscribe( resp => {
      this.dataArray = resp;
    }, error => {
      console.error(error);
    });
  }
}
