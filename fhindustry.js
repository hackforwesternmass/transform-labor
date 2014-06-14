    
	google.load('visualization', '1', {packages: ['motionchart']});

    function drawVisualization(dataFn, chartId) {
		var data = getData(dataFn);
		var chart = new google.visualization.MotionChart(
		     document.getElementById(chartId));
		var options = {};
		options['state'] = '{ "yLambda":1,"yZoomedDataMax":1,"xZoomedDataMin":0,"dimensions":{"iconDimensions":["dim0"]},"iconType":"BUBBLE","yAxisOption":"4","nonSelectedAlpha":0.4,"colorOption":"_UNIQUE_COLOR","xAxisOption":"3","orderedByX":false,"xZoomedIn":false,"iconKeySettings":[],"playDuration":15000,"xLambda":1,"yZoomedIn":false,"xZoomedDataMax":1369,"time":"2013","showTrails":false	,"sizeOption":"2","yZoomedDataMin":-0.5140489914,"duration":{"timeUnit":"D","multiplier":1},"uniColorForNonSelected":false,"orderedByY":false}';
		options['width'] = 800;
		options['height'] = 400;
		//options['showXMetricPicker'] = false;
		//options['showYMetricPicker'] = false;
		chart.draw(data, options);
    }

	function drawFH(){ 
		drawVisualization(
			function(data){
				data.addRows(getFrankHamp2012(data));
				data.addRows(getFrankHamp2011(data));
				data.addRows(getFrankHamp2010(data));
				data.addRows(getFrankHamp2009(data));
				data.addRows(getFrankHamp2008(data));
				data.addRows(getFrankHamp2007(data));
				data.addRows(getFrankHamp2006(data));
				data.addRows(getFrankHamp2005(data));
				data.addRows(getFrankHamp2004(data));
				data.addRows(getFrankHamp2003(data));
			},
			'fh-chart'
		); 
	}
	function reorderRow(row) {
		var newRow = [ row[0].replace(/ .*/i, ""), row[3], row[4], row[5], row[2], row[0] ];
		
		return newRow;
	}
	
	function reorder(data)
	{
		var newData = [];
		for (var i = 0; i < data.length; ++i) {
			newData.push(reorderRow(data[i]));
		}
		return newData;
	}
	
	function getCompData()
	{
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Id');
		data.addColumn('number', 'WagesWeekly');
		data.addColumn('number', 'Growth');
		data.addColumn('string', 'County');
		data.addColumn('number', 'Employment');
		data.addColumn('string', 'Industry');
		
		data.addRows(reorder(getFrankHamp2012(data)));
		data.addRows(reorder(getHampden2012(data)));

		return data;
	}
	
	function drawComp() {
	    // Create and populate the data table.
	    var data = getCompData();

	    var options = {
	      title: 'Comparison',
	      vAxis: {title: 'Growth'},
	      hAxis: {title: 'Wages'},
	      bubble: {textStyle: {fontSize: 11}}
	    };

	    // Create and draw the visualization.
	    var chart = new google.visualization.BubbleChart(
	        document.getElementById('comp-chart'));
	    chart.draw(data, options);
	}
	
	
