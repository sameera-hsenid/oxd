/*
 * This file is part of OrangeHRM Inc
 *
 * Copyright (C) 2020 onwards OrangeHRM Inc
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see  http://www.gnu.org/licenses
 */

import {h, ref} from 'vue';
import {ru} from 'date-fns/locale';
import DateInput from '@ohrm/oxd/core/components/Input/DateInput';
import buildLocale from '@ohrm/oxd/utils/locale.ts';
import {convertPHPDateFormat} from '@ohrm/oxd/utils/date.ts';

export default {
  title: 'Example/DateInput',
  component: DateInput,
  argTypes: {
    style: {control: {type: 'object'}},
    hasError: {control: {type: 'boolean'}},
  },
};

const Template = args => ({
  setup() {
    const selected = ref('2021-07-01');
    return {args, selected};
  },
  render() {
    return h('div', {}, [
      h(DateInput, {
        ...this.args,
        modelValue: this.selected,
        'onUpdate:modelValue': value => {
          this.selected = value;
        },
      }),
      h('br'),
      h(
        'p',
        {},
        `Display Format : ${args?.displayFormat} | In/Out Format : ${args?.ioformat}`,
      ),
      h('p', {}, `v-model : ${this.selected}`),
    ]);
  },
});

export const Default = Template.bind({});
Default.args = {};

export const DateFormatting = Template.bind({});
DateFormatting.args = {
  firstDayOfWeek: 0,
  monthFormat: 'wide',
  dayFormat: 'narrow',
  displayFormat: 'MM/dd/yyyy',
  ioformat: 'yyyy-MM-dd',
  locale: ru,
};

export const DateLocalization = Template.bind({});
DateLocalization.args = {
  firstDayOfWeek: 1,
  monthFormat: 'wide',
  dayFormat: 'narrow',
  displayFormat: convertPHPDateFormat('l, d-M-Y'),
  ioformat: 'yyyy-MM-dd',
  locale: buildLocale({
    months: {
      wide: [
        'ජනවාරි',
        'පෙබරවාරි',
        'මාර්තු',
        'අප්‍රේල්',
        'මැයි',
        'ජූනි',
        'ජූලි',
        'අගෝස්තු',
        'සැප්තැම්බර්',
        'ඔක්තෝබර්',
        'නොවැම්බර්',
        'දෙසැම්බර්',
      ],
      abbreviated: [
        'ජන',
        'පෙබ',
        'මාර්තු',
        'අප්‍රේල්',
        'මැයි',
        'ජූනි',
        'ජූලි',
        'අගෝ',
        'සැප්',
        'ඔක්',
        'නොවැ',
        'දෙසැ',
      ],
    },
    days: {
      narrow: ['ඉ', 'ස', 'අ', 'බ', 'බ්‍ර', 'සි', 'සෙ'],
      wide: [
        'ඉරිදා',
        'සඳුදා',
        'අඟහරුවාදා',
        'බදාදා',
        'බ්‍රහස්පතින්දා',
        'සිකුරාදා',
        'සෙනසුරාදා',
      ],
    },
  }),
};
