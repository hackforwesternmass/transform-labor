      function drawJ2WEmpLocChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Employment Location');
        data.addColumn('number', 'Number of People');
        data.addRows([
          ['Franklin/Hampshire', 72993],
          ['Hampden County', 16438],
          ['Berkshire County', 4742],
          ['Central Mass/Greater Worcester', 2802],
          ['North Central MA', 3029],
          ['Other Parts of MA', 2987],
          ['Other States', 6051]
        ]);

        // Set chart options
        var options = {title:'Employed Franklin/Hampshire Residents by Employment Location',
                       width:800,
                       height:600,
                       legend:'none',
                       pieSliceText:'label'};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('j2wemploc-chart'));
        chart.draw(data, options);
        }
        
        function drawJ2WResLocChart() {
                
        	var data = new google.visualization.DataTable();
			data.addColumn('string', 'Employment Location');
			data.addColumn('number', 'Number of People');
			data.addRows([
			  ['Franklin/Hampshire', 72993],
			  ['Hampden County', 16498],
			  ['Berkshire County', 1778],
			  ['Central Mass/Greater Worcester', 779],
			  ['North Central MA', 636],
			  ['Other Parts of MA', 1179],
			  ['Other States', 2815]
			]);
		
			var options = {title: 'Residency Location of People Working in Franklin/Hampshire',
					width:800,
                    height:600,
                    legend:'none',
                    pieSliceText:'label'};

		
			var chart2 = new google.visualization.PieChart(document.getElementById('j2wresloc-chart'));
			chart2.draw(data, options);
      }
