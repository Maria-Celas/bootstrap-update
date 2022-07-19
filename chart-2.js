var yValues = [0,50,70,100,150,400,250,500,1000,2000];
    
    new Chart("single-line-chart", {
      type: "line",
      text:'Company Revenue',
      data: {
        labels: yValues,
        datasets: [{ 
          data: [0,60,30,200,100,250,200,350,300,400],
          pointRadius:0,
          borderColor: "#F06A42",
          fill: false
        }]
      },
      options: {   
        elements: {
        point: {
             borderColor: "rgb(0,0,0)",
           
         }
     },   

    
        legend: {display: false, position:'bottom', labels: { usePointStyle: true,
          pointStyle: 'line'
        }},
        scales: {
          yAxes: [{
              gridLines: {
                  color: "#ABA3D626",
              }   
          }],
          xAxes:[{
            ticks:{display:false},
            gridLines:{
              color:"#ABA3D626",
            }
          }]
        }
      }
    });