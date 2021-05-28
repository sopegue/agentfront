const labels = [
  'Jan.',
  'Fév.',
  'Mar.',
  'Avr.',
  'Mai',
  'Juin',
  'Juill.',
  'Août',
  'Sep.',
  'Oct.',
  'Nov.',
  'Déc.',
]

const data = {
  labels,
  datasets: [
    {
      label: 'Messages',
      backgroundColor: 'rgb(0, 132, 137)',
      borderColor: 'rgb(0, 132, 137)',
      hoverBackgroundColor: 'rgb(1, 108, 112)',
      hoverBorderColor: 'rgb(1, 108, 112)',
      data: [0, 10, 5, 2, 20, 30, 45, 45, 9, 10, 99, 1000],
    },
    {
      label: 'Visites',
      backgroundColor: 'rgb(255, 19, 19)',
      hoverBackgroundColor: 'rgb(207, 14, 14)',
      hoverBorderColor: 'rgb(207, 14, 14)',
      borderColor: 'rgb(255, 19, 19)',
      data: [0, 10, 5, 2, 20, 30, 45, 45, 9, 10, 99, 1000],
    },
  ],
}
const config = {
  type: 'bar',
  data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Visites et Messages',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
}
export { config }
