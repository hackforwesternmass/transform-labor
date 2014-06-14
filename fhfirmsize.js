      function drawFirmSizeChart() {
        var data = google.visualization.arrayToDataTable([
          ['Firm Size', 'Share of Establishments', 'Share of Employees'],
          ['1-9',  68.9,   16.5],
          ['10-19',  10.9, 12.4],
          ['20-49',  6.6, 16.8],
          ['50-99',  1.9, 10.5],
          ['100-249', 1.3, 16.7],
          ['250-499', 0.3, 10.1],
          ['500+', 0.1, 17.0]
        ]);

        var options = {
          title: 'Employment by Firm Size',
          hAxis: {title: 'Firm Size'},
          vAxis: {title: 'Percentage of Total'},
          width: 700,
          height:700
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('firmsize-chart'));
        chart.draw(data, options);
      }
