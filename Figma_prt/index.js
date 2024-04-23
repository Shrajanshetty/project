// dougnnut chart 1 script
Chart.defaults.color = '#272727';
// setup 
const datadougNut = {
  labels: ['Equity    94.5%','Cash      3.7%'],
  datasets: [{
    label: 'Holding Analysis',
    data: [94.5,3.7],
    backgroundColor: [
     'rgba(12, 151, 240, 1)',
     'rgba(242, 190, 72, 1)'
    ],
    cutout:'65%',
    hoverOffset:20
  }]
};
const doughnutLabel = {
  id: 'doughnutLabel',
  beforeDatasetsDraw(chart,args,pluginOptions){
      const{ctx,data} = chart;

      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.font = '15px popins';
      ctx.fillStyle = 'rgba(39, 39, 39, 1)';
      ctx.textAlign = 'center',
      ctx.fillText('₹3,494Cr.',xCoor,yCoor);
  }
 }

 //legend plugin
 const legendMargin1 ={
  id: 'legendMargin1',
  beforeInit(chart,legend,options){
    console.log(chart.legend.fit)
    const fitValue = chart.legend.fit

    chart.legend.fit = function fit(){
      fitValue.bind(chart.legend)();
      return this.width += 100;
    }
  }
};

// config 
const configdougnut = {
  type: 'doughnut',
  data: datadougNut,
  options: {
    layout:{
      padding:10
    },
    plugins:{
      legend:{
        position: 'left',
        align:'center',
        labels:{
          usePointStyle:true,
          pointStyle: 'circle',
          padding:25,
          font:{
          size: 16,
          weight:700
        },
        },
      }
    }
  },
  plugins:[legendMargin1,doughnutLabel],
};

// render init block
const doughNut = new Chart(
  document.getElementById('doughNut'),
  configdougnut
);



// dougnut chart 2 script
  Chart.defaults.color = '#000';
// setup 
const datadougNut2 = {
labels: ['Technology           84.8%','Communication    6.4%','Services                6.3%','Others                   2.5%'],
datasets: [{
  label: 'Equity sector allocation',
  data: [84.8,6.4,6.3,2.5],
  backgroundColor: [
   'rgba(12, 151, 240, 1)',
   'rgba(242, 190, 72, 1)',
   'rgba(149, 255, 219, 1)',
   'rgba(111, 221, 184, 1)'
  ],
  cutout:'65%',
  hoverOffset:20
}]
};

const doughnutLabel2 = {
id: 'doughnutLabel2',
beforeDatasetsDraw(chart,args,pluginOptions){
    const{ctx,data} = chart;

    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    ctx.font = '15px popins';
    ctx.fillStyle = 'rgba(39, 39, 39, 1)';
    ctx.textAlign = 'center',
    ctx.fillText('₹3,367Cr.',xCoor,yCoor);
}
}

//legend plugin
const legendMargin ={
  id: 'legendMargin',
  beforeInit(chart,legend,options){
    console.log(chart.legend.fit)
    const fitValue = chart.legend.fit

    chart.legend.fit = function fit(){
      fitValue.bind(chart.legend)();
      return this.width += 100;
    }
  }
};

// config 
const configdougnut2 = {
type: 'doughnut',
data: datadougNut2,
options: {
  layout:{padding:10},
  plugins:{
    legend:{
      position: 'left',
      align:'center',
      labels:{
        usePointStyle:true,
        pointStyle: 'circle',
        padding:25,
        font:{
          size:16,
          weight:700,
        },
      }
    }
  }
},
plugins: [legendMargin,doughnutLabel],
};

// render init block
const doughNut2 = new Chart(
document.getElementById('doughNut2'),
configdougnut2
);
