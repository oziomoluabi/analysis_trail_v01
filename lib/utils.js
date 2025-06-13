// lib/utils.js

/**
 * Wraps long labels for Chart.js axes to prevent overlap.
 * @param {string[]} labels - Array of label strings.
 * @param {number} chars - The maximum number of characters per line.
 * @returns {string[][]} - Array of arrays, where each inner array represents lines of a label.
 */
export const wrapLabels = (labels, chars) => {
    if (!Array.isArray(labels)) return [];
    return labels.map(label => {
        if (typeof label !== 'string') {
            return String(label); // Ensure label is a string
        }
        if (label.length <= chars) {
            return label;
        }
        const words = label.split(' ');
        const lines = [];
        let currentLine = '';
        words.forEach((word) => {
            if ((currentLine + ' ' + word).trim().length > chars) {
                lines.push(currentLine.trim());
                currentLine = word;
            } else {
                currentLine += ' ' + word;
            }
        });
        lines.push(currentLine.trim());
        return lines;
    });
};

/**
 * Common chart options for a consistent, console-like theme.
 */
export const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        duration: 1200,
        easing: 'easeInOutCubic',
    },
    plugins: {
        tooltip: {
            enabled: true,
            backgroundColor: 'rgba(15, 23, 42, 0.95)', // slate-900 with opacity
            borderColor: '#38b2ac', // teal-500
            borderWidth: 1,
            titleFont: { size: 14, family: "'Inter', sans-serif", weight: 'bold' },
            bodyFont: { size: 12, family: "'Inter', sans-serif" },
            padding: 12,
            cornerRadius: 0,
            callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.formattedValue !== null) {
                        const datasetLabel = context.dataset.label;
                        // Automatically add '%' if the dataset label suggests it's a percentage
                        if (typeof datasetLabel === 'string' && (datasetLabel.includes('%') || datasetLabel.includes('Rate') || datasetLabel.includes('Prevalence'))) {
                             label += context.formattedValue + '%';
                        } else {
                             label += context.formattedValue;
                        }
                    }
                    return label;
                }
            },
        },
        legend: {
            position: 'top',
            labels: {
                color: '#cbd5e1', // slate-300
                font: { family: "'Inter', sans-serif", size: 12 },
                padding: 20,
                boxWidth: 12,
                usePointStyle: true,
            }
        },
        title: {
            display: true,
            text: 'Default Chart Title', // This should be overridden
            font: { size: 16, weight: '600', family: "'Inter', sans-serif" },
            color: '#63b3ed', // sky-400
            padding: {
                top: 10,
                bottom: 20
            }
        }
    },
    scales: {
        x: {
            ticks: { 
                color: '#94a3b8', // slate-400
                font: { family: "'Inter', sans-serif" } 
            },
            grid: { 
                color: 'rgba(71, 85, 105, 0.3)', // slate-500 with opacity
                drawBorder: false,
            },
            title: { 
                display: false, 
                color: '#e2e8f0', // slate-200
                font: { family: "'Inter', sans-serif", size: 12, weight: 'bold' } 
            }
        },
        y: {
            ticks: { 
                color: '#94a3b8', // slate-400
                font: { family: "'Inter', sans-serif" },
            },
            grid: { 
                color: 'rgba(71, 85, 105, 0.3)', // slate-500 with opacity
                drawBorder: false,
            },
            title: { 
                display: false, 
                color: '#e2e8f0', // slate-200
                font: { family: "'Inter', sans-serif", size: 12, weight: 'bold' }
            }
        }
    }
};
