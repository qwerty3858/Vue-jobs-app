import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import QuickSearchJobs from '../QuickSearchJobs.vue';

describe('QuickSearchJobs', () => {
  it('renders properly', () => {
    const wrapper = mount(QuickSearchJobs);
    expect(wrapper.text()).toContain('Arama sonucunda bulunan fırsatlar');
  });
});
