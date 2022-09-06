import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import JobGridByType from '../JobGridByType.vue';

describe('JobGridByType', () => {
  it('renders properly', () => {
    const wrapper = mount(JobGridByType);
    expect(wrapper.text()).toContain('pozisyon');
  });

  it('renders first job-row static items as 3', () => {
    const wrapper = mount(JobGridByType);
    const jobRow = wrapper.find('.job-row').findAll('.job-grid-item');
    expect(jobRow.length).not.toBe(6);
    expect(jobRow.length).toBe(3);
  });

  it('renders 6 job items as static', () => {
    const wrapper = mount(JobGridByType);
    const jobRow = wrapper.findAll('.job-grid-item');
    expect(jobRow.length).toBe(6);
  });
});
