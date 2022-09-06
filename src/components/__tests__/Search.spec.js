import { describe, it, expect, beforeEach } from 'vitest';

import { mount } from '@vue/test-utils';
import Search from '../Search.vue';

describe('Search', () => {
  // only render once
  const wrapper = mount(Search, {
    computed: {
      locations() {
        return ['Bursa', 'Ankara', 'Istanbul', 'Remote'];
      },
    },
  });

  // clear selected value/option before each
  beforeEach(() => {
    const select = wrapper.find('select');
    select.element.value = '';
  });

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Ara');
  });

  it('select value is empty string by default on mount', () => {
    const select = wrapper.find('select');
    expect(select.element.value).toBe('');
  });

  it('select a value then it sets value correctly', async () => {
    const select = wrapper.find('select');
    await select.setValue('Bursa');

    expect(select.element.value).toBe('Bursa');
  });

  it('expect options length to be equal with computed value', () => {
    const options = wrapper.find('select').findAll('option');
    expect(options.length).toBe(5); // default one which shows label as "Şehir" also counts as option
  });

  it('expecting selected options checked value is true and equal', async () => {
    const select = wrapper.find('select');
    const options = select.findAll('option');
    await options.at(2).setSelected(); // simulate user event to select Ankara => [sehir, bursa, ankara, istanbul, remote]
    expect(wrapper.find('option:checked').element.value).toBe('Ankara'); // due to disabled option Sehir, indexes shifts by one
    expect(wrapper.find('option:checked').element.value).toBeTruthy(); // due to disabled option Sehir, indexes shifts by one
  });
});
