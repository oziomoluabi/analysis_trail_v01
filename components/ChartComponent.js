'use client';

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ chartId, type, data, options, footerText, className = '' }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        let observer;
        const canvas = chartRef.current;
        if (!canvas) return;
        
        const renderChart = () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            try {
                Chart.defaults.font.family = "'Inter', sans-serif";
                Chart.defaults.color = '#e2e8f0'; 
                Chart.defaults.borderColor = '#475569'; 

                const ctx = canvas.getContext('2d');
                chartInstance.current = new Chart(ctx, {
                    type: type,
                    data: data,
                    options: options,
                });
            } catch (error) {
                console.error(`Error initializing chart ${chartId}:`, error);
            }
        };
        
        // Use Intersection Observer to delay rendering until the chart is visible.
        // This improves initial page load performance.
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        renderChart();
                        observer.unobserve(canvas); // Stop observing once rendered
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        observer.observe(canvas);

        return () => {
            if (observer && canvas) {
                observer.unobserve(canvas);
            }
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [type, data, options, chartId]); 

    return (
        <div className={`chart-container bg-slate-800 border border-slate-700 flex flex-col justify-between p-0 rounded-none h-full ${className}`}>
            <div className="chart-canvas-wrapper flex-grow flex items-center justify-center p-4 min-h-[350px]">
                <canvas ref={chartRef} id={chartId}></canvas>
            </div>
            {footerText && (
                <div className="chart-info-footer bg-slate-900/50 border-t border-slate-700 p-2 text-xs text-slate-400 text-right">
                    {`//: ${footerText}`}
                </div>
            )}
        </div>
    );
};

export default ChartComponent;
