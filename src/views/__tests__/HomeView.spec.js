import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import HomeView from '../HomeView.vue';

describe('HomeView.vue', async () => {
  it('search value works as expected', async () => {
    const wrapper = mount(HomeView, {});
    const textInput = wrapper.find('input[type="text"]');
    await textInput.setValue('f com');
    expect(textInput.element.value).toBe('f com');
  });

  it('select value is empty string by default on mount', () => {
    const wrapper = mount(HomeView);
    const select = wrapper.find('select');
    expect(select.element.value).toBe('');
  });
});
