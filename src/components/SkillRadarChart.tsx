import React, { useEffect, useState } from 'react';
import { 
  Chart as ChartJS, 
  RadialLinearScale, 
  PointElement, 
  LineElement, 
  Filler, 
  Tooltip, 
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { technologies } from '../constants';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface SkillRadarChartProps {
  isDarkMode: boolean;
}

const SkillRadarChart: React.FC<SkillRadarChartProps> = ({ isDarkMode }) => {
  const [chartData, setChartData] = useState<ChartData<'radar'>>({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    // Filter to include only a reasonable number of skills for the radar chart
    const radarSkills = technologies.slice(0, 8);
    
    setChartData({
      labels: radarSkills.map(tech => tech.name),
      datasets: [
        {
          label: 'Skill Proficiency',
          data: radarSkills.map(tech => tech.proficiency),
          backgroundColor: isDarkMode 
            ? 'rgba(99, 102, 241, 0.2)' 
            : 'rgba(99, 102, 241, 0.2)',
          borderColor: isDarkMode 
            ? 'rgba(129, 140, 248, 1)' 
            : 'rgba(79, 70, 229, 1)',
          borderWidth: 2,
          pointBackgroundColor: radarSkills.map(tech => tech.color),
          pointBorderColor: isDarkMode ? '#f3f4f6' : '#1f2937',
          pointHoverBackgroundColor: isDarkMode ? '#f3f4f6' : '#1f2937',
          pointHoverBorderColor: radarSkills.map(tech => tech.color),
        }
      ]
    });
  }, [isDarkMode]);

  const chartOptions: ChartOptions<'radar'> = {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          backdropColor: isDarkMode ? 'rgba(31, 41, 55, 0.7)' : 'rgba(255, 255, 255, 0.7)',
          color: isDarkMode ? '#d1d5db' : '#4b5563',
          font: {
            size: 12,
            weight: '500'
          }
        },
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        angleLines: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: isDarkMode ? '#f3f4f6' : '#1f2937',
          font: {
            size: 14,
            weight: '600',
            family: "'Inter', sans-serif",
          },
          padding: 16
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: isDarkMode ? '#f3f4f6' : '#1f2937',
          font: {
            size: 14,
            weight: '600'
          },
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: isDarkMode ? '#374151' : '#ffffff',
        titleColor: isDarkMode ? '#f3f4f6' : '#1f2937',
        bodyColor: isDarkMode ? '#d1d5db' : '#4b5563',
        borderColor: isDarkMode ? '#4b5563' : '#e5e7eb',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        usePointStyle: true,
        callbacks: {
          title: (items) => {
            if (!items.length) return '';
            const index = items[0].dataIndex;
            return technologies[index]?.name || '';
          },
          label: (context) => {
            return `Proficiency: ${context.parsed.r}%`;
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-[400px] p-4">
      <Radar data={chartData} options={chartOptions} />
    </div>
  );
};

export default SkillRadarChart;