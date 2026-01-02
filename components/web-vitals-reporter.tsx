'use client';

import { useEffect } from 'react';
import { onCLS, onFCP, onINP, onLCP, onTTFB, Metric } from 'web-vitals';

type Rating = 'good' | 'needs-improvement' | 'poor';

interface ExtendedMetric extends Metric {
  rating: Rating;
}

/**
 * Report Web Vitals metrics
 * Logs in development, can send to analytics in production
 */
function reportMetric(metric: ExtendedMetric): void {
  // Log in development
  if (process.env.NODE_ENV === 'development') {
    const color = metric.rating === 'good' ? '🟢' : metric.rating === 'needs-improvement' ? '🟡' : '🔴';
    console.log(`${color} ${metric.name}:`, {
      value: Math.round(metric.value * 100) / 100,
      rating: metric.rating,
    });
  }

  // In production, send to Google Analytics 4 (if available)
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
    gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_rating: metric.rating,
    });
  }
}

/**
 * Web Vitals Reporter Component
 * Add this to your layout to enable Core Web Vitals monitoring
 */
export function WebVitalsReporter(): null {
  useEffect(() => {
    // Register all Web Vitals metrics
    onCLS((metric) => reportMetric(metric as ExtendedMetric));
    onFCP((metric) => reportMetric(metric as ExtendedMetric));
    onINP((metric) => reportMetric(metric as ExtendedMetric));
    onLCP((metric) => reportMetric(metric as ExtendedMetric));
    onTTFB((metric) => reportMetric(metric as ExtendedMetric));
  }, []);

  // This component renders nothing
  return null;
}

export default WebVitalsReporter;
