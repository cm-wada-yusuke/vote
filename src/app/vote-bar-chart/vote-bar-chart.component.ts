import {Component, OnInit} from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3TimeFormat from 'd3-time-format';
import {VoteDataService} from './vote-data.service';
import {Vote} from './data';

@Component({
  selector: 'app-vote-bar-chart',
  templateUrl: './vote-bar-chart.component.html',
  styleUrls: ['./vote-bar-chart.component.css']
})
export class VoteBarChartComponent implements OnInit {

  subtitle = 'Bar Chart';
  private Votes: Vote[];

  private margin = {top: 20, right: 20, bottom: 100, left: 50};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private dateFormat = d3TimeFormat.timeFormat('%Y-%m-%d');

  constructor(private voteDataService: VoteDataService) {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.initData().then(() => {
      this.initSvg();
      this.initAxis();
      this.drawAxis();
      this.drawBar();
    });
  }

  private initData(): Promise<Vote[]> {
    return this.voteDataService.getVotes('MI12341011').then(votes => this.Votes = votes);
  }

  private initSvg() {
    this.svg = d3.select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  /**
   * x軸: rangeRoundで対象領域を指定（利用可能領域いっぱい）、要素間の余白を0.05に指定
   * y軸: rangeで対象領域を指定
   * x軸ドメイン: データオブジェクトのvoteDateを使う
   * y軸ドメイン: データオブジェクトのvalueを使う。リニアで指定しているので最小値と最大値さえ渡せば良い。
   */
  private initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(.35);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(this.Votes.map((d) => new Date(d.voteDate)));
    this.y.domain([0, d3Array.max(this.Votes, (d) => d.value)]);
  }

  private drawAxis() {

    /**
     * X軸描画。
     */
    this.svg.append('g')
      .attr('class', 'axis axis--x').attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x).tickFormat(this.dateFormat))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em').attr('dy', '-.55em').attr('transform', 'rotate(-90)');

    /**
     * Y軸描画。
     */
    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y));
  }

  /**
   * 棒グラフを描画。
   */
  private drawBar() {
    this.svg.selectAll('bar')
      .data(this.Votes)
      .enter().append('rect')
      .style('fill', 'DodgerBlue')
      .attr('class', 'bar')
      .attr('x', (d: any) => {
        return this.x(new Date(d.voteDate));
      })
      .attr('y', (d: any) => {
        return this.y(d.value);
      })
      .attr('width', this.x.bandwidth())
      .attr('height', (d: any) => {
        return this.height - this.y(d.value);
      });
  }

}
